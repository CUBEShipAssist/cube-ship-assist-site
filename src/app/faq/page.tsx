export default function FaqPage() {
  return (
    <div className="space-y-8">
      <section className="py-8 bg-white shadow-lg rounded-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-[rgb(var(--primary-color))]">よくあるご質問 (FAQ)</h1>

          <div className="space-y-10">

            {/* ご契約に関するご質問 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[rgb(var(--primary-color))] pb-2">ご契約に関するご質問</h2>
              <div className="space-y-6">
                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    初期費用はかかりますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    いいえ、かかりません。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    最低契約期間はありますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    ありません。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    どのような支払い方法がありますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    銀行振込のみとなっております。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    見積もりは無料ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、無料です。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    契約前にサービス内容について詳しく相談できますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。お気軽にお問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    個人事業主でも契約できますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    契約に必要な書類は何ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    特に必須の書類はございません。お申し込み後、弊社よりご案内させていただきます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    秘密保持契約（NDA）の締結は可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。ご希望の場合はお申し付けください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    サービス利用開始までの具体的な流れを教えてください。
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    サービス利用開始までの基本的な流れは以下の通りです。<br />1.  まずはお問い合わせフォームまたはお電話にて、お客様のご要望をお聞かせください。<br />2.  ヒアリング内容に基づき、最適なプランとお見積もりをご提案いたします。<br />3.  ご提案内容にご納得いただけましたら、ご契約手続きを進めさせていただきます。<br />4.  ご契約後、商品の送付方法や各種設定についてご案内いたします。具体的には、Googleスプレッドシートにて、受注いただく商品情報や、仕入先様からの追跡番号などを共有いただきます。また、必要に応じてお取引先様のCPaSS IDおよびパスワードを共有いただく場合がございます。<br />5.  上記設定が完了次第、実際に弊社倉庫へ商品をお送りいただき、サービス開始となります。<br />ご不明な点がございましたら、各ステップでお気軽にご質問ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    契約を解約したい場合、どのような手続きが必要ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    解約をご希望の場合は、弊社担当までご連絡ください。所定の手続きについてご案内いたします。
                  </p>
                </details>
              </div>
            </div>

            {/* 商品の入荷・お預かりに関するご質問 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[rgb(var(--primary-color))] pb-2">商品の入荷・お預かりに関するご質問</h2>
              <div className="space-y-6">
                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    どのような種類の商品を預けることができますか？（サイズや重量の制限はありますか？）
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    FedEx、DHL、日本郵便が定める禁制品・規制品に該当する商品はお預かりできません。また、3辺の合計の長さが200cmを超えるもの、または重量が30kgを超える商品については、お手数ですが事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    商品の保管倉庫の所在地はどこですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    主に福井県福井市の倉庫となりますが、お取引の内容や商品の種類によっては福井県越前市の倉庫をご案内する場合もございます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    倉庫へ商品を送る際の具体的な手順や注意点を教えてください。
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    弊社倉庫へ商品をお送りいただく際の基本的な手順と注意点は以下の通りです。<br />1.  **事前連絡:** 商品を送付いただく前に、必ず弊社共有のスプレッドシートに商品情報（品名、数量、追跡番号など）をご登録ください。事前のご連絡がない場合、荷受けが遅れたり、正確な在庫管理ができない場合がございます。<br />2.  **適切な梱包:** 輸送中に商品が破損しないよう、適切な梱包をお願いいたします。特に壊れやすい商品については、十分な緩衝材をご使用ください。<br />3.  **明確な荷札:** 送り状には、弊社指定の送付先情報に加え、お客様（荷送人様）の情報、および弊社が発行する管理番号（該当する場合）を正確にご記入ください。<br />4.  **発送連絡:** 商品を発送されましたら、お手数ですが運送会社と追跡番号を共有シートにご登録ください。<br />ご不明な点がございましたら、事前に弊社担当までお問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    商品が倉庫に到着した際、連絡はいただけますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    個別の到着連絡は行っておりませんが、商品が倉庫に到着し、検品が完了次第、共有のスプレッドシートに在庫状況を反映いたしますので、そちらでご確認いただけます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    商品の保管環境（温度管理、湿度管理など）はどのようになっていますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    弊社倉庫では、常温・常湿の環境にて商品を保管しております。特別な温度管理（冷蔵・冷凍など）や湿度管理が必要な商品につきましては、現在のところ標準サービスでは対応しておりませんが、別途ご相談いただければ対応可能な場合もございますので、お気軽にお問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    預けることができない商品（危険物、法律で規制されているものなど）はありますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、ございます。前述の「どのような種類の商品を預けることができますか？（サイズや重量の制限はありますか？）」の回答にもございます通り、FedEx、DHL、日本郵便などの主要な運送会社が定める禁制品・規制品（例：引火性液体、高圧ガス、毒物、麻薬、銃刀法違反物、わいせつ物など）や、その他法令で輸送・保管が禁止されている商品はお預かりできません。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    定期的な商品の棚卸し作業は行ってもらえますか？その際の費用は？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。定期的な棚卸し作業をご希望の場合は、別途費用が発生いたしますが対応させていただきます。頻度や作業範囲によって料金が異なりますので、詳細はお問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    海外から直接倉庫へ商品を入荷させることは可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。海外からの直接納品をご希望の場合は、事前にご相談ください。通関手続きなどについてサポートさせていただきます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    入荷した商品の数量や状態の確認はどのように行われますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    入荷した商品は、基本的にご申告いただいた内容と照合し、数量の確認および外観上の破損がないかの目視検品を行います。検品結果は共有のスプレッドシートに反映いたします。なお、商品の動作確認や詳細な内部検品をご希望の場合は、事前に共有シートにてその旨をご連絡いただく必要があり、別途費用が発生する場合がございます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    バーコードが付いていない商品でも預けることは可能ですか？その場合の管理方法は？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。バーコードが付いていない商品については、弊社にて個別の管理番号を発行し、そちらを用いて在庫管理を行います。
                  </p>
                </details>
              </div>
            </div>

            {/* 検品作業に関するご質問 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[rgb(var(--primary-color))] pb-2">検品作業に関するご質問</h2>
              <div className="space-y-6">
                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    どのような範囲・基準で検品作業を行ってもらえますか？（例：目視検品、数量確認、破損確認など）
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    検品範囲や基準は、基本的にお客様（クライアント様）のご指示に基づき決定いたします。一般的には、入荷時の数量確認、品番確認、外箱の破損確認などを行いますが、ご要望に応じて、商品の販売ページや仕入れページの情報と照合して内容物の一致を確認することも可能です。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    検品の基準をこちらで指定することは可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。詳細な検品基準をご指定いただけます。ただし、作業内容によっては別途費用が発生する場合がございますので、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    検品時に不良品が発見された場合、どのように対応してもらえますか？（連絡、返品処理など）
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    検品時に不良品が発見された場合は、速やかに共有のスプレッドシートを通じてお客様にご連絡いたします。その後の対応（返品処理、交換手配など）につきましては、お客様のご指示に従い対応させていただきます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    検品作業の結果は、どのような形で報告してもらえますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    検品作業の結果（良品数、不良品数、不良内容など）は、共有のスプレッドシートに記録し、お客様にご報告いたします。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    特定の商品や項目に絞って検品作業を依頼することはできますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。特定の商品や項目に絞った検品作業も承ります。ご希望の内容によっては別途費用が発生する場合がございますので、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    検品作業には別途料金が発生しますか？料金体系を教えてください。
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    基本的な入荷時の数量確認や簡易な外観検品は、基本料金に含まれている場合がございます。しかし、商品の開封を伴う詳細な検品、動作確認、特定の基準に基づく精密な検品など、標準作業を超える検品をご希望の場合は、作業内容に応じて別途お見積もりさせていただき、追加料金が発生いたします。具体的な料金体系につきましては、ご希望の検品内容をお伺いした上で個別にご案内させていただきますので、お気軽にお問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    アパレル商品特有の検品（縫製不良、汚れ、ほつれ、採寸など）も依頼できますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。アパレル商品特有の検品（縫製不良、汚れ、ほつれ、採寸など）も承ります。作業内容に応じて別途費用が発生いたしますので、詳細はお問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    精密機器や電子機器の動作確認まで検品範囲に含めることは可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    通電確認程度の簡易な動作確認であれば対応可能です。それ以上の詳細な動作確認や専門知識を要する検品につきましては、別途費用が発生いたしますが、可能な範囲で対応させていただきますので、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    食品の場合、賞味期限や消費期限のチェックも行ってもらえますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。食品の賞味期限や消費期限のチェックも承ります。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    万が一、検品ミスによる損害が発生した場合の補償制度はありますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    弊社の検品作業に起因する明らかなミスにより、お客様に損害が発生し、かつ商品が弊社に返送された場合に限り、出荷時の送料と返送料実費を補償させていただきます。その際、運送会社からの請求書など、金額を証明できる書類のご提出をお願いいたします。商品が弊社に返送されないケースや、その他の状況につきましては、個別にご相談させてください。
                  </p>
                </details>
              </div>
            </div>

            {/* 梱包作業に関するご質問 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[rgb(var(--primary-color))] pb-2">梱包作業に関するご質問</h2>
              <div className="space-y-6">
                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    通常、どのような梱包資材（段ボール、緩衝材など）を使用していますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    商品のサイズや特性に合わせて、一般的に市販されている新品の段ボール、エアキャップ（プチプチ）、クラフト紙、発泡スチロールなどの緩衝材を適切に使用し、安全にお届けできるよう努めております。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    こちらで用意した梱包資材を使用してもらうことは可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    申し訳ございませんが、原則として弊社で用意する梱包資材、または弊社が品質を確認・承認した梱包資材のみを使用させていただいております。これは、輸送中の商品の安全性を確保し、作業効率を維持するためです。特別なご要望がある場合は、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    ギフト用のラッピングやメッセージカードの同梱といった梱包は依頼できますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。ギフト用のラッピングやメッセージカードの同梱も承ります。作業内容や資材に応じて別途費用が発生いたしますので、詳細はお問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    商品の特性に合わせた緩衝材の選定や梱包方法の提案はしてもらえますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。商品の特性（壊れやすさ、形状など）をお知らせいただければ、最適な緩衝材の選定や梱包方法をご提案させていただきます。内容によっては別途費用が発生する場合がございます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    複数の異なる商品を一つにまとめて梱包（同梱）することは可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。お客様からのご指示に基づき、複数の商品を一つにまとめて梱包（同梱）いたします。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    納品書、請求書、チラシ、サンプル品などを商品と一緒に同梱できますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。納品書、チラシ、サンプル品などの同梱物も承ります。同梱物の種類や作業内容によっては別途費用が発生する場合がございますので、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    環境に配慮した梱包資材（再生紙、バイオマスプラスチックなど）の利用は可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。環境に配慮した梱包資材のご利用をご希望の場合は、別途費用が発生する場合がございますが、可能な範囲で対応させていただきますので、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    梱包に関する細かい指示（商品の向き、緩衝材の入れ方など）はどのように伝えればよいですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    梱包に関する細かいご指示がある場合は、事前に共有のスプレッドシートにご記入いただくか、弊社担当までご連絡ください。内容によっては別途費用が発生する場合がございます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    特殊な形状の商品や壊れやすい商品の梱包にも対応してもらえますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。特殊な形状の商品や壊れやすい商品の梱包も、細心の注意を払って対応いたします。内容によっては別途費用が発生する場合がございますので、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    通常の梱包作業以外に、特別な梱包を依頼した場合の追加料金について教えてください。
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    ギフトラッピング、特定のデザインが施された箱の使用、複雑な組み立てが必要な梱包、過度な緩衝材の使用など、弊社の標準的な梱包作業の範囲を超える特別なご要望につきましては、作業内容や使用する資材に応じて別途追加料金を頂戴しております。具体的な料金につきましては、ご希望の梱包内容を詳しくお伺いした上で、個別にお見積もりさせていただきますので、お気軽にご相談ください。
                  </p>
                </details>
              </div>
            </div>

            {/* サービス全般・その他のご質問 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[rgb(var(--primary-color))] pb-2">サービス全般・その他のご質問</h2>
              <div className="space-y-6">
                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    BtoB（企業間取引）とBtoC（消費者向け取引）の両方の発送代行に対応していますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、BtoB、BtoCのどちらの発送代行にも対応可能です。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    貴社の発送代行システムは、主要なECカートシステム（Shopify、BASE、楽天市場など）と連携可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    現在、標準ではCPaSSとの連携に対応しております。その他のECカートシステムとの連携につきましては、個別にご相談いただければ対応可能な場合もございますので、お気軽にお問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    APIを利用したシステム連携は可能ですか？可能な場合、どのようなデータ連携ができますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    申し訳ございませんが、現在APIを利用したシステム連携には対応しておりません。ただいま準備を進めておりますので、今しばらくお待ちください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    購入者からの返品があった場合の対応（受け取り、検品、再保管、報告など）はお願いできますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。購入者様からの返品対応も承っております。返品商品の受け取り、検品、再保管、およびお客様へのご報告まで一貫して対応いたします。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    購入者からのクレーム対応（問い合わせ一次対応など）も業務範囲に含まれますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    いいえ、購入者様からの直接のクレーム対応やお問い合わせの一次対応は、現在のサービス範囲には含まれておりません。恐れ入りますが、お客様ご自身でのご対応をお願いしております。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    土日祝日や年末年始などの休業日の出荷対応は可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    いいえ、原則として土日祝日および年末年始は休業日とさせていただいており、出荷業務は行っておりません。詳細な営業日につきましては、別途お問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    緊急時の連絡体制や対応フローはどのようになっていますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    緊急時には、まず弊社担当者へお電話またはメールにてご連絡ください。状況を迅速に把握し、可能な限り速やかに対応策をご案内いたします。また、システム障害など広範囲に影響が及ぶ事態が発生した場合は、弊社ウェブサイトやメールにて状況をご報告し、復旧に向けた対応を最優先で進めます。平常時から緊急連絡先を共有させていただき、万一の事態にもスムーズに連携できるよう努めております。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    発送代行システムの操作方法に関するマニュアルやサポート体制はありますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、ございます。CPaSSをはじめとする弊社ご利用システムに関する操作マニュアルをご用意しております。また、ご不明な点がございましたら、メールやお電話にて弊社サポート担当が丁寧にご案内いたしますのでご安心ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    他の発送代行サービスと比較した場合の、貴社の強みや特徴は何ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    弊社の強みは、お客様一人ひとりのニーズに合わせた柔軟な対応力と、きめ細やかなサポート体制です。特に、海外発送における豊富な経験とノウハウを活かし、複雑な手続きもスムーズに代行いたします。また、福井県という立地を活かしたコストパフォーマンスの高いサービス提供も特徴の一つです。お客様とのコミュニケーションを重視し、単なる作業代行ではなく、お客様のビジネス成長を物流面からサポートするパートナーでありたいと考えております。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    大規模なセール時や繁忙期など、出荷量が急増した場合の対応力はどの程度ありますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    大規模なセール時や年末年始などの繁忙期における出荷量の急増にも、柔軟に対応できる体制を整えております。毎年多くのクライアント様の繁忙期対応を経験しており、十分な人員と作業スペースを確保し、通常時と変わらぬ品質でサービスを提供できるよう努めております。事前にセール時期や予測される出荷量をご共有いただければ、よりスムーズな対応が可能ですので、ご協力をお願いいたします。
                  </p>
                </details>
              </div>
            </div>

            {/* 送り状作成に関するご質問 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[rgb(var(--primary-color))] pb-2">送り状作成に関するご質問</h2>
              <div className="space-y-6">
                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    送り状の作成は、基本的にどちらが行うのでしょうか？（貴社か当方か）
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    送り状の作成は、基本的に弊社にて行います。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    送り状のフォーマット（デザイン、記載項目など）をこちらで指定することは可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    申し訳ございませんが、送り状のフォーマットは弊社指定または各運送会社指定のものとなり、お客様による個別のデザイン指定は承っておりません。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    送り状に記載される発送元の情報（会社名、住所、電話番号など）を当方の情報に設定できますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、基本的にはお客様（ご依頼主様）の情報を発送元として記載いたします。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    海外へ発送する場合、インボイスや税関告知書などの必要書類の作成も代行してもらえますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。海外発送に必要なインボイスや税関告知書などの書類作成も代行いたします。ただし、内容や発送国によっては別途費用が発生する場合がございますので、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    貴社の送り状発行システムと、当方が利用している受注管理システム等との連携は可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    ご利用の受注管理システムの種類や仕様によって連携の可否が異なります。詳細をお伺いした上で連携の可否や方法についてご案内させていただきますので、まずはお気軽にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    手書きの送り状や、特定の運送会社指定の専用伝票での発送にも対応していますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。手書きの送り状や特定の運送会社指定の専用伝票での発送にも対応いたします。ただし、作業効率の観点から、可能な限り弊社システムからの発行にご協力をお願いしております。内容によっては別途費用が発生する場合がございますので、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    発行された送り状の控えや発送履歴は、どのように確認できますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    発行された送り状の控えや発送履歴は、弊社が利用するCPaSS上でご確認いただけます。お客様専用のアカウントを発行いたしますので、いつでもオンラインでご確認可能です。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    着払いや代金引換（代引き）の送り状作成にも対応していますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、着払いや代金引換（代引き）の送り状作成にも対応しております。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    送り状に記載する品名について、具体的な指示やテンプレートはありますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    送り状に記載する品名につきましては、基本的に各運送会社の規定に沿った正確な内容をご指示いただいております。特に国際発送の場合は、内容品の英語表記やHSコードなどが必要となる場合がございます。ご不明な場合は、弊社担当者にご相談いただければ、適切な記載方法についてアドバイスさせていただきます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    複数個口で発送する場合の送り状は、どのように作成・管理されますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    複数個口で発送する場合は、各お荷物ごとに送り状を作成し、共有のスプレッドシートにて個口数や各追跡番号を関連付けて管理いたします。これにより、お客様も各お荷物の配送状況を正確に把握できます。
                  </p>
                </details>
              </div>
            </div>

            {/* 商品の発送に関するご質問 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[rgb(var(--primary-color))] pb-2">商品の発送に関するご質問</h2>
              <div className="space-y-6">
                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    主に利用されている国内・国際の配送業者はどこですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    国内発送につきましては主に日本郵便を、国際発送につきましては主にFedEx、DHL、日本郵便を利用しております。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    配送業者をこちらで指定することは可能ですか？可能な場合、選択肢を教えてください。
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    国際発送の場合に限り、FedEx、DHL、日本郵便の中からお客様にご指定いただくことが可能です。国内発送につきましては、原則として弊社指定の配送業者となりますが、特別なご要望がある場合はご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    国内および海外への送料は、どのように算出されますか？料金表はありますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、国内および海外への送料については、サイズ、重量、発送先に基づいて算出いたします。詳細な料金表をご用意しておりますので、お気軽にお申し付けください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    海外発送に対応している国や地域を教えてください。また、発送できない国や地域はありますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    基本的に、ご利用いただく運送会社（FedEx、DHL、日本郵便など）がサービスを提供している国や地域であれば発送可能です。ただし、国際情勢や各国の輸入規制により、一時的または恒久的に発送できない国や地域もございます。具体的な発送可否につきましては、都度お問い合わせください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    発送後、荷物の追跡番号はいつ、どのように通知されますか？購入者への直接通知も可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    商品発送後、追跡番号は速やかに共有のスプレッドシートに反映いたします。恐れ入りますが、購入者様への追跡番号の通知につきましては、お客様（クライアント様）ご自身で更新・ご連絡いただく形となっております。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    当日発送に対応してもらうための、発送指示の締め切り時間は何時ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    当日発送の締め切り時間は、FedExをご利用の場合は午前9時まで、DHLおよび日本郵便をご利用の場合は午前11時までとなっております。この時間までに発送指示をいただければ、原則として当日中に発送いたします。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    発送指示から実際に商品が発送されるまで、通常どのくらいの日数がかかりますか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    通常、弊社倉庫でお荷物をお預かりしてから3営業日以内に発送いたします。ただし、商品の動作確認、撮影、修理といった別途サービスをご依頼いただいている場合は、作業内容に応じて追加のお時間をいただくことがございます。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    クール便（冷蔵・冷凍）での発送に対応していますか？その場合の追加料金や注意点は？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。クール便（冷蔵・冷凍）での発送にも対応しております。ただし、別途追加料金が発生いたします。また、商品の種類やサイズ、発送先によっては対応できない場合もございますので、事前にご相談ください。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    家具や大型家電など、通常サイズを超える商品の発送も可能ですか？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、可能です。家具や大型家電など、通常サイズを超える商品の発送も承ります。ただし、サイズや重量、発送先によって料金や利用可能な運送会社が異なりますので、別途お見積もり・ご相談となります。
                  </p>
                </details>

                <details className="p-4 bg-gray-50 rounded-md shadow-sm group">
                  <summary className="font-semibold text-lg text-gray-700 cursor-pointer group-open:text-[rgb(var(--primary-color))]">
                    離島や山間部など、特殊な地域への発送は可能ですか？その場合の追加料金や配送日数の目安は？
                  </summary>
                  <p className="text-gray-600 mt-2 ml-4">
                    はい、離島や山間部など特殊な地域への発送も、ご利用いただく運送会社のサービス提供範囲内であれば可能です。ただし、通常よりも配送日数がかかる場合や、追加料金（中継料など）が発生する場合がございます。具体的な料金や日数につきましては、発送先に応じて個別にご案内させていただきます。
                  </p>
                </details>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

