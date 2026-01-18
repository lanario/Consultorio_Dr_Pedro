interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs mb-3">
      {children}
    </span>
  )
}

