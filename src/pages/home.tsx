import React from 'react'
import { SEO, protocolStructuredData, organizationStructuredData } from '@/components/seo'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { WhyMXP } from '@/components/sections/why-mxp'

export function HomePage() {
  return (
    <>
      <SEO 
        structuredData={[protocolStructuredData, organizationStructuredData]}
      />
      <Hero />
      <Features />
      <div id="why">
        <WhyMXP />
      </div>
    </>
  )
}

