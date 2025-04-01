export interface Photo {
  id: string;
  mimetype: string;
  signedUrl: string;
  size: number;
  title: string;
  url: string;
  width: number;
  height: number;
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  card_cover: SignedUrl;
  small: SignedUrl;
  tiny: SignedUrl;
}

export interface SignedUrl {
  signedUrl: string;
}
