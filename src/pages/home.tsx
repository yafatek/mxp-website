import { SEO, protocolStructuredData, organizationStructuredData } from '@/components/seo'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { WhyMXP } from '@/components/sections/why-mxp'
import { Architecture } from '@/components/sections/architecture'
import { ProtocolDeepDive } from '@/components/sections/protocol-deep-dive'
import { UseCases } from '@/components/sections/use-cases'
import { PlatformOverview } from '@/components/sections/platform-overview'
import { VisionRoadmap } from '@/components/sections/vision-roadmap'
import { SDKShowcase } from '@/components/sections/sdk-showcase'
import { AdoptionPlaybook } from '@/components/sections/adoption-playbook'
import { Pricing } from '@/components/sections/pricing'
import { Community } from '@/components/sections/community'

export function HomePage() {
  return (
    <>
      <SEO 
        structuredData={[protocolStructuredData, organizationStructuredData]}
      />
      <Hero />
      <Features />
      <WhyMXP />
      <Architecture />
      <ProtocolDeepDive />
      <UseCases />
      <PlatformOverview />
      <SDKShowcase />
      <VisionRoadmap />
      <AdoptionPlaybook />
      <Pricing />
      <Community />
    </>
  )
}

