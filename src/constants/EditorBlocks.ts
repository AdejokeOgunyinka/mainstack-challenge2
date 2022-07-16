import {IoMdLink} from 'react-icons/io';
import { ImFontSize } from 'react-icons/im';
import { BlockType, IBlockElement } from "views/editor/types";
import { contact_mail, contact_phone, photo, subscriptions, headphones, twitterIcon } from 'assets/svgs';
import {GrDocumentPdf} from 'react-icons/gr';

type EditorBlock = {
    header: string;
    blocks: IBlockElement[]
}

export const EditorBlocks: EditorBlock[] = [
    {
        header: 'Basic Blocks',
        blocks: [
            {
                title: 'Links',
                description: 'Add multiple button links',
                icon: IoMdLink,
                blockType: BlockType.Link
            },
            {
                title: 'Text',
                description: 'Add contents, titles and paragraph texts.',
                icon: ImFontSize,
                blockType: BlockType.Text
            },
            {
                title: 'Mailing list',
                description: 'Set up your mailing list. Connect to mailchimp etc.',
                icon: contact_mail,
                blockType: BlockType.MailingList
            },
            {
                title: 'Phone number list',
                description: 'Set up your phone number list.',
                icon: contact_phone,
                blockType: BlockType.PhoneNumberList
            },
        ]
    },
    {
        header: 'Media',
        blocks: [
            {
                title: 'Image',
                description: 'Add single or multiple images in grid or carousel',
                icon: photo,
                blockType: BlockType.Image
            },
            {
                title: 'Video',
                description: 'Get more views, add your Youtube, vimeo video links.',
                icon: subscriptions,
                blockType: BlockType.Video
            },
            {
                title: 'Audio',
                description: 'Get more listeners, add your podcasts or favorite music.',
                icon: headphones,
                blockType: BlockType.Audio
            },
            {
                title: 'Pdf',
                description: 'Share downloadable resources with your audience',
                icon: GrDocumentPdf,
                blockType: BlockType.Pdf
            },
            {
                title: 'Tweet',
                description: 'Share your favorite tweet with your audience',
                icon: twitterIcon,
                blockType: BlockType.Tweet
            },
        ]
    },

]

export const EditorHeader: Record<string, string> = {
    [BlockType.Link] : 'Link',
    [BlockType.Text] : 'Text',
    [BlockType.MailingList] : 'Mailing List',
    [BlockType.PhoneNumberList] : 'Phone Number List',
    [BlockType.Image] : 'Image',
    [BlockType.Video] : 'Video',
    [BlockType.Audio] : 'Audio',
    [BlockType.Tweet] : 'Tweet',
    [BlockType.Pdf] : 'Pdf',
}