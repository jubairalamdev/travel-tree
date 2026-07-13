# Travel Tree — Agent Workflow Guidelines

## Session Startup (Always Do First)
1. Read `.opencode/plans/tasks.md` — know what's done and what's next
2. Read `.opencode/plans/project-status.md` — understand current state and decisions
3. Read `.opencode/plans/design-system.md` — enforce colors, spacing, components
4. Read `AGENTS.md` (this file) — follow the workflow

## Task Tracking (Must Do After Every Task)
After completing any feature, component, page, or fix:

### 1. Update `.opencode/plans/tasks.md`
- Change `[ ]` to `[x]` for every completed sub-task
- If a task has multiple sub-items, check all that are done

### 2. Update `.opencode/plans/project-status.md`
- Update the **Current Status** line at the top
- Update the **Routes** table if new routes are added/changed
- Update **COMPLETED WORK SUMMARY** sections with new additions
- Update **NEXT SESSION — WHERE TO START** to point to the next unstarted phase
- If new decisions were made, add them under **KEY DECISIONS**

## Git Commit (Do After Logical Task Phases)
After finishing a logical unit of work (e.g. `1.2`, `1.3`, a full phase, or a significant fix):
1. Run `npm run lint` (or equivalent typecheck) to verify code quality
2. Review changes with `git status` and `git diff`
3. Stage only intended files with `git add <files>`
4. Commit with a concise, descriptive message matching repo style
   - Format: `type(scope): description` (e.g. `feat(auth): add login page`, `feat(tours): implement filter sidebar`)
   - Types: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`
5. Do NOT commit secrets, env files, node_modules, or .next

## Code Quality
- Always run lint and typecheck before committing
- Fix all warnings and errors — do not commit with known issues
- Follow existing patterns (see `src/components/` for component style)
- Use Tailwind utility classes — no inline styles or CSS modules
- Import from `@/components` barrel export when available

## Communication
- Keep responses concise (CLI output — avoid long explanations)
- Use `file:line` notation when referencing code locations
- No emojis unless user explicitly asks
- No preamble/summary after edits — just deliver the work

## Design System (Quick Reference)
| Token | Hex |
|-------|-----|
| Primary | `#fc4c5a` |
| Secondary | `#7fdbc9` |
| Accent | `#ffc83d` |
| Hover (button only) | `#0d6efd` |

- Cards: 8-12px radius, subtle shadow, 24-32px padding
- Spacing grid: 8px base
- Breakpoints: sm(640+), md(768+), lg(1024+), xl(1280+)
