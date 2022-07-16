import { ImageLayoutEnum } from 'views/editor/components/ImageEditor/ImageLayoutStyle';
import { BlockType } from 'views/editor/types';

export type Device = {
  ip: string;
};

export interface IUser {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  country: string;
  dob: string;
  url: string;
  device: Device;
}

export interface LinkData {
  title?: string;
  link: string;
  id: string;
}
export interface IPhoneNumber {
  title: string;
  description: string;
}
export interface IMailingList {
  title: string;
  description: string;
  infoDestination: string;
  isLegalInfo: boolean;
}
interface IBlockData<T> {
  id: string;
  value: T;
  blockType: BlockType;
}

export interface IImage {
  position: number;
  alt: string;
  caption: string;
  link: string;
  buffer: string;
  id: string;
}

export interface IPdf {
  position: number;
  pdfTitle: string;
  pdfBuffer: string;
  pdfname: string;
  id: string;
}

export interface IPdfBlock {
  position: number;
  header: string;
  pdfs: IPdf[];
}

export interface IImageBlock {
  position: number;
  layout: ImageLayoutEnum;
  header: string;
  images: IImage[];
}

export type MediaType = 'audio' | 'video';
export interface ILink {
  id: string;
  link: string;
  position: number;
}

export enum MediaPlatform {
  Youtube = 'youtube',
  Vimeo = 'vimeo',
  Twitch = 'twitch',
  Spotify = 'Spotify',
  Soundcloud = 'Soundcloud',
  AppleMusic = 'AppleMusic',
  Tidal = 'Tidal',
  YouTubeMusic = 'YouTubeMusic',
}
export interface IMediaBlock {
  type: MediaType;
  header: string;
  position: number;
  links: ILink[];
  platform: MediaPlatform;
}

export type TextEditorData = IBlockData<string>;
export type LinkEditorData = IBlockData<LinkData[]>;
export type IPhoneNumberData = IBlockData<IPhoneNumber>;
export type IMailingListData = IBlockData<IMailingList>;
export type IImageBlockData = IBlockData<IImageBlock>;
export type IMediaBlockData = IBlockData<IMediaBlock>;
export type IPdfBlockData = IBlockData<IPdfBlock>;

export type BlockElement =
  | TextEditorData
  | LinkEditorData
  | IPhoneNumberData
  | IMailingListData
  | IImageBlockData
  | IMediaBlockData
  | IPdfBlockData;
