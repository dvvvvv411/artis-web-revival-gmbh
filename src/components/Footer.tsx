const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Datenschutz
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <div>© 2025 artis GmbH. Alle Rechte vorbehalten.</div>
            <div className="mt-1">Stand: Juli 2025</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;