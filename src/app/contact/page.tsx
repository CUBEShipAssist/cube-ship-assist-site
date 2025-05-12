export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="py-8 bg-white shadow-lg rounded-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-[rgb(var(--primary-color))]">お問い合わせ</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">お問い合わせフォーム</h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前 (必須)</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-color))] focus:border-[rgb(var(--primary-color))] sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">会社名</label>
                  <input type="text" name="company" id="company" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-color))] focus:border-[rgb(var(--primary-color))] sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス (必須)</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-color))] focus:border-[rgb(var(--primary-color))] sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号</label>
                  <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-color))] focus:border-[rgb(var(--primary-color))] sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">お問い合わせ内容 (必須)</label>
                  <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-color))] focus:border-[rgb(var(--primary-color))] sm:text-sm"></textarea>
                </div>
                <div>
                  {/* TODO: Add a submit button, potentially with some tsumugi AI style */}
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[rgb(var(--primary-color))] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                    送信する
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">連絡先情報</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-700">株式会社CUBE</h3>
                  <p className="text-gray-600">CUBE Ship Assist (キューブ・シップ・アシスト)</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">所在地</h3>
                  <p className="text-gray-600">〒918-8231</p>
                  <p className="text-gray-600">福井県福井市みのり4丁目14-21 1F</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">電話番号</h3>
                  <p className="text-gray-600">050-3091-9986</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Email</h3>
                  {/* TODO: Add a placeholder or actual email address */}
                  <p className="text-gray-600">info@cubeshipassist.example.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">営業時間</h3>
                  <p className="text-gray-600">平日 9:00 - 18:00 (土日祝日を除く)</p>
                </div>
              </div>
              {/* TODO: Add a map if desired */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

