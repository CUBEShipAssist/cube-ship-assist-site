"use client";
import React, { useState, useEffect } from 'react';

interface CaseStudy {
  id: number;
  companyName: string;
  logoPlaceholder: string; // Placeholder for logo image path or SVG
  summary: string;
  personPlaceholder: string; // Placeholder for person image path or SVG
  personName: string;
  personTitle: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    companyName: '株式会社グローバルテック',
    logoPlaceholder: 'ロゴプレースホルダー1',
    summary: '当社の海外向けECサイトの物流を一手に委託。CUBE Ship Assist導入後、発送業務の効率が30%向上し、顧客満足度も大幅にアップしました。',
    personPlaceholder: '人物プレースホルダー1',
    personName: '山田 太郎様',
    personTitle: '海外事業部 部長',
  },
  {
    id: 2,
    companyName: 'ファッションセレクト アバンギャルド',
    logoPlaceholder: 'ロゴプレースホルダー2',
    summary: 'ヨーロッパ市場へのアパレル製品展開にあたり、複雑な関税手続きと多品種小ロット発送に課題を抱えていました。CUBE Ship Assistのきめ細やかなサポートで、スムーズな海外展開が実現しました。',
    personPlaceholder: '人物プレースホルダー2',
    personName: '佐藤 花子様',
    personTitle: '代表取締役',
  },
  {
    id: 3,
    companyName: 'ホビーショップ・コレクターズヘブン',
    logoPlaceholder: 'ロゴプレースホルダー3',
    summary: '世界中のコレクターへ希少な商品を届けるため、確実かつ迅速な発送が求められていました。CUBE Ship Assistの追跡システムと丁寧な梱包で、安心して商品を任せられています。',
    personPlaceholder: '人物プレースホルダー3',
    personName: '田中 一郎様',
    personTitle: 'オーナー',
  },
  {
    id: 4,
    companyName: '株式会社ヘルシーライフ・ジャパン',
    logoPlaceholder: 'ロゴプレースホルダー4',
    summary: '健康食品の海外サブスクリプションサービスを開始するにあたり、定期発送と在庫管理の自動化が急務でした。CUBE Ship Assistのシステム連携で、業務負担を大幅に削減できました。',
    personPlaceholder: '人物プレースホルダー4',
    personName: '鈴木 良子様',
    personTitle: 'EC運営マネージャー',
  },
  {
    id: 5,
    companyName: 'アートギャラリー彩',
    logoPlaceholder: 'ロゴプレースホルダー5',
    summary: '美術品の海外発送は破損リスクが心配でしたが、CUBE Ship Assistの専門的な梱包技術と保険サービスにより、高価な作品も安心して世界中のお客様にお届けできています。',
    personPlaceholder: '人物プレースホルダー5',
    personName: '高橋 直樹様',
    personTitle: 'キュレーター',
  },
  {
    id: 6,
    companyName: 'アウトドアギアーズ・エクスプローラー',
    logoPlaceholder: 'ロゴプレースホルダー6',
    summary: '北米のアウトドア市場向けに、大型のアウトドア用品を発送する必要がありました。CUBE Ship Assistは大型貨物の取り扱いにも長けており、コストを抑えつつ迅速な配送を実現しています。',
    personPlaceholder: '人物プレースホルダー6',
    personName: '伊藤 明日香様',
    personTitle: 'マーケティング担当',
  },
  {
    id: 7,
    companyName: '株式会社伝統工芸みやび',
    logoPlaceholder: 'ロゴプレースホルダー7',
    summary: '日本の伝統工芸品を海外の富裕層に販売。CUBE Ship Assistの丁寧な検品と高級感のある梱包で、ブランドイメージを損なうことなく、お客様に満足いただいています。',
    personPlaceholder: '人物プレースホルダー7',
    personName: '渡辺 健一様',
    personTitle: '代表',
  },
  {
    id: 8,
    companyName: 'ベビー用品スマイルストア',
    logoPlaceholder: 'ロゴプレースホルダー8',
    summary: 'アジア圏の若いファミリー層に向けてベビー用品を販売。CUBE Ship Assistの多言語対応と、きめ細やかなカスタマーサポートが海外顧客からの信頼獲得に繋がっています。',
    personPlaceholder: '人物プレースホルダー8',
    personName: '中村 美咲様',
    personTitle: '海外販売責任者',
  },
];

const CaseStudySlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudiesData.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (caseStudiesData.length === 0) {
    return <p>導入事例はありません。</p>;
  }

  const currentStudy = caseStudiesData[currentIndex];

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">導入事例</h3>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {caseStudiesData.map((study) => (
            <div key={study.id} className="w-full flex-shrink-0 p-4">
              <div className="bg-white p-6 rounded-md shadow-md min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 mr-4">
                      {study.logoPlaceholder}
                    </div>
                    <h4 className="text-xl font-bold text-blue-600">{study.companyName}</h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{study.summary}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 mr-3">
                      {study.personPlaceholder}
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">{study.personName}</p>
                      <p className="text-gray-600 text-xs">{study.personTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {caseStudiesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudySlider;

