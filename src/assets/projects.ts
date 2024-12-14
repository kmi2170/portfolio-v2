export const projects = [
  {
    id: 1,
    name: {
      en: "Earthquake Tracker",
      jp: "地震情報アプリ",
    },
    description: {
      en: "Display earthquake events (any period of time) on Map and Table",
      jp: "地震情報（任意の期間）を地図と表で表示",
    },
    features: {
      en: [
        "API call: USGS (U.S. Geological Survey)",
        "Data fetching and state management: Tanstack Query",
        "UI Library: Material UI",
        "Map: Leaflet",
      ],
      jp: [
        "APIコール: USGS (U.S. Geological Survey)",
        "データフェッチング、ステート管理: Tanstack Query",
        "UIライブラリ: Material UI",
        "地図: Leaflet",
      ],
    },
    details: {
      en: [
        "On Map, cirecles show earthquake events, with its radius and color varied according to the magnitude",
        "Hovering cursor over the circles triggers a pop-up window that shows some detailed information",
        "The table is sortable by magnitude or time, in ascending or descending order",
        "By clicking each event in the table, the map view shifts and zooms in to the epicenter, with animation effect.",
      ],
      jp: [
        "マップ上で地震イベントは円で表示。地震マグニチュードによって半径と色変更",
        "カーソルを円の上にホバーさせると、該当自身の情報がポップアップ表示",
        "表はマグニチュードまたは日時に関して昇順・降順にソート可能",
        "表の各イベントをクリックすると地図の表示が、その場所へと（アニメーション効果を伴って）移動・ズームインする",
      ],
    },
    tags: ["Next.js", "TypeScript", "Material UI", "Tanstack Query", "Leaflet"],
    url: "https://earthquake-tracker-ten.vercel.app",
    imageUrls: [
      "/images/eq-tracker.png",
      "/images/eq-tracker_legend.png",
      "/images/eq-tracker_zoom.png",
    ],
    repo: "https://github.com/kmi2170/earthquake-tracker",
  },
  {
    id: 2,
    name: {
      en: "Advice App",
      jp: "アドバイス・アプリ",
    },
    description: {
      en: "A simple app that displays randomly chosen Advice, Quote, Fortue Cookie",
      jp: "ランダムに選ばれたアドバイス, 著名人の名言、　フォーチュン・クッキーを表示するシンプルなアプリ",
    },
    features: {
      en: [
        "API call: Advice Slip JSON API, Quotes (Rapid API), Fortune Cookie (Rapid API)",
        "UI library: Material UI",
        "Date fetching and state management: TanStack Query",
      ],
      jp: [
        "APIコール：　Advice Slip JSON API (アドバイス), Quotes (著名人の名言、Rapid API), Fortune Cookie (フォーチュン・クッキー、Rapid API)",
        "UIライブラリ：　Material UI",
        "データフェッチ、ステート管理：　TanStack Query",
      ],
    },
    details: {
      en: [
　　　　　"Select Advice, Quote, Fortune Cookie by buttons",
        'Get more advice by clicking "Get Another" Button ',
        "Randomly chosen background image on app start-up",
      ],
      jp: [
　　　　　"ボタンでアドバイス、著名人の名言、フォーチュン・クッキーを選択",
        '"Get Another"ボタンで、次のアドバイス（名言、フォーチュン・クッキー）を表示',
          "アプリ起動時に、ランダムに選択された背景画像を表示",
      ],
    },
    tags: ["Next.js", "TypeScript", "Material UI", "TanStack Query"],
    url: "https://advice-quote.vercel.app",
    imageUrls: [
      "/images/advice-quote.png",
      "/images/advice-quote_flower.png",
      // "/images/advice-quote_quote.png",
    ],
    repo: "https://github.com/kmi2170/advice-quotes",
  },
  {
    id: 3,
    name: { en: "News Picker", jp: "News Picker" },
    description: {
      en: "Search world news by keywords, topic, sources, language (English or Japanese) and date up to a month old",
      jp: "世界中のニュースを、キーワード、トピック、ソース、言語（英語または日本語）、日付（最大1ヶ月前まで）で検索して表示",
    },
    features: {
      en: [
        "NewsCatcher API",
        "Material UI",
        "Redux Toolkit (RTK) for state manegement",
        "RTK Query for data fetching ",
      ],
      jp: [
        "APIコール：　NewsCatcher API",
        "UIライブラリ：　Material UI",
        "ステート管理＆データフェッチング：　Redux Toolkit （RTK）, RTK Query",
      ],
    },
    details: {
      en: [
        "Register search your favorite keywords and call them later (cookie must be enabled)",
      ],
      jp: [
        "検索キーワードをお気に入りとして登録し、後に呼び出すことが可能（クッキー必要）",
      ],
    },
    tags: ["Next.js", "TypeScript", "Material UI", "Redux Toolkit"],
    // url: "https://news-picker.vercel.app",
    url: "",
    imageUrls: [
      "/images/news-picker_jp.png",
      "/images/news-picker_jp_expand.png",
      "/images/news-picker_jp_menu_expand.png",
      // '/images/news-picker.png',
      // '/images/news-picker_expand.png',
      // '/images/news-picker_menu_expand.png',
    ],
    repo: "https://github.com/kmi2170/news-picker",
  },
  {
    id: 4,
    name: { en: "Weather App", jp: "天気情報アプリ" },
    description: {
      en: "Weather app, desigined to be simple, lightweight and yet to have suffient information",
      jp: "シンプル・軽量かつ十分な天気情報を確認できるアプリ（英語表記のみ)",
    },
    features: {
      en: [
        "API call: OpenWeather API, IP-API (looking up your location)",
        "Data fetching and state management: Redux Toolkit & RKT Query",
        "UI library: Material UI",
        "Chart: Chart.js",
        "Map: Leaflet.js",
      ],
      jp: [
        "APIコール：　OpenWeather(天気情報), IP-API(IPアドレスから現在地を取得)",
        "データフェッチング、ステート管理: Redux Toolkit & RKT Query",
        "UIライブラリ：　Material UI",
        "チャート： Chart.js",
        "地図: Leaflet.js",
      ],
    },
    details: {
      en: [
        "Current weather, Minutely rain forecast for the next 60 minutes, 7 days forecast, and houryly forecast for the next 48 hours",
        "On the firt launch of the app, display the weather of a place identified by your IP address",
        "Search locations anywhere and displayed the weather",
        "Choose units between imperial and metric",
        "Auto save the last displayed place and units (cookie must be enabled)",
      ],
      jp: [
        "現在の天気、一分毎６０分までの降水予報、７日間の予報、１時間毎４８時間後までの予報、地図上で気温・降水量を可視化",
        "初回アプリ起動時に、IPアドレスから特定した場所の天気情報を表示",
        "任意の場所の天気情報を検索・表示",
        "単位（メートル法とインペリアル単位）切替可",
        "最後に表示した場所と単位が自動セーブされる（クッキー必要）",
      ],
    },
    tags: [
      "Next.js",
      "Redux Toolkit",
      "RTK Query",
      "TypeScript",
      "Material UI",
      "Chart.js",
    ],
    url: "https://my-weather-app-beta.vercel.app",
    imageUrls: [
      "/images/weather-app.png",
      "/images/weather-app_daily.png",
      "/images/weather-app_hourly.png",
    ],
    repo: "https://github.com/kmi2170/weather-app",
  },

  {
    id: 5,
    name: { en: "Travel Companion", jp: "トラベル コンパニオン" },
    description: {
      en: "Search hotels, restaurants, and attractions in the area shown on the map and the weather info.",
      jp: "地図上でホテル、レストランやアトラクションを検索できるアプリ＆現地の現在の天気",
    },
    features: {
      en: [
        "Travel Advisor API, OpenWeather API",
        "Material UI",
        "Leaflet for Map",
      ],
      jp: [
        "APIコール: Travel Advisor, OpenWeather（地図上の現在の天気）",
        "UIライブライ：　Material UI",
        "地図:　Leaflet",
      ],
    },
    details: {
      en: [
        "The places found are shown by markers on the map, By hovering a cursor over it triggers a popup that shows some information of the place.",
        "More details information is listed on the left panel.",
        "By clinking the datails in popups, the list on the left scrolls to the corresponding place.",
        "By default, a location on the map is determined by your IP address. Also, can search any location you are intrested in around the world, by location name, or address.",
        "Narrow down the list by ratings.",
        "Additional infomation: weather icon are showed on the map.",
      ],
      jp: [
        "地図上に表示されているエリアのホテル、レストラン、アトラクションを検索。",
        "見つかった場所は地図上のマーカーで表示。マーカー上にカーソルを持っていくとホップアップが現れ、その場所の情報が表示される。",
        "さらに詳しい情報は左パネルのリスト表示",
        "デフォルトでは、地図上の場所はIPアドレスによって特定。さらに世界中の場所を名前や住所で検索可能",
        "評価（スターの数）によって表示される検索結果を絞り込むことができる。",
        "追加情報: 検索時の天気をアイコンで表示",
      ],
    },
    tags: ["Next.js", "TypeScript", "Material UI", "Leaflet"],
    url: "https://travel-app-tau.vercel.app",
    // url: "",
    imageUrls: [
      "/images/travel-app_searchlocation.png",
      "/images/travel-app_viewdetails.png",
      "/images/travel-app_viewweather.png",
    ],
    repo: "https://github.com/kmi2170/travel-companion",
  },
  /* { */
  /*   id: 6, */
  /*   name: { en: "Cryptocurrencies Info", jp: "クリプトカレンシー情報" }, */
  /*   description: { en: "description EN", jp: "description JP" }, */
  /*   features: { */
  /*     en: [ */
  /*       "Curent and history data of cryptocurrencies price, change, etc. Details of cryptocurrencies.", */
  /*       "Use Coinranking and Newscatcher APIs", */
  /*       "Redux Toolkit Query to fetch cryptocurrencies data and news", */
  /*     ], */
  /*     jp: [], */
  /*   }, */
  /*   tags: ["Next.js", "TypeScript", "Ant Design", "Redux Toolkit", "Chart.js"], */
  /*   // url: "https://cryptocurrencies-app.vercel.app", */
  /*   url: "", */
  /*   imageUrls: [ */
  /*     "/images/cryptosinfo_1.png", */
  /*     "/images/cryptosinfo_3.png", */
  /*     "/images/cryptosinfo_3.png", */
  /*   ], */
  /*   repo: "https://bitbucket.org/kmi2170/cryptos-app/src/main/", */
  /* }, */
  {
    id: 6,
    name: { en: "Crypto Tracker", jp: "暗号通貨情報" },
    description: {
      en: "Cryptocurrency price list　and historical chart of the price",
      jp: "暗号通貨のリストと価格変動のチャート表示",
    },
    features: {
      en: [
        "API call: CoinGecko API",
        "UI library: Material UI",
        "Data fetching, state management: Tanstack Query",
        "Chart: Chart.js",
      ],
      jp: [
        "API コール：　CoinGecko",
        "UIライブラリ：　Material UI",
        "データ・フェッチング&ステート管理：  Tanstack Query",
        "チャート： Chart.js",
      ],
    },
    details: {
      en: [
        "15 trend cryptocurrencies displayed in carousel",
        "Cryptocurrency list ranked by market cap",
        "By clicking currency name, move to single currency information page. where dispays the historical chart of the prices (24 hours, 30 days, 3 months, 1 year)",
        "Prices are selected from USD, Euro and JPY (Japanese Yen)",
        "Register your favarite cryptocurrencies in Watchlist (saved in Local Storage)",
      ],
      jp: [
　　　　　"１５のトレンド通貨をカルーセルで表示",
         "通貨リスト（マーケット・キャップによるランキング）",
         "通貨名クリックで、各通貨の個別情報ページに遷移。　直近２４時間、３０日、３ヶ月、１年間の価格変動をグラフ表示",
        "価格表示は米ドル、ユーロ、日本円から選択",
        "お気に入りの暗号通貨をウォッチリストに登録（ローカルストレージに保存）",
      ],
    },
    tags: [
      "Next.js",
      "TypeScript",
      "Tanstack Query",
      "Material UI",
      "Chart.js",
    ],
    url: "https://crypto-currency-tracker-eight.vercel.app",
    imageUrls: [
      "/images/crypto-tracker_1.png",
      "/images/crypto-tracker_2.png",
      "/images/crypto-tracker_3.png",
    ],
    repo: "https://github.com/kmi2170/crypto-tracker",
  },
  {
    id: 7,
    name: {
      en: "YouTube Timestamp Bookmarker",
      jp: "YouTube タイムスタンプ　ブックマーカー",
    },
    description: {
      en: "Chrome Extension: Save YouTube timesamp and can resume the video from the time later",
      jp: "Chrome エクステンション： 再生途中のYouTube動画のタイムスタンプをブックマークとして保存し、後に保存した時点から動画を再開できる　",
    },
    features: {
      en: ["Manifest v3", "React.js", "Webpack 5", "TailwindCSS"],
      jp: ["Manifest v3", "React.js", "Webpack 5", "TailwindCSS"],
    },
    details: {
      en: [],
      jp: [],
    },
    tags: ["Chrome Extension", "React.js", "TypeScript", "TailwindCSS"],
    url: "",
    imageUrls: [
      "/images/chrome-extension_yt-bookmarker_1.png",
      "/images/chrome-extension_yt-bookmarker_2.png",
      "/images/chrome-extension_yt-bookmarker_3.png",
    ],
    repo: "https://github.com/kmi2170/chrome-extension-youtube-bookmarker",
  },
];
