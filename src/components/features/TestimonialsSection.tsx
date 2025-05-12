"use client";
import React from 'react';

interface Testimonial {
  id: number;
  companyName: string;
  personName: string;
  personTitle: string;
  testimonial: string;
  rating: number; // Assuming rating is out of 5
  avatarPlaceholder: string; // Placeholder for avatar image path or SVG
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    companyName: '株式会社グローバルテック',
    personName: '山田 太郎様',
    personTitle: '海外事業部 部長',
    testimonial: 'CUBE Ship Assistのおかげで、煩雑だった海外発送業務から解放され、コア業務に集中できるようになりました。特に、リアルタイムでの追跡情報は顧客からも好評です。',
    rating: 5,
    avatarPlaceholder: 'アバター1',
  },
  {
    id: 2,
    companyName: 'ファッションセレクト アバンギャルド',
    personName: '佐藤 花子様',
    personTitle: '代表取締役',
    testimonial: '小ロットからの対応や、複雑な書類作成のサポートなど、スタートアップの私たちにとって本当に心強いパートナーです。今後も事業拡大に向けて頼りにしています。',
    rating: 5,
    avatarPlaceholder: 'アバター2',
  },
  {
    id: 3,
    companyName: 'ホビーショップ・コレクターズヘブン',
    personName: '田中 一郎様',
    personTitle: 'オーナー',
    testimonial: '以前利用していた業者では、商品の破損や遅延が度々ありましたが、CUBE Ship Assistに切り替えてからは一度もトラブルがありません。梱包の丁寧さにはいつも感心しています。',
    rating: 5,
    avatarPlaceholder: 'アバター3',
  },
  {
    id: 4,
    companyName: '株式会社ヘルシーライフ・ジャパン',
    personName: '鈴木 良子様',
    personTitle: 'EC運営マネージャー',
    testimonial: 'API連携がスムーズで、受注から発送までのプロセスが完全に自動化できました。おかげで人的ミスも減り、コスト削減にも繋がっています。',
    rating: 5,
    avatarPlaceholder: 'アバター4',
  },
  {
    id: 5,
    companyName: 'アートギャラリー彩',
    personName: '高橋 直樹様',
    personTitle: 'キュレーター',
    testimonial: '美術品というデリケートな商品を扱っているため、発送には細心の注意が必要です。CUBE Ship Assistの専門知識と丁寧な対応には、いつも助けられています。',
    rating: 5,
    avatarPlaceholder: 'アバター5',
  },
  {
    id: 6,
    companyName: 'アウトドアギアーズ・エクスプローラー',
    personName: '伊藤 明日香様',
    personTitle: 'マーケティング担当',
    testimonial: '大型商品の海外発送はコストが課題でしたが、CUBE Ship Assistは最適な輸送方法を提案してくれるので、費用を抑えながらも迅速な配送が可能です。',
    rating: 4,
    avatarPlaceholder: 'アバター6',
  },
  {
    id: 7,
    companyName: '株式会社伝統工芸みやび',
    personName: '渡辺 健一様',
    personTitle: '代表',
    testimonial: '海外のお客様は品質に厳しい方が多いですが、CUBE Ship Assistの検品と梱包は完璧です。ブランド価値を高める上で欠かせない存在です。',
    rating: 5,
    avatarPlaceholder: 'アバター7',
  },
  {
    id: 8,
    companyName: 'ベビー用品スマイルストア',
    personName: '中村 美咲様',
    personTitle: '海外販売責任者',
    testimonial: '問い合わせへのレスポンスが早く、いつも親身に対応してくれます。海外発送の知識が乏しかった私たちにとって、本当に頼りになる存在です。',
    rating: 5,
    avatarPlaceholder: 'アバター8',
  },
  {
    id: 9,
    companyName: '株式会社テックガジェット',
    personName: '木村 拓也様',
    personTitle: '商品開発部',
    testimonial: '新製品の海外ローンチで利用しました。短期間での大量発送にも柔軟に対応いただき、無事にプロジェクトを成功させることができました。',
    rating: 4,
    avatarPlaceholder: 'アバター9',
  },
  // Removed the 10th testimonial
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold mr-4">
                  {testimonial.avatarPlaceholder.substring(0,1) /* Simple placeholder */}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.personName}</h4>
                  <p className="text-sm text-gray-600">{testimonial.companyName} - {testimonial.personTitle}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.28 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

