export const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...restProps
}) => {
  const baseStyles =
    'min-w-40 flex justify-center items-center py-3 px-6 rounded-lg font-semibold md:text-base transition-all duration-200'

  const variantStyles = {
    primary:
      'bg-primary-100 text-white hover:bg-primary-75 hover:shadow-lg hover:shadow-primary-100/30 transition-all duration-200',
    secondary:
      'border-2 border-primary-100 text-white hover:bg-primary-100/10 hover:border-primary-75 transition-all duration-200',
    accent:
      'bg-accent-100 text-white hover:bg-accent-75 hover:shadow-lg hover:shadow-accent-100/30 transition-all duration-200',
    accentSecondary:
      'border-2 border-primary-100 text-white hover:border-accent-100 hover:bg-accent-100/10 transition-all duration-200',
  }

  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} 
    } ${className}`

  return (
    <a href={href} className={combinedClassName} {...restProps}>
      {children}
    </a>
  )
}
