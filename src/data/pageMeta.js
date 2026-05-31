import { SITE, SITE_URL } from './site';

export const PAGE_META = {
    home: {
        path: '/',
        title: SITE.title,
        description: SITE.description,
        image: `${SITE_URL}/hero-image.png`,
        pageType: 'WebPage',
    },
    service: {
        path: '/service',
        title: 'Services | Ketu. Webflow Developer',
        description:
            'Webflow development, full-stack applications, UI/UX design, performance optimization, and deployment services built to convert and scale your brand.',
        image: `${SITE_URL}/services-image.png`,
        pageType: 'WebPage',
    },
    work: {
        path: '/work',
        title: 'Work & Projects | Ketu. Webflow Developer',
        description:
            'Explore Webflow projects and custom web solutions built with clean structure, smooth UI, and performance-first development.',
        image: `${SITE_URL}/work-image.png`,
        pageType: 'CollectionPage',
    },
    about: {
        path: '/about',
        title: 'About | Ketu. Webflow Developer',
        description:
            'Learn about Ketu Patel - a Webflow-focused developer passionate about building clean, scalable, and high-performing digital experiences.',
        image: `${SITE_URL}/about-image.png`,
        pageType: 'AboutPage',
    },
    contact: {
        path: '/contact',
        title: 'Contact | Ketu. Webflow Developer',
        description:
            'Get in touch to start your Webflow website project. Available via WhatsApp, email, and LinkedIn.',
        image: `${SITE_URL}/contact-image.png`,
        pageType: 'ContactPage',
    },
    'privacy-policy': {
        path: '/privacy-policy',
        title: 'Privacy Policy | Ketu.',
        description: 'Privacy Policy for Ketu Patel portfolio website and freelance Webflow development services.',
        image: SITE.defaultImage,
        pageType: 'WebPage',
    },
    'terms-of-service': {
        path: '/terms-of-service',
        title: 'Terms of Service | Ketu.',
        description: 'Terms of Service for Ketu Patel freelance Webflow development and digital consulting services.',
        image: SITE.defaultImage,
        pageType: 'WebPage',
    },
};

export const getPageMetaByPath = (pathname) => {
    const normalized = pathname.endsWith('/') && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;

    const entry = Object.values(PAGE_META).find((page) => page.path === normalized);
    return entry || PAGE_META.home;
};
