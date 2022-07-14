import LinkIcon from "../assets/link_icon.svg";
import TextIcon from "../assets/format_text_icon.svg";
import MailingIcon from "../assets/mailing_list_icon.svg";
import PhoneListIcon from "../assets/phone_number_list_icon.svg";
import ImageIcon from "../assets/image_icon.svg";
import VideoIcon from "../assets/video_icon.svg";
import AudioIcon from "../assets/audio_icon.svg";

export const addElementDrawerContents = [
  {
    header: "Links",
    description: "Add multiple button links ",
    icon: LinkIcon,
  },
  {
    header: "Text",
    description: "Add contents, titles and paragraph texts.",
    icon: TextIcon,
  },
  {
    header: "Mailing list",
    description: "Set up your mailing list. Connect to mailchimp etc.",
    icon: MailingIcon,
  },
  {
    header: "Phone number list",
    description: "Set up your phone number list.",
    icon: PhoneListIcon,
  },
];

export const mediaDrawerContents = [
  {
    header: "Image",
    description: "Add single or multiple images in grid or carousel",
    icon: ImageIcon,
  },
  {
    header: "Video",
    description: "Get more views, add your Youtube, vimeo video links.",
    icon: VideoIcon,
  },
  {
    header: "Audio",
    description: "Get more listeners, add your podcasts or favorite music.",
    icon: AudioIcon,
  },
];
