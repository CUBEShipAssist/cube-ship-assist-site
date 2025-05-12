import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNavItems = [
    { href: "/company-profile", label: "会社概要" },
    { href: "/pricing", label: "料金" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "ブログ" },
    { href: "/contact", label: "お問い合わせ" },
    // Add other relevant links like Privacy Policy, Terms of Service if needed
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">CUBE Ship Assist</h3>
            <p className="text-gray-400 text-sm">
              あなたの海外発送を、もっと簡単に、もっと安心に。グローバルビジネスを力強くサポートします。
            </p>
            {/* Optional: Add social media icons here */}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} legacyBehavior>
                    <a className="text-gray-400 hover:text-sky-400 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <p className="text-gray-400 text-sm mb-2">
              株式会社CUBE<br />
              福井県福井市みのり4丁目14-21 1F<br />
              電話: 050-3091-9986
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="text-sky-400 hover:text-sky-300 transition-colors font-semibold text-sm" target="_blank" rel="noopener noreferrer">
                お問い合わせフォームへ
              </a>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} CUBE Ship Assist. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

