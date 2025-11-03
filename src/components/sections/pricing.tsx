import { Container } from '@/components/ui/container'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Open Source',
    price: 'Free',
    description: 'Protocol, SDKs, and reference implementations',
    features: [
      'MXP protocol specification',
      'Rust & JavaScript SDKs',
      'Reference agent implementations',
      'Community support',
      'MIT/Apache-2.0 licensed',
      'Full source code access',
      'Public roadmap',
    ],
    cta: 'Get Started',
    popular: false,
    highlight: 'Always Free',
  },
  {
    name: 'Relay Cloud',
    price: '$499',
    period: '/month',
    description: 'Fully managed control plane and relay nodes',
    features: [
      'Up to 10M messages/month',
      'Managed control plane',
      'Multi-region routing',
      'Auto-scaling',
      '99.9% SLA',
      'DDoS mitigation',
      'Latency dashboards',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
    highlight: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale deployments with custom requirements',
    features: [
      'Unlimited messages',
      'Policy engine & RBAC',
      'SSO/SAML integration',
      'Compliance packs (SOC2, ISO 27001)',
      'Air-gapped deployment',
      'Audit trails & long-term support',
      '99.99% SLA',
      '24/7 dedicated support',
      'Custom integrations',
      'Architecture reviews',
    ],
    cta: 'Contact Sales',
    popular: false,
    highlight: 'White Glove Service',
  },
]

const addOns = [
  {
    name: 'Dedicated Regions',
    price: '$999/month',
    description: 'Private relay nodes in your preferred regions'
  },
  {
    name: 'Private Network Peering',
    price: '$499/month',
    description: 'Direct VPC peering for lowest latency'
  },
  {
    name: 'Compliance Bundle',
    price: '$1,999/month',
    description: 'SOC2, ISO 27001, HIPAA compliance certifications'
  },
  {
    name: 'Professional Services',
    price: 'Custom',
    description: 'Integration sprints, migration playbooks, architecture reviews'
  },
]

export function Pricing() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? 'border-2 border-primary relative' : ''}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    {plan.highlight}
                  </span>
                </div>
              )}
              {!plan.popular && plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium">
                    {plan.highlight}
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Add-Ons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Premium Add-Ons</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addon) => (
              <Card key={addon.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary mt-2">
                    {addon.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>Why Relay Cloud?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🚀 Faster Time to Market</h4>
                <p className="text-sm text-muted-foreground">
                  Skip infrastructure setup. Deploy production agent meshes in minutes, not months.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💰 Lower Total Cost</h4>
                <p className="text-sm text-muted-foreground">
                  100x better performance means 100x less infrastructure. Anchor pricing to delivered latency improvements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔒 Enterprise Trust</h4>
                <p className="text-sm text-muted-foreground">
                  Built-in security, compliance, and governance. No bolt-on solutions required.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  )
}

