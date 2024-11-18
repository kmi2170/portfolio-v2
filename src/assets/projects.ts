export const projects = [
  {
    id: 1,
    name: {
      en: "Earthquake Tracker",
      jp: "地震情報追跡アプリ",
    },
    description: {
      en: "An App to display earthquake event information (up tp 30 days old) on Map and Table",
      jp: "地震情報（最大過去３０日）を地図と表で表示するアプリ",
    },
    features: {
      en: [
        "API call: USGS (U.S. Geological Survey)",
        "React Query: fetching the earth quake data and the state manegement",
        "UI library: Material UI",
        "Map: Leaflet",
      ],
      jp: [
        "APIコール：　米国地質調査所(USGS)",
        "データ・フェッチング&ステート管理：　React Query",
        "UIライブラリ：　Material UI",
        "地図：Leaflet",
      ],
    },
    details: {
      en: [
        "On Map, cirecles show earthquake events, with its radius and color varied according to the magnitude, and hovering cursor over the circles triggers a pop-up window that shows some detailed information",
        "The table is sortable by magnitude or time, in ascending or descending order",
        "By clicking each event in the table, the map view shifts and zooms in to the epicenter, with animation effect.",
      ],
      jp: [
        "マップ上で地震イベントは円で表示され、地震マグニチュードによって半径と色が変わる",
        "カーソルを円の上にホバーさせると、詳しい情報がポップアップ表示される",
        "表はマグニチュードまたは日時に関して昇順・降順にソート可能",
        "表の各イベントをクリックすると地図の表示が、その場所へと（アニメーション効果を伴って）移動・ズームインする",
      ],
    },
    tags: ["Next.js", "TypeScript", "Material UI", "React Query", "Leaflet"],
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
      en: "A simple Web App that displays a randomly chosen Advice",
      jp: "ランダムに選ばれたアドバイスを表示する大変シンプルなアプリ",
    },
    features: {
      en: [
        "Advice Slip JSON API",
        "Material UI",
        "TanStack Query for data fetching and state management",
      ],
      jp: [
        "API：　Advice Slip JSON API (アドバイス)",
        "UIライブラリ：　Material UI",
        "ステート管理：　TanStack Query",
      ],
    },
    details: {
      en: [
        'Get more advice by clicking "Get Another" Button ',
        "Randomly chosen background image on app start-up",
      ],
      jp: [
        '"Get Another"ボタンを押して、次のアドバイスを表示',
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
      en: "Weather app, desigined to be simple, lightweight and yet to have suffient information: Current weather, Minutely rain, 7 days forecast, and houryly forecast",
      jp: "シンプル・軽量で必要十分な天気情報を確認できるアプリ（英語表記のみ）: 現在の天気、１分毎の降水予報、７日間予報、１時間毎の降水量予報",
    },
    features: {
      en: [
        "OpenWeather API, IP-API for looking up your location",
        "Material UI",
        "Chart.js for hourly forecast",
      ],
      jp: [
        "APIコール：　OpenWeather(天気情報), IP-API(IPアドレスから現在地を取得)",
        "UIライブラリ：　Material UI",
        "Chart.js：　１時間毎の予報、１分毎の降水量予報",
      ],
    },
    details: {
      en: [
        "Current weather, Minutely rain forecast for 60 minutes, 7 days forecast, and houryly forecast for 48 hours",
        "By default, look up a place to show weather from your IP address",
        "Search locations anywhere you want",
        "Choose units between imperial and metric",
        "Auto save the last searched/displayed place and units (cookie must be enabled)",
      ],
      jp: [
        "現在の天気、一分毎６０分までの降水予報、７日間の予報、１時間毎４８時間までの予報",
        "デフォルトではIPアドレスから特定した場所の天気情報を表示",
        "任意の場所の天気情報を検索・表示",
        "メートル法とインペリアル（帝国）単位を切替可能",
        "最後に検索した場所と選択した単位が自動セーブされる（クッキー必要）",
      ],
    },
    tags: ["Next.js", "Redux Toolkit", "TypeScript", "Material UI", "Chart.js"],
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
    name: { en: "Crypto Tracker", jp: "暗号通貨情報トラッカー" },
    description: {
      en: "Cryptocurrency price list ranked by market cap and historical chart of and the prices",
      jp: "暗号通貨の価格リスト（マーケット・キャップによるランキング）と各暗号通貨の価格変動をチャート表示",
    },
    features: {
      en: [
        "CoinGecko API",
        "Material UI",
        "Chart.js for the history chart of the cryptocurrency prices",
        "Firebase for Watchlist of your favorite cryptos",
      ],
      jp: [
        "APUコール：　CoinGecko",
        "UIライブライ：　Material UI",
        "データ・フェッチング&ステート管理：　React Query (SSR対応)",
        "Chart.js：　各暗号通貨のヒストリカル・チャート",
        "Firebase：　お気に入りの暗号通貨をウオッチリストに登録",
      ],
    },
    details: {
      en: [
        "History chart of the cryptocurrency prices (24 hours, 30 days, 3 months, 1 year)",
        "Prices are in USD, Euro and JPY (Japanese Yen)",
        "Register your favarite cryptocurrencies in Watchlist (Login necessary)",
        "Two Login methods: Google account or email&password",
      ],
      jp: [
        "各通貨の直近２４時間、３０日、３ヶ月、１年間の価格変動をグラフ表示",
        "価格表示は米ドル、ユーロ、日本円",
        "お気に入りの暗号通貨をウォッチリストに登録（ログイン認証必要）",
        "２つのログイン認証方法： グーグルアカウント、メール＆パスワード",
      ],
    },
    tags: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Material UI",
      "Chart.js",
      "Firebase",
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
