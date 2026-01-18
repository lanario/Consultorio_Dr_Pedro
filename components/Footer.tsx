export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-800 px-6 py-8 text-center text-sm text-gray-300">
      © {currentYear} Consultório Dr. Pedro Lucas
    </footer>
  )
}

