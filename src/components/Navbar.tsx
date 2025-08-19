import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-bg text-text shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex justify-between h-16 items-center">
        <a href="/" className="text-2xl font-bold text-primary">
          MyCRUD
        </a>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/users" className="hover:text-primary">Users</a>
          <a href="/products" className="hover:text-primary">Products</a>
        </div>

        {/* Theme Selector */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
