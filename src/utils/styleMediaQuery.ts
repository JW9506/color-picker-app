const sizes = {
  xs: 575.98,
  sm: 767.98,
  md: 991.98,
  lg: 1199.98,
}

export function querySizeDown<T extends keyof typeof sizes>(size: T): string {
  return `@media (max-width: ${sizes[size]}px)`
}
