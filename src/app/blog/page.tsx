export default function BlogPage() {
  return (
    <div className="space-y-8">
      <section className="py-8 bg-white shadow-lg rounded-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-[rgb(var(--primary-color))]">お知らせ・ブログ</h1>

          {/* TODO: Implement blog post listing. This will likely involve fetching posts. */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Blog Post Item 1 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              {/* TODO: Add placeholder image for blog post */}
              <h2 className="text-xl font-semibold mb-2 text-[rgb(var(--primary-color))]">ブログタイトル1</h2>
              <p className="text-gray-600 text-sm mb-2">2025年5月10日</p>
              <p className="text-gray-700 mb-4">
                ここにブログ記事の短い抜粋が入ります。詳細ページへのリンクを設けます...
              </p>
              <a href="#" className="text-[rgb(var(--primary-color))] hover:underline font-semibold">続きを読む &rarr;</a>
            </div>

            {/* Placeholder Blog Post Item 2 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-[rgb(var(--primary-color))]">ブログタイトル2</h2>
              <p className="text-gray-600 text-sm mb-2">2025年5月8日</p>
              <p className="text-gray-700 mb-4">
                これは別のブログ記事のサンプルです。コンテンツの概要をここに表示します...
              </p>
              <a href="#" className="text-[rgb(var(--primary-color))] hover:underline font-semibold">続きを読む &rarr;</a>
            </div>

            {/* Placeholder Blog Post Item 3 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-[rgb(var(--primary-color))]">新しいサービスを開始しました</h2>
              <p className="text-gray-600 text-sm mb-2">2025年5月5日</p>
              <p className="text-gray-700 mb-4">
                CUBE Ship Assistの新しいサービス展開についてお知らせします。詳細は記事をご覧ください...
              </p>
              <a href="#" className="text-[rgb(var(--primary-color))] hover:underline font-semibold">続きを読む &rarr;</a>
            </div>
          </div>
          
          {/* TODO: Add pagination if there are many blog posts */}
        </div>
      </section>
    </div>
  );
}

