export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b-2">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between py-4 px-4">
        <div>
          <span className="text-[15px] font-semibold">KEONK STUDIO</span>
        </div>
        <nav className="flex items-center gap-5 text-sm">
          <p>Features</p>
          <p>Maps</p>
          <p>Team</p>
          <p>Contact</p>
        </nav>
        <div>BROWSE MAPS</div>
      </div>
    </header>
  )
}