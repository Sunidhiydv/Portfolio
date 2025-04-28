import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  // {
  //   label: 'Articles',
  //   pathname: '/articles',
  // },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'X',
    url: `https://x.com/sunidhiydv`,
    icon: 'x',
  },
  {
    label: 'linkedin',
    url: `https://www.linkedin.com/in/sunidhi-yadav-05b5b9268/`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
