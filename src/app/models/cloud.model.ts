export interface CloudGeneratorConfiguration {
  format: string;
  width: number;
  height: number;
  fontScale: number;
  fontFamily: string;
  scale: string;
  text: string;
}

export interface ImageSize {
  id: number;
  type: string;
  width: string;
  height: string;
}
