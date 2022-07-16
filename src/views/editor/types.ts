import { IconType } from 'react-icons';

export enum BlockType {
    Link = 'Link',
    Text = 'Text',
    MailingList = 'MailingList',
    PhoneNumberList = 'PhoneNumberList',
    Image = 'Image',
    Video = 'Video',
    Audio = 'Audio',
    Tweet = 'Tweet',
    Pdf = 'Pdf',
}
export interface IBlockElement {
    title: string;
    description: string;
    icon: IconType | string;
    blockType: BlockType;
}
