import { Building2 } from "lucide-react";

const Header = () => {
  const navItems = [
    { name: "Startseite", href: "/" },
    { name: "Ingenieurbüro", href: "/ingenieurburo" },
    { name: "3D-Scanner", href: "/3d-scanner" },
    { name: "Über uns", href: "#" },
    { name: "Kontakt", href: "#" },
  ];

  return (
    <header className="corporate-header bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">artis GmbH</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="corporate-nav-item px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden">
            <button className="text-foreground">
              <span className="sr-only">Menü öffnen</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;