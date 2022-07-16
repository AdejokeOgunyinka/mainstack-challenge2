export interface UserI {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  country: string;
  dob: Date;
  categories: any[];
  access_level: number;
  is_active: boolean;
  is_verified: boolean;
  is_email_verified: boolean;
  is_deleted: boolean;
  plan: 'free';
  start_date: null | Date;
  end_date: null | Date;
  stripe_billing_id: string;
  verification_token: string;
  payout: {
    currency: 'NGN';
  };
  is2FAEnable: boolean;
  createdAt: '2022-06-21T14:47:16.666Z';
  updatedAt: '2022-06-21T14:47:16.666Z';
  id: string;
}

interface BlockI {
  type: 'link' | 'text' | 'image';
  position: number;
  is_hidden: boolean;
}

export interface BlockLinkType extends BlockI {
  links: Array<{
    link: string;
    title: string;
    order: number;
  }>;
}

export interface BlockTextType extends BlockI {
  header: string;
  text: string;
}

export interface BlockImageType extends BlockI {
  layout: 'grid' | 'list';
  header: string;
  images: Array<{
    filename: string;
    path: string;
    contentType: string;
    position: number;
    caption: string;
  }>;
}

export interface PageI {
  user_ref: string;
  header: {
    user_ref: string;
    email: string;
    bio: string;
    services: any[];
    name: string;
    social_links: any[];
    createdAt: Date;
    updatedAt: Date;
  };
  blocks: Array<BlockLinkType | BlockTextType | BlockImageType>;
  style: {
    button_style: {
      bg_color: 'theme-1';
      border_radius: string;
    };
    theme: 'light';
    bg: 'theme-1';
  };
  show_watermark: boolean;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

export interface LoginUserI {
  request: {
    email: string;
    password: string;
  };
  response: {
    access_token: string;
    user: UserI;
    page: PageI & {
      user: Pick<
        UserI,
        | 'username'
        | 'firstname'
        | 'lastname'
        | 'country'
        | 'payout'
        | 'is2FAEnable'
      >;
    };
  };
}

export interface SignUpUserI {
  request: {
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    dob: string; // yyyy-mm-dd
    country: string;
    password: string;
    device: {
      ip: string;
    };
  };
  response: {
    access_token: string;
    user: UserI;
    page: PageI;
  };
}
