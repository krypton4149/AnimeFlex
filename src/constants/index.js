import {
  BiCreditCard,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoMastercard,
  BiLogoPaypal,
  BiLogoTwitter,
  BiLogoVisa,
  BiLogoYoutube,
  BiPlay,
} from "react-icons/bi";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/animes", label: "Animes" },
  { href: "/", label: "Blog" },
  { href: "/", label: "Connect Us" },
];

export const hero = {
  subTitle: "AnimeFlex",
  buttonLabel: "Browse Animes",
  buttonLink: "/animes",
  mainTitle: "Unlimited Anime Movies, Shows & More.",
  btnICON: BiPlay,
};

export const newsletter = {
  titletop: "TRIAL START FIRST 30 DAYS.",
  titlebottom: "Enter your email to create or restart your membership.",
};

export const socialMedia = [
  { iconURL: BiLogoFacebook, href: "/", key: "facebook" },
  { iconURL: BiLogoTwitter, href: "/", key: "twitter" },
  { iconURL: BiLogoInstagram, href: "/", key: "instagram" },
  { iconURL: BiLogoYoutube, href: "/", key: "youtube" },
];

export const footerLinks = [
  { href: "/", label: "FAQs" },
  { href: "/", label: "Returns & Refunds" },
  { href: "/", label: "Payments" },
  { href: "/", label: "Contact Us" },
];

// export const payments = [
//   { iconURL: BiLogoMastercard, href: "/", key: "Mastercard" },
//   { iconURL: BiLogoVisa, href: "/", key: "visa" },
//   { iconURL: BiLogoPaypal, href: "/", key: "paypal" },
//   { iconURL: BiCreditCard, href: "/", key: "credit card" },
// ];
