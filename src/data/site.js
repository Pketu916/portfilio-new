export const SITE_URL = 'https://ketuportfolio.vercel.app';

export const SITE = {
    name: 'Ketu.',
    legalName: 'Ketu Patel',
    title: 'Ketu. | Professional Web & Webflow Developer',
    description:
        'I help businesses scale with clean, user-friendly, high-performance Webflow websites and web applications designed to convert and impress.',
    email: 'pketu916@gmail.com',
    phone: '+919265650606',
    locale: 'en',
    defaultImage: `${SITE_URL}/hero-image.png`,
    sameAs: [
        'https://www.linkedin.com/in/ketu-patel-b9a104232/',
        'https://www.instagram.com/k2__patel_/',
    ],
};

export const toAbsoluteUrl = (path) => {
    if (!path) return undefined;
    if (typeof path === 'string' && path.startsWith('http')) return path;
    const normalized = typeof path === 'string' ? path : String(path);
    return `${SITE_URL}${normalized.startsWith('/') ? normalized : `/${normalized}`}`;
};
