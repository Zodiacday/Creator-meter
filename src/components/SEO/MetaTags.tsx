import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  structuredData?: any;
}

export const MetaTags = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = '/logo.png',
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData
}: MetaTagsProps) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | CreatorMeter - Live World Statistics`;

    // Helper function to set or update meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Set or update link tag
    const setLinkTag = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        document.head.appendChild(tag);
      }
      
      tag.href = href;
    };

    // Basic meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Canonical URL
    const canonicalUrl = canonical || window.location.href.split('?')[0];
    setLinkTag('canonical', canonicalUrl);

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', `${window.location.origin}${ogImage}`, true);
    setMetaTag('og:site_name', 'CreatorMeter - Live World Statistics', true);

    // Twitter Card tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', `${window.location.origin}${ogImage}`);

    // Robots meta tag
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Viewport (should be in HTML but ensuring it's set)
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Structured data
    if (structuredData) {
      const scriptId = 'page-structured-data';
      let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
      
      if (scriptElement) {
        scriptElement.textContent = JSON.stringify(structuredData);
      } else {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        scriptElement.textContent = JSON.stringify(structuredData);
        document.head.appendChild(scriptElement);
      }
    }

    return () => {
      // Cleanup structured data on unmount
      if (structuredData) {
        const element = document.getElementById('page-structured-data');
        if (element) {
          element.remove();
        }
      }
    };
  }, [title, description, keywords, canonical, ogType, ogImage, twitterCard, noindex, structuredData]);

  return null;
};
