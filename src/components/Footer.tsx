export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
        <span>&copy; {new Date().getFullYear()} Vector Point LLC</span>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-text transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-text transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-text transition-colors">
            Contact
          </a>
          <a href="/privacy" className="hover:text-text transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
