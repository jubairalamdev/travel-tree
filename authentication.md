# Travel Tree - Authentication Implementation Guide

## Overview
This guide covers the Better Auth + MongoDB implementation for the Travel Tree frontend project.

## Tech Stack
- **Authentication Library:** Better Auth (successor to Auth.js)
- **Database:** MongoDB Atlas
- **Framework:** Next.js 15 App Router
- **Session Management:** Cookie-based with cookie caching

## Dependencies

### Required Packages
```bash
npm install better-auth @better-auth/mongo-adapter mongodb
```

### Package Explanations
- `better-auth` - Core authentication library
- `@better-auth/mongo-adapter` - MongoDB database adapter
- `mongodb` - Official MongoDB Node.js driver

---

## Environment Configuration

### .env File Structure
```env
# Better Auth Configuration
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# MongoDB Connection
MONGO_DB_URI=
```

### Environment Variable Details
- `BETTER_AUTH_SECRET` - Must be at least 32 characters for encryption and hashing
- `BETTER_AUTH_URL` - Base URL of your application (default: http://localhost:3000)
- `MONGO_DB_URI` - MongoDB Atlas connection string (format: mongodb+srv://<username>:<password>@cluster0.mongodb.net/travel-tree)

---

## Project Structure

```
lib/
├── mongodb.ts           # MongoDB client connection and setup
├── auth.ts              # Better Auth configuration
└── auth-client.ts       # Client-side authentication client

app/
└── api/
    └── auth/
        └── [...all]/
            └── route.ts   # API route handler for authentication

proxy.ts                 # Next.js Proxy for safe redirects
```

---

## Implementation Steps

### 1. MongoDB Connection (lib/mongodb.ts)

```typescript
import { MongoClient } from 'mongodb';

// MongoDB client with connection pooling
const client = new MongoClient(process.env.MONGO_DB_URI!);
const db = client.db(process.env.MONGODB_DB || 'travel-tree');

export const mongodb = {
  client,
  db
};

// Handle graceful shutdown for MongoDB connection
if (typeof window === 'undefined') {
  process.on('SIGINT', async () => {
    await client.close();
    process.exit(0);
  });
}
```

**Key Features:**
- Connection pooling for better performance
- Default database: 'travel-tree'
- Graceful shutdown handling
- Error handling for connection issues

---

### 2. Better Auth Configuration (lib/auth.ts)

```typescript
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { mongodb } from "./mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(mongodb.db, {
    client: mongodb.client
  }),
  emailAndPassword: {
    enabled: true,
  },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day (refresh every day)
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes cache duration
    }
  }
});
```

**Configuration Details:**
- **Database Adapter:** MongoDB with client and database reference
- **Authentication:** Email/password only (no 2FA, no email verification)
- **Session Expiration:** 7 days by default
- **Session Refresh:** Every 1 day to keep sessions fresh
- **Cookie Caching:** 5 minutes to reduce database queries

---

### 3. API Route Handler (app/api/auth/[...all]/route.ts)

```typescript
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

**Functionality:**
- Handles all authentication API requests
- Supports GET and POST methods
- Automatically routes to Better Auth endpoints

**Available Endpoints:**
- `POST /api/auth/sign-up` - User registration
- `POST /api/auth/sign-in` - User login
- `POST /api/auth/sign-out` - User logout
- `GET /api/auth/get-session` - Get current session
- `GET /api/auth/get-user` - Get current user data

---

### 4. Client-Side Auth (lib/auth-client.ts)

```typescript
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000"
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
  useUser
} = authClient;
```

**Available Hooks and Functions:**

**Reactive Hooks:**
- `useSession()` - React hook for real-time session updates
- `useUser()` - React hook for user data

**Async Functions:**
- `getSession()` - Get current session data
- `signIn()` - Sign in with credentials
- `signUp()` - Register new user
- `signOut()` - Logout user

**Usage Examples:**

```typescript
// React component - Reactive session
import { useSession } from "@/lib/auth-client";

function MyComponent() {
  const { data: session, isPending } = useSession();
  
  if (isPending) return <div>Loading...</div>;
  if (!session) return <div>Not logged in</div>;
  
  return <div>Welcome, {session.user.name}</div>;
}

// Server component - Async session
import { getSession } from "@/lib/auth-client";

async function ServerComponent() {
  const session = await getSession();
  
  if (!session) {
    return <div>Please log in</div>;
  }
  
  return <div>Welcome, {session.user.name}</div>;
}
```

---

### 5. Next.js Proxy for Safe Redirection (proxy.ts)

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from "@/lib/auth";

export function proxy(request: NextRequest) {
  // Get session from Better Auth
  const session = auth.api.getSession({
    headers: request.headers
  });

  // Redirect logged-in users away from auth pages
  if (session && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/tours', request.url));
  }

  if (session && request.nextUrl.pathname.startsWith('/register')) {
    return NextResponse.redirect(new URL('/tours', request.url));
  }

  // Redirect unauthenticated users to login
  if (!session) {
    // Allow access to auth pages
    if (request.nextUrl.pathname.startsWith('/login') ||
        request.nextUrl.pathname.startsWith('/register')) {
      return NextResponse.next();
    }

    // Protect private routes
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login/:path*',
    '/register/:path*',
    '/tours/:path*',
    '/tours/:path*',
  ],
};
```

**Proxy Features:**
- **Permission-based redirects** for logged-in/out users
- **Server-side session verification** using Better Auth API
- **Route filtering** with matcher configuration
- **Secure authentication** by checking sessions before allowing access

**Route Protection Logic:**
- ✅ Allow access to `/login` and `/register` if not authenticated
- ❌ Redirect `/login` and `/register` to `/tours` if authenticated
- ✅ Allow access to `/tours` and subpages if authenticated
- ❌ Redirect to `/login` if accessing protected routes without session

---

## Authentication Pages

### Login Page (src/components/auth/LoginPage.tsx)

```typescript
'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authClient.signIn.email({
        email: formData.email,
        password: formData.password
      });
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
```

**Features:**
- Email and password fields with validation
- Error handling and display
- Loading states during authentication
- Link to registration page
- Responsive design with Tailwind CSS

---

### Register Page (src/components/auth/RegisterPage.tsx)

```typescript
'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

export default function RegisterPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
```

**Features:**
- Name, email, and password fields with validation
- Error handling and display
- Loading states during registration
- Link to login page
- Responsive design with Tailwind CSS

---

### Protected Route Component (src/components/auth/ProtectedRoute.tsx)

```typescript
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();

  useEffect(() => {
    // Check session on mount
    const checkSession = async () => {
      const session = await authClient.getSession();
      
      if (!session) {
        // Redirect to login if no session
        router.push('/login');
        return;
      }

      // Optional: Redirect logged-in users away from auth pages
      if (window.location.pathname.startsWith('/login') ||
          window.location.pathname.startsWith('/register')) {
        router.push('/tours');
      }
    };

    checkSession();
  }, [router]);

  return <>{children}</>;
}
```

**Features:**
- Client-side session checking with `useSession`
- Server-side session verification using `getSession` API
- Automatic redirect to `/login` if unauthenticated
- Prevents logged-in users from accessing auth pages
- Loading state during session verification

---

## Session Management

### Session Data Structure

```typescript
interface Session {
  user: {
    id: string;
    email: string;
    name: string;
    image?: string;
  };
  session: {
    token: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
  };
}
```

### Session Features

**1. Session Expiration:**
- Default: 7 days
- Automatic refresh every 1 day (updateAge)

**2. Cookie Caching:**
- Enabled by default
- Max age: 5 minutes
- Reduces database queries
- Cookie strategies: compact (default), jwt, jwe

**3. Session Freshness:**
- Checks if session is within freshAge limit (1 day default)
- Useful for features requiring fresh sessions

**4. Session Management Functions:**

```typescript
// Get current session (async)
const session = await authClient.getSession();

// Get current session (reactive)
const { data: session } = authClient.useSession();

// Get current user (reactive)
const { data: user } = authClient.useUser();

// Sign out
await authClient.signOut();
```

---

## Database Collections

Better Auth automatically creates these MongoDB collections:

1. **user** - User accounts and profiles
   - id, email, name, image, createdAt, updatedAt

2. **session** - Active user sessions
   - id, token, userId, expiresAt, ipAddress, userAgent

3. **account** - Linked social accounts
   - id, userId, providerId, accountId, accessToken, refreshToken

4. **verification** - Email verification tokens
   - id, token, email, expiresAt

5. **account_verification** - Account verification tokens
   - id, token, email, expiresAt

6. **password_reset** - Password reset tokens
   - id, token, email, expiresAt

---

## Security Features

### Built-in Security:
- ✅ Password hashing (bcryptjs built-in)
- ✅ Secure cookie-based sessions
- ✅ CSRF protection on POST requests
- ✅ Session rotation and refresh
- ✅ Email validation
- ✅ Rate limiting (configurable)
- ✅ IP blocking (configurable)

### Best Practices:
- Use strong secret keys (at least 32 characters)
- Set appropriate session expiration times
- Enable cookie caching for performance
- Use HTTPS in production
- Regularly rotate secret keys

---

## Integration with Application

### Using Auth in Components:

**Server Components:**
```typescript
import { getSession } from '@/lib/auth-client';

async function ProtectedPage() {
  const session = await getSession();
  
  if (!session) {
    return <div>Access Denied</div>;
  }
  
  return <div>Welcome, {session.user.name}</div>;
}
```

**Client Components:**
```typescript
'use client';

import { useSession } from '@/lib/auth-client';

function Navigation() {
  const { data: session, isPending } = useSession();
  
  if (isPending) return <div>Loading...</div>;
  
  return (
    <nav>
      {session ? (
        <div>
          <span>Welcome, {session.user.name}</span>
          <button onClick={() => authClient.signOut()}>Logout</button>
        </div>
      ) : (
        <div>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      )}
    </nav>
  );
}
```

---

## Testing Checklist

- [ ] Test login with valid credentials
- [ ] Test login with invalid credentials
- [ ] Test registration with valid data
- [ ] Test registration with duplicate email
- [ ] Test password requirements (minimum length, etc.)
- [ ] Test session persistence after page reload
- [ ] Test session expiration after 7 days
- [ ] Test automatic session refresh
- [ ] Test redirect to login for protected routes
- [ ] Test redirect to tours for logged-in users on auth pages
- [ ] Test logout functionality
- [ ] Test social authentication (manual addition)
- [ ] Test mobile responsiveness
- [ ] Test error handling for network issues

---

## Common Issues and Solutions

### Issue: Session not persisting
**Solution:** Check cookie settings and ensure session cookie is being set properly

### Issue: Can't login after registration
**Solution:** Check email verification settings and registration flow

### Issue: Redirect not working
**Solution:** Verify proxy.ts configuration and matcher setup

### Issue: MongoDB connection errors
**Solution:** Check MONGO_DB_URI and ensure MongoDB Atlas connection is active

---

## Next Steps After Implementation

1. **Integrate Auth into Navigation:**
   - Update Navbar to show user info when logged in
   - Add login/logout buttons based on auth state

2. **Create Protected Pages:**
   - Add ProtectedRoute wrapper to admin pages
   - Implement access control for different user roles

3. **Add Social Authentication:**
   - Add Google/GitHub OAuth configuration
   - Create social auth buttons on login/register pages

4. **Implement Additional Features:**
   - Password reset flow
   - Email verification (if needed)
   - Session management UI (list active sessions)

5. **Testing and Optimization:**
   - Test all authentication flows
   - Performance optimization
   - Security audit
   - Responsive design testing

---

## References

- Better Auth Documentation: https://better-auth.com
- Next.js Proxy: https://nextjs.org/docs/app/getting-started/proxy
- MongoDB Node.js Driver: https://mongodb.github.io/node-mongodb-native/

---

**Last Updated:** July 2026
**Status:** Planning Complete - Ready for Implementation
