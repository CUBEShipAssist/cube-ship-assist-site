export default function PricingPage() {
  return (
    <div className="space-y-8">
      <section className="py-8 bg-white shadow-lg rounded-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-[rgb(var(--primary-color))]">料金プラン</h1>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-700">
              CUBE Ship Assistは、初期費用・月額固定費無料の従量課金制です。
            </p>
            <p className="text-gray-600">
              お客様のビジネス規模や発送量に合わせて、最適なプランをご提案します。まずはお気軽にお問い合わせください。
            </p>
          </div>

          {/* Pricing Table - Inspired by OpenLogi's clarity */}
          <div className="overflow-x-auto bg-gray-50 p-6 rounded-md shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">サービス項目</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">料金目安</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">備考</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">基本手数料</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0円</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">初期費用・月額固定費なし</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">発送代行 基本料金</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">300円～</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">送り状・梱包資材費込 (120サイズまで)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">入庫手数料</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">お問い合わせください</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">商品の種類・量により変動</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">保管料</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">最初の1点目 開始日より2ヶ月間無料</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3ヶ月目～: 1ラック(60サイズ15-20点目安) 1,000円(税別)/月</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">商品撮影</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">150円(税別)～/枚</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">撮影内容により変動</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">発送運賃</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">実費</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">お客様ご契約のクーリエアカウントへ直接請求</td>
                </tr>
                {/* TODO: Add more specific pricing details or tiers if available */}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <a 
              href="/contact"
              className="inline-block bg-[rgb(var(--primary-color))] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              詳細お見積もり・お問い合わせ
            </a>
          </div>

          {/* TODO: Add a section for "料金シミュレーション" or examples of pricing */}
        </div>
      </section>
    </div>
  );
}

