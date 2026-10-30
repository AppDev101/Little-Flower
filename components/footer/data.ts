export type FooterData = {
  name: string;
  links: FooterLinks[];
};

type FooterLinks = { name: string; value: string };

export const footerData: FooterData[] = [
  {
    name: "PRIVACY",
    links: [
      {
        name: "Terms of use",
        value: "/#",
      },
      {
        name: "Privacy policy",
        value: "/#",
      },
      {
        name: "Cookie policy",
        value: "/#",
      },
    ],
  },
  {
    name: "SERVICES",
    links: [
      {
        name: "Shop",
        value: "/#",
      },
      {
        name: "Order ahead",
        value: "/#",
      },
      {
        name: "Menu",
        value: "/#",
      },
    ],
  },
  {
    name: "ABOUT US",
    links: [
      {
        name: "Find a location",
        value: "/#",
      },
      {
        name: "About us",
        value: "/#",
      },
      {
        name: "Our story",
        value: "/#",
      },
    ],
  },
  {
    name: "INFORMATION",
    links: [
      {
        name: "Plans & pricing",
        value: "/#",
      },
      {
        name: "Sell your products",
        value: "/#",
      },
      {
        name: "Jobs",
        value: "/#",
      },
    ],
  },
];
