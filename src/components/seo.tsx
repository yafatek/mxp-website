import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  twitterCard?: 'summary' | 'summary_large_image'
  noindex?: boolean
  structuredData?: Record<string, any>
}

const defaultSEO = {
  title: 'MXP Protocol - Enterprise-Grade Agent Communication Protocol',
  description: 'MXP delivers sub-millisecond latency with zero-copy architecture. Built on QUIC for the future of distributed AI agent systems. 100x faster than HTTP.',
  keywords: [
    'MXP Protocol',
    'agent communication',
    'QUIC protocol',
    'distributed systems',
    'AI agents',
    'microservices',
    'zero-copy',
    'sub-millisecond latency',
    'binary protocol',
    'observability',
    'agent mesh',
    'real-time communication',
    'enterprise protocol',
    'Rust protocol',
    'agent-to-agent',
    'message protocol',
    'streaming protocol',
    'high performance'
  ],
  ogImage: 'https://getmxp.xyz/og-image.png',
  canonical: 'https://getmxp.xyz',
  twitterHandle: '@yafatek'
}

export function SEO({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  canonical,
  ogImage = defaultSEO.ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData
}: SEOProps) {
  const fullTitle = title 
    ? `${title} | MXP Protocol` 
    : defaultSEO.title
  
  const canonicalUrl = canonical || defaultSEO.canonical

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="MXP Protocol" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content={defaultSEO.twitterHandle} />
      <meta property="twitter:site" content={defaultSEO.twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Yafa Cloud Services LLC" />
      <meta name="publisher" content="Yafa Cloud Services LLC" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

// Default structured data for the protocol
export const protocolStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MXP Protocol",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Linux, macOS, Windows",
  "description": "Enterprise-grade binary protocol for agent-to-agent communication. Built on QUIC with sub-millisecond latency and zero-copy architecture.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "Yafa Cloud Services LLC",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "1"
  },
  "softwareVersion": "0.1.0",
  "programmingLanguage": "Rust",
  "codeRepository": "https://github.com/yafatek/mxp-protocol",
  "license": "https://github.com/yafatek/mxp-protocol/blob/main/LICENSE-MIT",
  "downloadUrl": "https://crates.io/crates/mxp",
  "screenshot": "https://getmxp.xyz/og-image.png",
  "featureList": [
    "Sub-millisecond latency",
    "Zero-copy architecture",
    "Built-in observability",
    "Native streaming support",
    "QUIC transport",
    "TLS 1.3 encryption",
    "Agent discovery",
    "Distributed tracing"
  ],
  "keywords": "agent communication, QUIC protocol, distributed systems, AI agents, microservices, binary protocol, real-time communication"
}

// Organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Yafa Cloud Services LLC",
  "url": "https://getmxp.xyz",
  "logo": "https://getmxp.xyz/logo.png",
  "description": "Building the future of agent-to-agent communication with MXP Protocol",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Technical Support",
    "email": "protocol@getmxp.xyz"
  },
  "sameAs": [
    "https://github.com/yafatek",
    "https://github.com/yafatek/mxp-protocol"
  ]
}

// Article structured data for blog posts/changelog
export const createArticleStructuredData = (
  title: string,
  description: string,
  publishDate: string,
  modifiedDate?: string
) => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Organization",
    "name": "Yafa Cloud Services LLC"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Yafa Cloud Services LLC",
    "logo": {
      "@type": "ImageObject",
      "url": "https://getmxp.xyz/logo.png"
    }
  },
  "datePublished": publishDate,
  "dateModified": modifiedDate || publishDate,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://getmxp.xyz"
  }
})

