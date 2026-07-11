export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationState {
  isOpen: boolean
  activeLink: string
}

export interface MobileNavigation {
  isOpen: boolean
  links: NavigationLink[]
}
