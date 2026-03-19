interface BadgeProps {
  children: React.ReactNode
  dark?: boolean
}

export function Badge({ children, dark = false }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs mb-3 ${
        dark
          ? 'bg-slate-600 text-slate-200 border border-slate-500'
          : 'bg-blue-100 text-blue-800'
      }`}
    >
      {children}
    </span>
  )
}

