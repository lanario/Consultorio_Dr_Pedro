import Link from 'next/link'
import type { ButtonProps } from '@/types'

export function Button({ children, variant = 'primary', href, onClick }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-semibold text-[0.95rem] border-none cursor-pointer transition-all duration-300 ease-out inline-block text-center transform"
  
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 hover:shadow-[0_10px_30px_rgba(59,130,246,0.5)] active:scale-105",
    secondary: "bg-white/20 text-white border border-white/40 backdrop-blur-sm hover:bg-white/30 hover:scale-105"
  }
  
  const className = `${baseStyles} ${variantStyles[variant]}`
  
  if (href) {
    // Verificar se é link externo (http/https)
    const isExternalLink = href.startsWith('http://') || href.startsWith('https://')
    
    if (isExternalLink) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      )
    }
    
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

