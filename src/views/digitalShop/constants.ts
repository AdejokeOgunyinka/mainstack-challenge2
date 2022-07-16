import pn1 from "../../assets/svgs/digital/images/unsplash_H-LIL57PHCc.png"
import pn2 from "../../assets/svgs/digital/images/unsplash_1i-P178kxHQ.png"
import pn3 from "../../assets/svgs/digital/images/unsplash_ViMrMawjj7s.png"
import pn4 from "../../assets/svgs/digital/images/unsplash_DxAzOKSiPoE.png"
import pn5 from "../../assets/svgs/digital/images/unsplash_CNguCOudOAM.png"
import pn6 from "../../assets/svgs/digital/images/unsplash_RssQQKH4w_4.png"
import pn7 from "../../assets/svgs/digital/images/unsplash_wAKwqCC6EQg.png"
import pn8 from "../../assets/svgs/digital/images/unsplash_yIMy3ERBc3o-1.png"
import pn9 from "../../assets/svgs/digital/images/unsplash_CNguCOudOAM.png"
import pn10 from "../../assets/svgs/digital/images/unsplash_RssQQKH4w_4.png"
import pn11 from "../../assets/svgs/digital/images/unsplash_wAKwqCC6EQg.png"
import pn12 from "../../assets/svgs/digital/images/unsplash_yIMy3ERBc3o.png"
import yt1 from "../../assets/svgs/tribe/images/unsplash_1i-P178kxHQ.png"
import yt2 from "../../assets/svgs/tribe/images/unsplash_1i-P178kxHQ-1.png"
import yt3 from "../../assets/svgs/tribe/images/unsplash_1i-P178kxHQ-2.png"
import yt4 from "../../assets/svgs/tribe/images/unsplash_1i-P178kxHQ-3.png"
import yt5 from "../../assets/svgs/tribe/images/unsplash_1i-P178kxHQ (2).png"
import yt6 from "../../assets/svgs/tribe/images/unsplash_1i-P178kxHQ-1 (2).png"
import yt7 from "../../assets/svgs/tribe/images/unsplash_1i-P178kxHQ-2 (2).png"
import yt8 from "../../assets/svgs/tribe/images/unsplash_1i-P178kxHQ-3 (2).png"
import COPY from 'assets/svgs/digital/icons/content_copy.svg'
import WHATSAPP from 'assets/svgs/digital/icons/Vector.svg'
import FACEBOOK from 'assets/svgs/digital/icons/Vector-1.svg'
import TELEGRAM from 'assets/svgs/digital/icons/logo.svg'
import EMAIL from 'assets/svgs/digital/icons/mail.svg'
import INSTAGRAM from 'assets/svgs/digital/icons/Vector-2.svg'
import TWITTER from 'assets/svgs/digital/icons/Vector-3.svg'
import MEMBERS from 'assets/svgs/digital/icons/group.svg'
import SHARE from 'assets/svgs/digital/icons/share.svg'
import EDIT from 'assets/svgs/digital/icons/edit.svg'
import DELETE from 'assets/svgs/digital/icons/delete.svg'
import { IPopOverLinks } from "views/tribe/pages/MyTribe/constants"

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
        id: 1,
        text: "Edit details",
        popIcon: EDIT,
        type: 'drawer'
    },
    {
        id: 2,
        text: "View customers",
        popIcon: MEMBERS,
        type: 'drawer'
    },
    {
        id: 3,
        text: "Send email to customers",
        popIcon: EMAIL,
        type: 'drawer'
    },
    {
        id: 4,
        text: "Share product link",
        popIcon: SHARE,
        type: 'drawer'
    },
    {
        id: 55,
        text: "Delete product",
        popIcon: DELETE,
        type: 'modal'
    },
]


const productsNail = [
    {
        id: 1,
        image: pn1,
        title: "How Innovation Works: And Why It Flourishes in Freed...",
        bookTitle: "How Innovation Works",
        amount: "$1,000",
        status: "Active",
        numberSold: "10 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 2,
        image: pn2,
        title: "The picture of Dorian Gray",
        bookTitle: "The picture of Dorian Gray",
        amount: "$1,000",
        status: "Active",
        numberSold: "6 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 3,
        image: pn3,
        title: "Company of One by Paul Jarvis",
        bookTitle: "Company of One by Paul Jarvis",
        amount: "$1,000",
        status: "Active",
        numberSold: "6 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 4,
        image: pn4,
        title: "Your soul is a river",
        bookTitle: "Your soul is a river",
        amount: "$1,000",
        status: "Active",
        numberSold: "5 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 5,
        image: pn5,
        title: "Faith forward future",
        bookTitle: "Faith forward future",
        amount: "$1,000",
        status: "Active",
        numberSold: "5 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 6,
        image: pn6,
        title: "Beautiful Resistance",
        bookTitle: "Beautiful Resistance",
        amount: "$1,000",
        status: "Archived",
        numberSold: "5 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 7,
        image: pn7,
        title: "The picture of Dorian Gray",
        bookTitle: "The picture of Dorian Gray",
        amount: "$1,000",
        status: "Archived",
        numberSold: "2 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 8,
        image: pn8,
        title: "Happy",
        bookTitle: "Happy",
        amount: "$1,000",
        status: "Archived",
        numberSold: "2 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 9,
        image: pn9,
        title: "Rivera",
        bookTitle: "Rivera",
        amount: "$1,000",
        status: "Active",
        numberSold: "2 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 10,
        image: pn10,
        title: "Joyful feet",
        bookTitle: "Joyful feet",
        amount: "$1,000",
        status: "Archived",
        numberSold: "7 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 11,
        image: pn11,
        title: "Beautiful Garmentation",
        bookTitle: "Beautiful Garmentation",
        amount: "$1,000",
        status: "Archived",
        numberSold: "1 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    {
        id: 12,
        image: pn12,
        title: "Stern",
        bookTitle: "Stern",
        amount: "$1,000",
        status: "Archived",
        numberSold: "2 sold",
        paragraph: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. Forget short-term symptoms like Donald Trump and Brexit, it is innovation itself that explains them and that will itself shape the future of technolgy labaristus as well as facilitate"
    },
    
]

const analyticsNail = [
    {
        id: 1,
        title: "Gross sales",
        timing: "March 2 - March 8",
        numbers: "$32,000.99",
        percentage: "100%",
    },
    {
        id: 2,
        title: "Net sales",
        timing: "March 2 - March 8",
        numbers: "$32,000.99",
        percentage: "100%",
    },
    {
        id: 3,
        title: "Total orders",
        timing: "March 2 - March 8",
        numbers: "23",
        percentage: "100%",
    },
    {
        id: 4,
        title: "Gross sales",
        timing: "March 2 - March 8",
        numbers: "$32,000.99",
        percentage: "100%",
    },
    {
        id: 5,
        title: "Net sales",
        timing: "March 2 - March 8",
        numbers: "$32,000.99",
        percentage: "100%",
    },
    {
        id: 6,
        title: "Total orders",
        timing: "March 2 - March 8",
        numbers: "23",
        percentage: "100%",
    },
    
]

const topProductNail = [
    {
        id: 1,
        image: pn1,
        title: "How Innovation Works: And Why It Flourishes in Freed...",
        numberSold: "10 sold",
        percentage: "29%",
        growth: "increase",
    },{
        id: 2,
        image: pn2,
        title: "The picture of Dorian Gray",
        numberSold: "6 sold",
        percentage: "29%",
        growth: "increase",
    },
    {
        id: 3,
        image: pn3,
        title: "Company of One by Paul Jarvis",
        numberSold: "6 sold",
        percentage: "29%",
        growth: "decrease",
    },
    {
        id: 4,
        image: pn4,
        title: "Your soul is a river",
        numberSold: "5 sold",
        percentage: "29%",
        growth: "decrease",
    },
    {
        id: 5,
        image: pn5,
        title: "Faith forward future",
        numberSold: "5 sold",
        percentage: "29%",
        growth: "increase",
    },
    {
        id: 6,
        image: pn6,
        title: "Beautiful Resistance",
        numberSold: "8 sold",
        percentage: "29%",
        growth: "increase",
    },
    {
        id: 7,
        image: pn7,
        title: "The picture of Dorian Gray",
        numberSold: "12 sold",
        percentage: "29%",
        growth: "increase",
    },
    {
        id: 8,
        image: pn8,
        title: "Happy",
        numberSold: "10 sold",
        percentage: "19%",
        growth: "decrease",
    },
    {
        id: 9,
        image: pn9,
        title: "Rivera",
        numberSold: "13 sold",
        percentage: "49%",
        growth: "increase",
    },
    {
        id: 10,
        image: pn10,
        title: "Joyful feet",
        numberSold: "15 sold",
        percentage: "24%",
        growth: "increase",
    },
    {
        id: 11,
        image: pn11,
        title: "Beautiful Garmentation",
        numberSold: "6 sold",
        percentage: "6%",
        growth: "decrease",
    },
    {
        id: 12,
        image: pn12,
        title: "Stern",
        numberSold: "6 sold",
        percentage: "20%",
        growth: "increase",
    },
    
    
]

const transactionsNail = [
    {
        id: 1,
        image: pn1,
        user: "Courtney Henrey",
        amount: "$1,000",
        status: "Successful",
        timing: "Apr 04, 2022",
    },
    {
        id: 2,
        image: pn2,
        user: "Ike Uche",
        amount: "$1,000",
        status: "Pending",
        timing: "Apr 04, 2022",
    },
    {
        id: 3,
        image: pn3,
        user: "Josiah Smith",
        amount: "$1,000",
        status: "Pending",
        timing: "Apr 04, 2022",
    },
    {
        id: 4,
        image: pn4,
        user: "Blessing Agbamoro",
        amount: "$1,000",
        status: "Successful",
        timing: "Apr 04, 2022",
    },
    {
        id: 5,
        image: pn5,
        user: "Doyin Precious",
        amount: "$1,000",
        status: "Pending",
        timing: "Apr 04, 2022",
    },
    {
        id: 6,
        image: pn6,
        user: "Alisson Zoe",
        amount: "$1,000",
        status: "Successful",
        timing: "Apr 04, 2022",
    },
    {
        id: 7,
        image: pn7,
        user: "John Ogunyinka",
        amount: "$1,000",
        status: "Successful",
        timing: "Apr 04, 2022",
    },
    {
        id: 8,
        image: pn8,
        user: "Arinze John",
        amount: "$1,000",
        status: "Pending",
        timing: "Apr 04, 2022",
    },
    {
        id: 9,
        image: pn9,
        user: "Courtney Henrey",
        amount: "$1,000",
        status: "Pending",
        timing: "Apr 04, 2022",
    },
    {
        id: 10,
        image: pn10,
        user: "Courtney Henrey",
        amount: "$1,000",
        status: "Successful",
        timing: "Apr 04, 2022",
    },
    {
        id: 11,
        image: pn11,
        user: "Courtney Henrey",
        amount: "$1,000",
        status: "Successful",
        timing: "Apr 04, 2022",
    },
    {
        id: 12,
        image: pn12,
        user: "Courtney Henrey",
        amount: "$1,000",
        status: "Pending",
        timing: "Apr 04, 2022",
    },
    
]


const customersNail = [
    {
        id: 1,
        initials: "CH",
        user: "Courtney Henrey",
        email: "courtneyhenrey@gmail.com"
    },
    {
        id: 2,
        initials: "IU",
        user: "Ike Uche",
        email: "ikeuche@gmail.com"
    },
    {
        id: 3,
        initials: "JS",
        user: "Josiah Smith",
        email: "josaihsmith@gmail.com"
    },
    {
        id: 4,
        initials: "BA",
        user: "Blessing Agbamoro",
        email: "blessingagbamoro@gmail.com"
    },
    {
        id: 5,
        initials: "DP",
        user: "Doyin Precious",
        email: "doyinprecious@gmail.com"
    },
    {
        id: 6,
        initials: "AZ",
        user: "Alisson Zoe",
        email: "alissonzoe@gmail.com"
    },
    {
        id: 7,
        initials: "JO",
        user: "John Ogunyinka",
        email: "jokey@gmail.com"
    },
    {
        id: 8,
        initials: "AJ",
        user: "Arinze John",
        email: "arinzejohn@gmail.com"
    },
    {
        id: 9,
        initials: "CH",
        user: "Courtney Henrey",
        email: "courtneyhenrey@gmail.com"
    },
    {
        id: 10,
        initials: "CH",
        user: "Courtney Henrey",
        email: "courtneyhenrey@gmail.com"
    },
    {
        id: 11,
        initials: "CH",
        user: "Courtney Henrey",
        email: "courtneyhenrey@gmail.com"
    },
    {
        id: 12,
        initials: "CH",
        user: "Courtney Henrey",
        email: "courtneyhenrey@gmail.com"
    },
]

const shareTribeNail = [
    {
        id: 1,
        image: yt1,
        title: "Marketing",
        members: "36",
    },
    {
        id: 2,
        image: yt2,
        title: "Droppers",
        members: "93",
    },
    {
        id: 3,
        image: yt3,
        title: "Designers Corner",
        members: "65",
    },
    {
        id: 4,
        image: yt4,
        title: "Developers",
        members: "44",
    },
    {
        id: 5,
        image: yt5,
        title: "Lead",
        members: "21",
    },
    {
        id: 6,
        image: yt6,
        title: "Top Guys in Tech",
        members: "33",
    },
    {
        id: 7,
        image: yt7,
        title: "Hit List",
        members: "47",
    },
    {
        id: 8,
        image: yt8,
        title: "Favourite Guess",
        members: "12",
    },
]

export {productsNail, topProductNail, analyticsNail, transactionsNail, customersNail, shareTribeNail}
