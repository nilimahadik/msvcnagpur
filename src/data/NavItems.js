const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
      // {
      //   id: 1,
      //   name: "Home One",
      //   href: "/",
      // },
      // {
      //   id: 2,
      //   name: "Home Two",
      //   href: "/home2",
      // },
      // {
      //   id: 3,
      //   name: "Home Three",
      //   href: "/home3",
      // },
      // {
      //   id: 4,
      //   name: "Header Styles",
      //   href: "/",
      //   subItems: [
      //     {
      //       id: 1,
      //       name: "Header One",
      //       href: "",
      //     },
      //     { id: 2, name: "Header Two", href: "" },
      //     { id: 3, name: "Header Three", href: "" },
      //   ],
      // },
    ],
  },
  {
    id: 2,
    name: "Veternary Doctor's Section",
    href: "",
    subNavItems: [
      { id: 1, name: "Doctor login", href: "/about" },
      { id: 2, name: "Provisional Registration", href: "/volunteers" },
      { id: 3, name: "New Registration", href: "/gallery" },
      { id: 4, name: "Renewal Registration", href: "/become-volunteer" },
    ],
  },
  {
    id: 3,
    name: "Important Links",
    href: "/causes",
    subNavItems: [
      { id: 1, name: "Government Of India", href: "/causes" },
      { id: 2, name: "Government of Maharashtra", href: "/causes-details" },
      { id: 3, name: "Veterinary Council of India", href: "/causes-details" },
      { id: 4, name: "Maharashtra State Animal Husbandry Department", href: "/causes-details" },
      { id: 5, name: "Maharashtra Animal & Fishery Sciences University", href: "/causes-details" },

    ],
  },
  {
    id: 4,
    name: "Events",
    href: "/events",
    subNavItems: [
      { id: 1, name: "Events", href: "/events" },
      { id: 2, name: "Event Details", href: "/event-details" },
    ],
  },
  {
    id: 5,
    name: "News",
    href: "/news",
    subNavItems: [
      { id: 1, name: "News", href: "/news" },
      { id: 2, name: "News Details", href: "/news-details" },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

export default navItems;

export const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-dribbble", link: "" },
  { icon: "fa-instagram", link: "" },
];
