import { AllImages } from ".";

export const footerWeb = {
  columns: [
    {
      title: "Company",
      type: "company",
      texts: [
        { link: "/", label: "Home" },
        { link: "/home/how-we-do-it", label: "How we do it" },
        { link: "/aboutus", label: "About us" },
        { link: "https://blog.cavepot.com/", label: "Blog" },
        { link: "https://www.cavepotlab.com/", label: "Our Lab" },
        { link: "https://cavepot.com/contact", label: "Contact us" },
      ],
    },
    {
      title: "Locate Us",
      type: "locate",
      texts: [
        { label: "Pablo de Maria 1122, Montevideo, Uruguay" },
        { link: "mailto:info@cavepot.com", label: "info@cavepot.com" },
      ],
    },
  ],
  imgs: {
    img1: AllImages.LogoCPBlanco,
  },
  redes: {
    links: [
      {
        link: "https://www.instagram.com/cavepotuy/",
        label: "Instagram",
      },
      {
        link: "https://www.facebook.com/Cavepot",
        label: "Facebook",
      },
      {
        link: "https://twitter.com/Cavepot",
        label: "Twitter",
      },
      {
        link: "https://www.linkedin.com/company/cavepot",
        label: "Linkedin",
      },
      {
        link: "https://github.com/cavepotcode/",
        label: "Github",
      },
    ],
  },
};
