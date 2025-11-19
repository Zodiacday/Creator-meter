import { useEffect } from 'react';

interface DatasetSchema {
  name: string;
  description: string;
  url: string;
  keywords?: string[];
  creator?: {
    "@type": string;
    name: string;
    url: string;
  };
  temporalCoverage?: string;
  spatialCoverage?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaMarkupProps {
  type: 'Dataset' | 'FAQPage' | 'BreadcrumbList' | 'Organization' | 'WebPage' | 'WebSite';
  data: DatasetSchema | FAQItem[] | BreadcrumbItem[] | any;
}

export const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  useEffect(() => {
    let schema: any = {
      "@context": "https://schema.org"
    };

    switch (type) {
      case 'Dataset':
        schema = {
          ...schema,
          "@type": "Dataset",
          name: (data as DatasetSchema).name,
          description: (data as DatasetSchema).description,
          url: (data as DatasetSchema).url,
          keywords: (data as DatasetSchema).keywords,
          creator: (data as DatasetSchema).creator || {
            "@type": "Organization",
            name: "CreatorMeter",
            url: window.location.origin
          },
          temporalCoverage: (data as DatasetSchema).temporalCoverage,
          spatialCoverage: (data as DatasetSchema).spatialCoverage,
          license: "https://creativecommons.org/licenses/by/4.0/",
          isAccessibleForFree: true
        };
        break;

      case 'FAQPage':
        schema = {
          ...schema,
          "@type": "FAQPage",
          mainEntity: (data as FAQItem[]).map(item => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        };
        break;

      case 'BreadcrumbList':
        schema = {
          ...schema,
          "@type": "BreadcrumbList",
          itemListElement: (data as BreadcrumbItem[]).map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };
        break;

      case 'Organization':
        schema = {
          ...schema,
          "@type": "Organization",
          name: "CreatorMeter",
          url: window.location.origin,
          logo: `${window.location.origin}/logo.svg`,
          description: "Live world statistics and real-time counters for population, GDP, CO2 emissions, energy, and global data. Accurate, verified data from UN, World Bank, and official sources.",
          sameAs: [
            // Add social media profiles when available
          ]
        };
        break;

      case 'WebPage':
        schema = {
          ...schema,
          "@type": "WebPage",
          ...data
        };
        break;

      case 'WebSite':
        schema = {
          ...schema,
          "@type": "WebSite",
          ...data
        };
        break;
    }

    const scriptId = `schema-${type}`;
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (scriptElement) {
      scriptElement.textContent = JSON.stringify(schema);
    } else {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      scriptElement.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptElement);
    }

    return () => {
      const element = document.getElementById(scriptId);
      if (element) {
        element.remove();
      }
    };
  }, [type, data]);

  return null;
};
