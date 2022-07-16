import cn1 from '../../assets/svgs/masterclass/images/unsplash_H-LIL57PHCc.png';
import cn2 from '../../assets/svgs/masterclass/images/unsplash_1i-P178kxHQ.png';
import cn3 from '../../assets/svgs/masterclass/images/unsplash_1i-P178kxHQ (1).png';
import { IPopOverLinks } from "views/tribe/pages/MyTribe/constants"
import COPY from 'assets/svgs/digital/icons/content_copy.svg'
import WHATSAPP from 'assets/svgs/digital/icons/Vector.svg'
import FACEBOOK from 'assets/svgs/digital/icons/Vector-1.svg'
import TELEGRAM from 'assets/svgs/digital/icons/logo.svg'
import EMAIL from 'assets/svgs/digital/icons/mail.svg'
import INSTAGRAM from 'assets/svgs/digital/icons/Vector-2.svg'
import TWITTER from 'assets/svgs/digital/icons/Vector-3.svg'
import MEMBERS from 'assets/svgs/digital/icons/group.svg'
import ARCHIVE from 'assets/svgs/masterclass/icons/archive.svg'
import SHARE from 'assets/svgs/digital/icons/share.svg'
import EDIT from 'assets/svgs/digital/icons/edit.svg'
import DELETE from 'assets/svgs/digital/icons/delete.svg'


export const socialLinks = [
  {
      id: 1,
      text: "Copy link",
      socialIcon: COPY,
      type: 'action'
  },
  {
      id: 2,
      text: "Share with your Tribe",
      socialIcon: MEMBERS,
      type: 'drawer'
  },
  {
      id: 3,
      text: "Share your Customers",
      socialIcon: MEMBERS,
      type: 'drawer'
  },
  {
      id: 4,
      text: "Share via Whatsapp",
      socialIcon: WHATSAPP,
      type: 'drawer'
  },
  {
      id: 5,
      text: "Share via Email",
      socialIcon: FACEBOOK,
      type: 'drawer'
  },
  {
      id: 6,
      text: "Share via Telegram",
      socialIcon: TELEGRAM,
      type: 'drawer'
  },
  {
      id: 7,
      text: "Share via Instagram",
      socialIcon: INSTAGRAM,
      type: 'drawer'
  },
  {
      id: 8,
      text: "Share via Twitter",
      socialIcon: TWITTER,
      type: 'drawer'
  },
  {
      id: 9,
      text: "Share via Email",
      socialIcon: EMAIL,
      type: 'drawer'
  },
]

export const popOverLinks :IPopOverLinks[] = [
  {
      id: 6,
      text: "Edit details",
      popIcon: EDIT,
      type: 'drawer'
  },
  {
      id: 7,
      text: "View attendees",
      popIcon: MEMBERS,
      type: 'drawer'
  },
  {
      id: 8,
      text: "Send email to attendees",
      popIcon: EMAIL,
      type: 'drawer'
  },
  {
      id: 9,
      text: "Share class link",
      popIcon: SHARE,
      type: 'drawer'
  },
  {
      id: 10,
      text: "Archive class",
      popIcon: ARCHIVE,
      type: 'drawer'
  },
  {
      id: 66,
      text: "Delete product",
      popIcon: DELETE,
      type: 'modal'
  },
]


const classesNail = [
  {
    id: 1,
    image: cn1,
    title: 'Problem Framing Training',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '20 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 2,
    image: cn2,
    title: 'Behavioral Design Workshop',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '6 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 3,
    image: cn3,
    title: 'Your Secret Productivity Weapon',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '6 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 4,
    image: cn1,
    title: 'Problem Framing Training',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Archived',
    seat: 50,
    numberSold: '20 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 5,
    image: cn2,
    title: 'Behavioral Design Workshop',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '6 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 6,
    image: cn3,
    title: 'Your Secret Productivity Weapon',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '6 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 7,
    image: cn1,
    title: 'Problem Framing Training',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '20 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 8,
    image: cn2,
    title: 'Behavioral Design Workshop',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '6 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 9,
    image: cn3,
    title: 'Your Secret Productivity Weapon',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '6 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 10,
    image: cn1,
    title: 'Problem Framing Training',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '20 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 11,
    image: cn2,
    title: 'Behavioral Design Workshop',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '6 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
  {
    id: 12,
    image: cn3,
    title: 'Your Secret Productivity Weapon',
    timing: 'Wed, May 12, 2021, 6:00 PM - 7:30 PM (your local time)',
    address: 'The Zone Plot 9, Gbagada Industrial Scheme beside UPS, Gbagada - Oworonshoki',
    amount: '$1,000',
    status: 'Active',
    seat: 50,
    numberSold: '6 attendees',
    paragraph: 'A 1-day live online class that teaches you how to engineer stakeholder buy-in, define the problems that matter & safeguard sprint success. Try searching for "failed products" on the internet to find examples of organizations that designed innovative solutions to problems n... '
  },
];

const analyticsNail = [
  {
    id: 1,
    title: 'Gross sales',
    timing: 'March 2 - March 8',
    numbers: '$32,000.99',
    percentage: '100%',
  },
  {
    id: 2,
    title: 'Net sales',
    timing: 'March 2 - March 8',
    numbers: '$32,000.99',
    percentage: '100%',
  },
  {
    id: 3,
    title: 'Tickets sold',
    timing: 'March 2 - March 8',
    numbers: '23',
    percentage: '100%',
  },
  {
    id: 4,
    title: 'Gross sales',
    timing: 'March 2 - March 8',
    numbers: '$32,000.99',
    percentage: '100%',
  },
  {
    id: 5,
    title: 'Net sales',
    timing: 'March 2 - March 8',
    numbers: '$32,000.99',
    percentage: '100%',
  },
  {
    id: 6,
    title: 'Total orders',
    timing: 'March 2 - March 8',
    numbers: '23',
    percentage: '100%',
  },
];

const topClassNail = [
  {
    id: 1,
    image: cn1,
    title: 'Problem Framing Training',
    numberSold: '10 sold',
    percentage: '29%',
    growth: 'increase',
  },
  {
    id: 2,
    image: cn2,
    title: 'Behavioral design Workshop',
    numberSold: '6 sold',
    percentage: '29%',
    growth: 'increase',
  },
  {
    id: 3,
    image: cn3,
    title: 'Your Secret Productivity Weapon',
    numberSold: '6 sold',
    percentage: '29%',
    growth: 'decrease',
  },
  {
    id: 4,
    image: cn1,
    title: 'Your soul is a river',
    numberSold: '5 sold',
    percentage: '29%',
    growth: 'decrease',
  },
  {
    id: 5,
    image: cn2,
    title: 'Faith forward future',
    numberSold: '5 sold',
    percentage: '29%',
    growth: 'increase',
  },
  {
    id: 6,
    image: cn3,
    title: 'Beautiful Resistance',
    numberSold: '8 sold',
    percentage: '29%',
    growth: 'increase',
  },
  {
    id: 7,
    image: cn1,
    title: 'The picture of Dorian Gray',
    numberSold: '12 sold',
    percentage: '29%',
    growth: 'increase',
  },
  {
    id: 8,
    image: cn2,
    title: 'Happy',
    numberSold: '10 sold',
    percentage: '19%',
    growth: 'decrease',
  },
  {
    id: 9,
    image: cn3,
    title: 'Rivera',
    numberSold: '13 sold',
    percentage: '49%',
    growth: 'increase',
  },
  {
    id: 10,
    image: cn1,
    title: 'Joyful feet',
    numberSold: '15 sold',
    percentage: '24%',
    growth: 'increase',
  },
  {
    id: 11,
    image: cn2,
    title: 'Beautiful Garmentation',
    numberSold: '6 sold',
    percentage: '6%',
    growth: 'decrease',
  },
  {
    id: 12,
    image: cn3,
    title: 'Stern',
    numberSold: '6 sold',
    percentage: '20%',
    growth: 'increase',
  },
];

const transactionsNail = [
  {
    id: 1,
    image: cn1,
    user: 'Courtney Henrey',
    amount: '$1,000',
    status: 'Successful',
    timing: 'Apr 04, 2022',
  },
  {
    id: 2,
    image: cn2,
    user: 'Ike Uche',
    amount: '$1,000',
    status: 'Pending',
    timing: 'Apr 04, 2022',
  },
  {
    id: 3,
    image: cn3,
    user: 'Josiah Smith',
    amount: '$1,000',
    status: 'Pending',
    timing: 'Apr 04, 2022',
  },
  {
    id: 4,
    image: cn1,
    user: 'Blessing Agbamoro',
    amount: '$1,000',
    status: 'Successful',
    timing: 'Apr 04, 2022',
  },
  {
    id: 5,
    image: cn2,
    user: 'Doyin Precious',
    amount: '$1,000',
    status: 'Pending',
    timing: 'Apr 04, 2022',
  },
  {
    id: 6,
    image: cn3,
    user: 'Alisson Zoe',
    amount: '$1,000',
    status: 'Successful',
    timing: 'Apr 04, 2022',
  },
  {
    id: 7,
    image: cn1,
    user: 'John Ogunyinka',
    amount: '$1,000',
    status: 'Successful',
    timing: 'Apr 04, 2022',
  },
  {
    id: 8,
    image: cn2,
    user: 'Arinze John',
    amount: '$1,000',
    status: 'Pending',
    timing: 'Apr 04, 2022',
  },
  {
    id: 9,
    image: cn3,
    user: 'Courtney Henrey',
    amount: '$1,000',
    status: 'Pending',
    timing: 'Apr 04, 2022',
  },
  {
    id: 10,
    image: cn1,
    user: 'Courtney Henrey',
    amount: '$1,000',
    status: 'Successful',
    timing: 'Apr 04, 2022',
  },
  {
    id: 11,
    image: cn2,
    user: 'Courtney Henrey',
    amount: '$1,000',
    status: 'Successful',
    timing: 'Apr 04, 2022',
  },
  {
    id: 12,
    image: cn3,
    user: 'Courtney Henrey',
    amount: '$1,000',
    status: 'Pending',
    timing: 'Apr 04, 2022',
  },
];

const customersNail = [
  {
    id: 1,
    initials: 'CH',
    user: 'Courtney Henrey',
    email: 'courtneyhenrey@gmail.com',
  },
  {
    id: 2,
    initials: 'IU',
    user: 'Ike Uche',
    email: 'ikeuche@gmail.com',
  },
  {
    id: 3,
    initials: 'JS',
    user: 'Josiah Smith',
    email: 'josaihsmith@gmail.com',
  },
  {
    id: 4,
    initials: 'BA',
    user: 'Blessing Agbamoro',
    email: 'blessingagbamoro@gmail.com',
  },
  {
    id: 5,
    initials: 'DP',
    user: 'Doyin Precious',
    email: 'doyinprecious@gmail.com',
  },
  {
    id: 6,
    initials: 'AZ',
    user: 'Alisson Zoe',
    email: 'alissonzoe@gmail.com',
  },
  {
    id: 7,
    initials: 'JO',
    user: 'John Ogunyinka',
    email: 'jokey@gmail.com',
  },
  {
    id: 8,
    initials: 'AJ',
    user: 'Arinze John',
    email: 'arinzejohn@gmail.com',
  },
  {
    id: 9,
    initials: 'CH',
    user: 'Courtney Henrey',
    email: 'courtneyhenrey@gmail.com',
  },
  {
    id: 10,
    initials: 'CH',
    user: 'Courtney Henrey',
    email: 'courtneyhenrey@gmail.com',
  },
  {
    id: 11,
    initials: 'CH',
    user: 'Courtney Henrey',
    email: 'courtneyhenrey@gmail.com',
  },
  {
    id: 12,
    initials: 'CH',
    user: 'Courtney Henrey',
    email: 'courtneyhenrey@gmail.com',
  },
];

export {
  classesNail,
  topClassNail,
  analyticsNail,
  transactionsNail,
  customersNail,
};
