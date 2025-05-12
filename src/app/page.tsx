import Image from "next/image";
import Link from "next/link";
import CaseStudySlider from "../components/features/CaseStudySlider";
import TestimonialsSection from "../components/features/TestimonialsSection";

const detailedExplanation = `
CUBE Ship Assistの輸出発送代行サービスは、海外への商品発送を全面的にサポートし、お客様のグローバルビジネスを加速させるための最適なソリューションです。複雑で時間のかかる輸出手続き、煩雑な梱包作業、最適な輸送キャリアの選定、そして日々の発送業務からお客様を解放し、よりコア業務に集中できる環境をご提供します。

私たちは、小規模なEコマース事業者様から、大規模な輸出ビジネスを展開される企業様まで、あらゆる規模のお客様のニーズに対応可能です。長年の経験と専門知識を持つスタッフが、お客様の商品特性や輸送先の国・地域、ご予算、納期といった様々な条件を総合的に考慮し、最も効率的でコストパフォーマンスの高い発送プランをご提案します。

具体的には、インボイスやパッキングリストといった必要書類の作成サポート、関税やその他規制に関するアドバイス、商品の特性に応じた適切な梱包資材の選定と丁寧な梱包作業、そしてDHL、FedEx、UPS、EMS（国際スピード郵便）をはじめとする多様な国際輸送キャリアとの連携により、お客様の大切な商品を安全かつ迅速に世界中へお届けします。さらに、発送後の追跡情報の提供や、万が一のトラブル発生時の迅速な対応など、アフターサポートも万全です。CUBE Ship Assistをご利用いただくことで、輸出業務にかかる時間とコストを大幅に削減し、ビジネスの成長を力強く後押しします。
`;

const features = [
  {
    title: "ワンストップ・ソリューション",
    description: "面倒な書類作成から、専門知識が必要な梱包、最適な輸送手段の選定、そして日々の発送業務まで、輸出に関わる全てのプロセスをCUBE Ship Assistが一括で代行します。お客様は商品と発送先情報をご用意いただくだけ。貴重な時間とリソースを、商品開発やマーケティングといったコア業務に集中させることができます。",
    icon: "🧩"
  },
  {
    title: "圧倒的なコストパフォーマンス",
    description: "弊社は複数の大手国際輸送キャリアと特別な契約を結んでおり、お客様単独では実現が難しい競争力のある送料をご提供可能です。また、初期費用や月額固定費は一切不要。ご利用いただいた分だけお支払いいただく従量課金制ですので、無駄なコストを徹底的に排除し、お客様の利益最大化に貢献します。",
    icon: "💰"
  },
  {
    title: "柔軟なカスタマイズ対応",
    description: "お客様のビジネス規模や取り扱い商品の特性、発送先の国・地域、ご予算に応じて、最適なサービスプランをオーダーメイドでご提案します。少量多品種の発送から、大型貨物や特殊な取り扱いが必要な商品の輸出まで、あらゆるニーズに柔軟に対応。きめ細やかなヒアリングを通じて、お客様一人ひとりに最適な物流ソリューションを構築します。",
    icon: "🛠️"
  },
  {
    title: "最新テクノロジーと専門知識の融合",
    description: "リアルタイム追跡が可能な最新の物流管理システムを導入し、お客様はいつでもオンラインで貨物の状況を把握できます。また、長年培ってきた輸出入に関する専門知識とノウハウを持つ経験豊富なスタッフが、関税手続きや各国の輸入規制に関する的確なアドバイスを提供。安心してグローバルビジネスに取り組める環境を整えます。",
    icon: "💡"
  },
  {
    title: "安心の日本語サポート体制",
    description: "海外とのやり取りで不安を感じるお客様もご安心ください。お問い合わせからトラブル発生時の対応まで、全て日本語で丁寧かつ迅速にサポートいたします。お客様のビジネスに寄り添い、共に成長するパートナーとして、CUBE Ship Assistは全力でバックアップします。",
    icon: "🤝"
  }
];

const steps = [
  {
    id: 1,
    icon: "📝",
    title: "お問い合わせ・お見積もり",
    description: "まずはオンラインフォームまたはお電話で、お気軽にご相談ください。専門スタッフが迅速にお見積もりいたします。"
  },
  {
    id: 2,
    icon: "📦",
    title: "商品情報のご登録・発送準備",
    description: "簡単なシステム操作で商品情報と発送先をご登録。あとは弊社が集荷に伺うか、指定倉庫へお送りいただくだけです。"
  },
  {
    id: 3,
    icon: "🚚",
    title: "発送・追跡・完了報告",
    description: "弊社が責任を持って梱包・発送。リアルタイムで配送状況を追跡でき、完了までしっかりサポートします。"
  }
];

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section (Restored) */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-sky-500 to-indigo-600 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-inter)', 
              background: 'linear-gradient(to right, #ffffff, #e0e0e0)', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 5px rgba(0,0,0,0.4)', 
            }}
          >
            輸出発送代行サービス
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            世界へ、もっと手軽に、もっと確実に。あなたのビジネスをグローバルスタンダードへ導く、CUBE Ship Assistの輸出発送ソリューション。
          </p>
          <Link href="/contact?subject=輸出発送代行の見積もり依頼" legacyBehavior>
            <a 
              target="_blank" rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-yellow-300 transition duration-300 text-xl transform hover:scale-105"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              今すぐ無料見積もりを依頼する
            </a>
          </Link>
        </div>
      </section>

      {/* Section 1: What is Export Shipping Agency? (Restored) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-sky-600" style={{ fontFamily: 'var(--font-inter)' }}>CUBE Ship Assistの輸出発送代行とは？</h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            {detailedExplanation}
          </p>
        </div>
      </section>

      {/* Section 2: Features/Benefits (Restored) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-600" style={{ fontFamily: 'var(--font-inter)' }}>CUBE Ship Assistが選ばれる<span className="text-indigo-600">5</span>つの理由</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center group">
                <div className="text-6xl mb-6 text-sky-500 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900" style={{ fontFamily: 'var(--font-inter)' }}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How it Works / Process (Restored) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-600" style={{ fontFamily: 'var(--font-inter)' }}>ご利用は簡単 <span className="text-indigo-600">3</span>ステップ</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-sky-300" style={{ transform: 'translateY(-50%)', zIndex: 0 }}></div>
            {steps.map((step, index) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 px-4 mb-12 md:mb-0">
                <div className="bg-sky-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-5xl mb-6 shadow-lg border-4 border-white">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900" style={{ fontFamily: 'var(--font-inter)' }}>{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-8 text-sky-500 text-4xl">⬇️</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Case Studies (Now using Slider) */}
      <section className="py-16 md:py-24 bg-sky-50">
        <div className="container mx-auto px-6">
          <CaseStudySlider />
        </div>
      </section>

      {/* Section 5: Testimonials (Now using TestimonialsSection) */}
      <TestimonialsSection /> 

      {/* Final Call to Action Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-600 to-sky-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-inter)', textShadow: '0 4px 10px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,0.5)' }}
          >
            さあ、CUBE Ship Assistで<br />海外発送の未来を体験しませんか？
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            複雑な手続き、高いコスト、言葉の壁… もう悩む必要はありません。
            <br />私たち専門チームが、あなたのビジネスを世界へ羽ばたかせるお手伝いをします。
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/contact?subject=輸出発送代行の見積もり依頼" legacyBehavior>
              <a 
                target="_blank" rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-yellow-300 transition duration-300 text-xl transform hover:scale-105"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                無料見積もりを依頼する
              </a>
            </Link>
            <Link href="/contact?subject=輸出発送代行の資料請求" legacyBehavior>
              <a 
                target="_blank" rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-white hover:text-sky-600 transition duration-300 text-xl transform hover:scale-105"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                今すぐCUBE Ship Assistを体験する
              </a>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

