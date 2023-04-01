import { getPermalink   } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'ERPProduct',
      links: [
        {
          image:'/assets/images/erp-marketplace-icon.svg',
          text: 'Marketplace',
          href: '#',
        },        
        {
          image:'/assets/images/erp-pos-icon.svg',
          text: 'GetPOS',
          href: '#',
        }  
      ],
    },
    {
      text: 'ERPNext for Industries',
      links: [
        {
          image:'/assets/images/erp-healthcare-icon.svg',
          text: 'ErpNext for Healthcare',
          href: '#',
        },    
        {
          image:'/assets/images/erp-manufacturing-icon.svg',
          text: 'ErpNext Manufacturing',
          href: '#',
        },
        {
          image:'/assets/images/erp-retail-icon.svg',
          text: 'ErpNext Retail',
          href: '#',
        } ,    
        {
          image:'/assets/images/erpnext-icon.svg',
          text: 'ErpNext Food',
          href: '/food-solutions',
        } 
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          image:'/assets/images/blogs-icon.svg',
          text: 'Blog',
          href: '#',
        },
        {
          image:'/assets/images/casestudy-icon.svg',
          text: 'Case study',
          href: '#',
        } 
      ],
    },
    {
      text: 'About Us',
      href: '#',
    },
    {
      text: 'Career',
      href: '#',
    },
    {
      text: 'Contact Us',
      href: '#',
    },
  ],
  actions: [
    { type: 'button', text: 'Get In Touch', href: '#' }
  ],
};
  
export const footerData = {
  links: [
    
    {
      title: 'Serivces',
      links: [
        { text: 'Frappe', href: '#' },
        { text: 'HubSpot', href: '#' },
        { text: 'DevOps', href: '#' },
      ],
    },
  ],
  links2: [
    {
      title: 'ERPNext For Industries',
      links: [ 
        {
          text: 'ErpNext for Healthcare',
          href: '#',
        },    
        {
          text: 'ErpNext Manufacturing',
          href: '#',
        },
        {
          text: 'ErpNext Retail',
          href: '#',
        } ,    
        {
          text: 'ErpNext Food',
          href: '/food-solutions',
        } 
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms & Conditions', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/NestorBird_Ltd' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCLnQR9YPVrWzv5xIfZSNprg' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/nestorbirdofficial/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/nestorbird' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/nestorbirdlimited' }, 
  ],
  footNote: ` 
    &copy; Copyright 2017 - 2023  <a href="https://nestorbird.com/"> Nestorbird </a> | All Rights Reserved
  `,
};
