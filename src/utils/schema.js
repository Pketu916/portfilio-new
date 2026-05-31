import { projects } from '../data/projects';
import { services } from '../data/services';
import { PAGE_META } from '../data/pageMeta';
import { SITE, SITE_URL, toAbsoluteUrl } from '../data/site';

const IDS = {
    person: `${SITE_URL}/#person`,
    website: `${SITE_URL}/#website`,
    business: `${SITE_URL}/#business`,
    organization: `${SITE_URL}/#organization`,
};

const TECH_STACK = [
    'Webflow',
    'React',
    'JavaScript',
    'Tailwind CSS',
    'HTML5',
    'Framer',
    'Figma',
    'GSAP',
    'Node.js',
    'MongoDB',
];

const breadcrumbLabels = {
    '/': 'Home',
    '/service': 'Services',
    '/work': 'Work',
    '/about': 'About',
    '/contact': 'Contact',
    '/privacy-policy': 'Privacy Policy',
    '/terms-of-service': 'Terms of Service',
};

const buildBreadcrumbList = (path) => {
    const segments = path === '/' ? [''] : ['', ...path.split('/').filter(Boolean)];
    const paths = segments.map((_, index) => {
        if (index === 0) return '/';
        return `/${segments.slice(1, index + 1).join('/')}`;
    });

    return {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}${path === '/' ? '' : path}#breadcrumb`,
        itemListElement: paths.map((itemPath, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: breadcrumbLabels[itemPath] || itemPath,
            item: `${SITE_URL}${itemPath === '/' ? '/' : itemPath}`,
        })),
    };
};

const buildPerson = () => ({
    '@type': 'Person',
    '@id': IDS.person,
    name: SITE.legalName,
    url: SITE_URL,
    image: SITE.defaultImage,
    jobTitle: 'Webflow Developer',
    email: `mailto:${SITE.email}`,
    telephone: SITE.phone,
    sameAs: SITE.sameAs,
    knowsAbout: TECH_STACK,
    worksFor: { '@id': IDS.organization },
});

const buildOrganization = () => ({
    '@type': 'Organization',
    '@id': IDS.organization,
    name: SITE.name,
    url: SITE_URL,
    logo: SITE.defaultImage,
    founder: { '@id': IDS.person },
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: SITE.email,
        telephone: SITE.phone,
        availableLanguage: ['English'],
    },
});

const buildWebSite = () => ({
    '@type': 'WebSite',
    '@id': IDS.website,
    url: SITE_URL,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': IDS.person },
    inLanguage: SITE.locale,
});

const buildProfessionalService = () => ({
    '@type': 'ProfessionalService',
    '@id': IDS.business,
    name: `${SITE.name} Webflow Development`,
    url: SITE_URL,
    image: SITE.defaultImage,
    description: SITE.description,
    provider: { '@id': IDS.person },
    areaServed: 'Worldwide',
    serviceType: services.map((service) => service.title),
});

const buildServiceItems = () =>
    services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
            '@type': 'Service',
            '@id': `${SITE_URL}/service#service-${service.id}`,
            name: service.title,
            description: service.subtitle,
            provider: { '@id': IDS.business },
            serviceType: service.title,
            areaServed: 'Worldwide',
            offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                url: `${SITE_URL}/contact`,
            },
        },
    }));

const buildProjectItems = (projectList) =>
    projectList.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
            '@type': 'CreativeWork',
            '@id': `${SITE_URL}/work#project-${project.id}`,
            name: project.title,
            description: project.description,
            url: project.link,
            image: toAbsoluteUrl(project.image),
            creator: { '@id': IDS.person },
            genre: project.category,
            keywords: project.features.join(', '),
        },
    }));

const buildWebPage = (pageKey) => {
    const meta = PAGE_META[pageKey];
    const canonical = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;

    const base = {
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': IDS.website },
        about: { '@id': IDS.person },
        inLanguage: SITE.locale,
        primaryImageOfPage: meta.image,
    };

    if (meta.pageType === 'AboutPage') {
        return { '@type': 'AboutPage', ...base, mainEntity: { '@id': IDS.person } };
    }

    if (meta.pageType === 'ContactPage') {
        return {
            '@type': 'ContactPage',
            ...base,
            mainEntity: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: SITE.email,
                telephone: SITE.phone,
                url: canonical,
            },
        };
    }

    if (meta.pageType === 'CollectionPage') {
        return { '@type': 'CollectionPage', ...base };
    }

    return { '@type': 'WebPage', ...base };
};

export const buildSchemaGraph = (pageKey) => {
    const meta = PAGE_META[pageKey];
    const path = meta.path;
    const graph = [
        buildPerson(),
        buildOrganization(),
        buildWebSite(),
        buildProfessionalService(),
        buildWebPage(pageKey),
        buildBreadcrumbList(path),
    ];

    if (pageKey === 'home' || pageKey === 'service') {
        graph.push({
            '@type': 'ItemList',
            '@id': `${SITE_URL}${path}#services`,
            name: 'Web Development Services',
            itemListElement: buildServiceItems(),
        });
    }

    if (pageKey === 'home') {
        const featuredProjects = projects.filter((project) => project.showInHome);
        graph.push({
            '@type': 'ItemList',
            '@id': `${SITE_URL}/#featured-projects`,
            name: 'Featured Webflow Projects',
            itemListElement: buildProjectItems(featuredProjects),
        });
    }

    if (pageKey === 'work') {
        graph.push({
            '@type': 'ItemList',
            '@id': `${SITE_URL}/work#projects`,
            name: 'Webflow Portfolio Projects',
            itemListElement: buildProjectItems(projects),
        });
    }

    if (pageKey === 'service') {
        graph.push({
            '@type': 'ItemList',
            '@id': `${SITE_URL}/service#technologies`,
            name: 'Technologies & Frameworks',
            itemListElement: TECH_STACK.map((tech, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'SoftwareApplication',
                    name: tech,
                    applicationCategory: 'DeveloperApplication',
                },
            })),
        });
    }

    return {
        '@context': 'https://schema.org',
        '@graph': graph,
    };
};
