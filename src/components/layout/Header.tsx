import Link from 'next/link';

const Header = () => {
  const navItems = [
    { href: "/company-profile", label: "会社概要" },
    { href: "/pricing", label: "料金" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "ブログ" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-sky-600 hover:text-sky-700 transition-colors">
            CUBE Ship Assist
          </a>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} legacyBehavior>
              <a className="text-gray-600 hover:text-sky-600 transition-colors font-medium" target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here if needed */}
          <button className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

