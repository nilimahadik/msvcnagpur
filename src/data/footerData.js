import bg from "@/images/backgrounds/footer-bg.jpg";
import footerImage from "@/images/resources/footer-logo.jpg";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "Halpes",
  copyrightYear: new Date().getFullYear(),
  about:
  "Content Required here",
  bottomLogo: footerImage.src,
  footerBg: bg.src,
  social: [
    {
      id: 1,
      href: "#",
      icon: "fa-twitter"
    },
    {
      id: 2,
      href: "#",
      icon: "fa-facebook-square"
    },
    {
      id: 3,
      href: "#",
      icon: "fa-dribbble"
    },
    {
      id: 4,
      href: "#",
      icon: "fa-instagram"
    }
  ],
  exploreList: [
    {
      id: 1,
      href: "#",
      title: "Register"
    },
    {
      id: 2,
      href: "#",
      title: "Important links"
    },
    {
      id: 3,
      href: "#",
      title: "docors section"
    },
    
   
    
    {
      id: 7,
      href: "#",
      title: "Contact"
    },
    {
      id: 8,
      href: "#",
      title: "Help"
    },
    {
      id: 9,
      href: "#",
      title: "Faqs"
    }
  ]
};

export default footerData;
