import { useEffect } from 'react';
import { PAGE_META } from '../../data/pageMeta';
import { SITE_URL } from '../../data/site';
import { buildSchemaGraph } from '../../utils/schema';

const upsertMeta = (attribute, key, content) => {
    if (!content) return;

    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
    if (!href) return;

    let element = document.head.querySelector(`link[rel="${rel}"]`);

    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }

    element.setAttribute('href', href);
};

const SEO = ({ pageKey }) => {
    useEffect(() => {
        const meta = PAGE_META[pageKey];
        const canonical = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;
        const schema = buildSchemaGraph(pageKey);
        const schemaId = 'site-schema-jsonld';

        document.title = meta.title;

        upsertMeta('name', 'title', meta.title);
        upsertMeta('name', 'description', meta.description);
        upsertMeta('property', 'og:type', 'website');
        upsertMeta('property', 'og:url', canonical);
        upsertMeta('property', 'og:title', meta.title);
        upsertMeta('property', 'og:description', meta.description);
        upsertMeta('property', 'og:image', meta.image);
        upsertMeta('name', 'twitter:card', 'summary_large_image');
        upsertMeta('name', 'twitter:url', canonical);
        upsertMeta('name', 'twitter:title', meta.title);
        upsertMeta('name', 'twitter:description', meta.description);
        upsertMeta('name', 'twitter:image', meta.image);
        upsertLink('canonical', canonical);

        let schemaScript = document.getElementById(schemaId);

        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = schemaId;
            schemaScript.type = 'application/ld+json';
            document.head.appendChild(schemaScript);
        }

        schemaScript.textContent = JSON.stringify(schema);
    }, [pageKey]);

    return null;
};

export default SEO;
