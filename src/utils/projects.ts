import {
  SPAImages,
  SRMImages,
  landingPageImages,
  onlineStoreImages,
} from './images';
import { ProjectTabPanel } from './types';

export const PROJECTS_TABS: string[] = [
  'CRM',
  'Landing Page',
  'Online Store',
  'SPA',
];

export const PROJECTS_TAB_PANELS: ProjectTabPanel[] = [
  {
    images: SRMImages,
    description:
      "The CRM system is an essential tool for the organization, as it helps to efficiently manage resources and logistics while maintaining a detailed record of individuals and their needs.It plays a vital role in fulfilling the organization's mission to provide assistance to those who require it, ultimately making a positive impact on the community it serves.",
    project: 'Comercial',
    techStack:
      'TypeScript, React.js, Redux, RTK Query, REST API,ReactHookForm, Nest.js, PostgreSQL',
  },
  {
    images: landingPageImages,
    description:
      'The website will help for the non-profit organization convey their mission, showcase the impact of its work, and provide multiple avenues for visitors to get involved and contribute towards the development of the charity fund.',
    link: '',
    project: 'Comercial',
    techStack: 'TypeScript, Next.js, i18n',
  },
  {
    images: onlineStoreImages,
    description:
      'This online store features an admin panel for product management, including CRUD operations, and a user-friendly frontend for customers. Users can browse products, add them to their shopping carts, and securely check out with various payment options. The site offers order tracking, user accounts, and email notifications. The platform is designed to provide a smooth and secure shopping experience while allowing administrators to efficiently manage product inventory and orders.',
    project: 'Comercial (in development)',
    techStack:
      'TypeScript, Next.js, Redux, RTK Query, REST API, ReactHookForm, Nest.js, MongoDB',
  },
  {
    images: SPAImages,
    description:
      'Simple application with Swagger backend API (under construction) and responsive layout. User can register, log in / log out, add, remove and edit contacts. A filter is also added for convenience.',
    link: 'https://dariahalai.github.io/phonebook/',
    project: 'Pet project',
    techStack: 'React.js, Redux, Redux Toolkit, REST API, Chakra UI',
  },
];
