export interface ImageSource {
  type: string;
  asset: {
    ref: string;
    type: string;
  }
}

export interface DataBase {
  createdAt: string;
  id: string;
  rev: string;
  type: string;
  updatedAt: string;
}

export interface DataAbout extends DataBase {
  en: string,
  jp: string,
  createdAt: string;
}

export interface DataSkills extends DataBase {
  name: string;
  iconName: string;
  icons: {
    original: ImageSource;
    originalWordmark: ImageSource;
  };
}

