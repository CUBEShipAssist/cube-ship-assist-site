export default function CompanyProfilePage() {
  return (
    <div className="space-y-8">
      <section className="py-8 bg-white shadow-lg rounded-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-[rgb(var(--primary-color))]">会社概要</h1>
          
          <div className="bg-gray-50 p-8 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-gray-200">
              <div className="md:col-span-1 font-semibold text-gray-700">会社名</div>
              <div className="md:col-span-2 text-gray-800">株式会社CUBE</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-gray-200">
              <div className="md:col-span-1 font-semibold text-gray-700">サービス名</div>
              <div className="md:col-span-2 text-gray-800">CUBE Ship Assist (キューブ・シップ・アシスト)</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-gray-200">
              <div className="md:col-span-1 font-semibold text-gray-700">所在地</div>
              <div className="md:col-span-2 text-gray-800">福井県福井市みのり4丁目14-21 1F</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-gray-200">
              <div className="md:col-span-1 font-semibold text-gray-700">電話番号</div>
              <div className="md:col-span-2 text-gray-800">050-3091-9986</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 font-semibold text-gray-700">事業内容</div>
              <div className="md:col-span-2 text-gray-800">
                <ul className="list-disc list-inside space-y-1">
                  <li>輸出発送代行サービス</li>
                  <li>国際物流コンサルティング</li>
                  <li>在庫管理・フルフィルメントサービス</li>
                  {/* TODO: Add more specific business details if available */}
                </ul>
              </div>
            </div>
          </div>

          {/* TODO: Add sections like "代表挨拶", "経営理念", "沿革" if needed, similar to OpenLogi */}
        </div>
      </section>
    </div>
  );
}

