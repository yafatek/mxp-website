import { SEO } from '@/components/seo'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Book, Code, FileText, Play, ExternalLink, Github } from 'lucide-react'

const docSections = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'Learn the basics of MXP Protocol and how to get started with your first agent.',
    links: [
      { label: 'Overview', href: 'https://github.com/yafatek/mxp-protocol#overview' },
      { label: 'Installation', href: 'https://github.com/yafatek/mxp-protocol#installation' },
      { label: 'Quick Start', href: 'https://github.com/yafatek/mxp-protocol#usage' },
    ],
  },
  {
    icon: FileText,
    title: 'Protocol Specification',
    description: 'Complete wire format specification and message types.',
    links: [
      { label: 'SPEC.md', href: 'https://github.com/yafatek/mxp-protocol/blob/main/SPEC.md' },
      { label: 'Message Types', href: 'https://github.com/yafatek/mxp-protocol#message-types' },
      { label: 'Wire Format', href: 'https://github.com/yafatek/mxp-protocol#wire-format' },
    ],
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete Rust API documentation and examples.',
    links: [
      { label: 'docs.rs', href: 'https://docs.rs/mxp', external: true },
      { label: 'Examples', href: 'https://github.com/yafatek/mxp-protocol/tree/main/examples' },
      { label: 'Usage Guide', href: 'https://github.com/yafatek/mxp-protocol#usage' },
    ],
  },
  {
    icon: Play,
    title: 'Examples',
    description: 'Working code examples and tutorials.',
    links: [
      { label: 'Ping Pong', href: 'https://github.com/yafatek/mxp-protocol/blob/main/examples/ping_pong.rs' },
      { label: 'All Examples', href: 'https://github.com/yafatek/mxp-protocol/tree/main/examples' },
    ],
  },
]

const quickLinks = [
  {
    title: 'GitHub Repository',
    description: 'View source code, contribute, and report issues',
    href: 'https://github.com/yafatek/mxp-protocol',
    icon: Github,
  },
  {
    title: 'Rust Crate',
    description: 'Install from crates.io',
    href: 'https://crates.io/crates/mxp',
    icon: ExternalLink,
  },
  {
    title: 'Protocol Specification',
    description: 'Complete technical specification',
    href: 'https://github.com/yafatek/mxp-protocol/blob/main/SPEC.md',
    icon: FileText,
  },
]

export function DocsPage() {
  return (
    <>
      <SEO 
        title="Documentation"
        description="Complete guide to using MXP Protocol for agent-to-agent communication. API reference, examples, and protocol specification."
        keywords={[
          'MXP documentation',
          'MXP API',
          'protocol specification',
          'agent communication guide',
          'QUIC protocol tutorial',
          'binary protocol docs',
          'Rust protocol API'
        ]}
        canonical="https://getmxp.xyz/docs"
      />
      <div className="min-h-screen bg-background">
        <Container className="py-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Documentation</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Complete guide to using MXP Protocol for agent-to-agent communication.
                Everything you need to build high-performance distributed agent systems.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              {quickLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Card key={link.title} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{link.title}</CardTitle>
                      </div>
                      <CardDescription>{link.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild className="w-full">
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          View {link.title.includes('GitHub') ? 'Repository' : link.title.includes('Crate') ? 'Crate' : 'Specification'}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Documentation Sections</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {docSections.map((section) => {
                  const Icon = section.icon
                  return (
                    <Card key={section.title}>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{section.title}</CardTitle>
                        </div>
                        <CardDescription>{section.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {section.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 rounded-md border hover:bg-muted transition-colors group"
                            >
                              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                {link.label}
                              </span>
                              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Check out these resources:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" asChild>
                    <a href="https://github.com/yafatek/mxp-protocol/issues" target="_blank" rel="noopener noreferrer">
                      Report Issue
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/yafatek/mxp-protocol/discussions" target="_blank" rel="noopener noreferrer">
                      Ask Questions
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/yafatek/mxp-protocol/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                      Contribute
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </div>
    </>
  )
}

