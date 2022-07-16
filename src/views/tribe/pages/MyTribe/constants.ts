import COPY from 'assets/svgs/digital/icons/content_copy.svg'
import WHATSAPP from 'assets/svgs/digital/icons/Vector.svg'
import FACEBOOK from 'assets/svgs/digital/icons/Vector-1.svg'
import TELEGRAM from 'assets/svgs/digital/icons/logo.svg'
import EMAIL from 'assets/svgs/digital/icons/mail.svg'
import INSTAGRAM from 'assets/svgs/digital/icons/Vector-2.svg'
import TWITTER from 'assets/svgs/digital/icons/Vector-3.svg'
import MEMBERS from 'assets/svgs/digital/icons/group.svg'
import SHARE from 'assets/svgs/digital/icons/share.svg'
import EXIT from 'assets/svgs/digital/icons/login.svg'

export const socialLinks = [
    {
        id: 1,
        text: "Copy link",
        socialIcon: COPY,
        type: 'action'
    },
    {
        id: 2,
        text: "Share via Whatsapp",
        socialIcon: WHATSAPP,
        type: 'drawer'
    },
    {
        id: 3,
        text: "Share via Facebook",
        socialIcon: FACEBOOK,
        type: 'drawer'
    },
    {
        id: 4,
        text: "Share via Telegram",
        socialIcon: TELEGRAM,
        type: 'drawer'
    },
    {
        id: 5,
        text: "Share via Email",
        socialIcon: EMAIL,
        type: 'drawer'
    },
    {
        id: 6,
        text: "Share via Instagram",
        socialIcon: INSTAGRAM,
        type: 'drawer'
    },
    {
        id: 7,
        text: "Share via Twitter",
        socialIcon: TWITTER,
        type: 'drawer'
    },
]



export interface IPopOverLinks {
    id: number,
    text:string,
    popIcon: string,
    type?: 'drawer' | 'modal'
}

export const popOverLinks: IPopOverLinks[] = [
    {
        id: 11,
        text: "View members",
        popIcon: MEMBERS,
        type: 'drawer'
    },
    {
        id: 12,
        text: "Share tribe link",
        popIcon: SHARE,
        type: 'drawer'
    },
    {
        id: 13,
        text: "Leave tribe",
        popIcon: EXIT,
        type: 'modal'
    },
]

export const customersNail = [
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