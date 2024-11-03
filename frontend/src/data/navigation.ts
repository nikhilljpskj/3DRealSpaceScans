import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Company",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i.Company,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "App Name",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i.AppName,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "City",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i.City,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Contruction",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i.Contruction,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Country",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/unique_id_",
      name: i.Country,
    })),
  },
];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/3d-virtual-tours",
    name: "3D Virtual Tours for Real Estate",
  },
  {
    id: ncNanoId(),
    href: "/digital-twin",
    name: "Digital Twins for Construction & Architecture",
    isNew: false,
  },
  {
    id: ncNanoId(),
    href: "/virtual-staging",
    name: "Virtual Staging",
    isNew: false,
  },
];

const companyChildElements: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Testimonials",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Terms and Conditions",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Case studies",
  },

];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "none",
    children: demoChildMenus,
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Our services",
    type: "dropdown",
    children: demoChildMenus,
    isNew: true,
  },

  {
    id: ncNanoId(),
    href: "/about",
    name: "Company",
    type: "dropdown",
    children: companyChildElements,
  },
];
