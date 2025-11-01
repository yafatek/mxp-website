import { useEffect, useState } from 'react'
import { SEO, createArticleStructuredData } from '@/components/seo'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ExternalLink, Calendar, Tag } from 'lucide-react'

interface ChangelogEntry {
  version: string
  date: string
  changes: {
    added?: string[]
    changed?: string[]
    fixed?: string[]
    performance?: string[]
    documentation?: string[]
  }
  link?: string
}

// Fallback changelog data (can be fetched from GitHub API or file)
const changelogData: ChangelogEntry[] = [
  {
    version: '0.1.0',
    date: '2025-11-01',
    link: 'https://github.com/yafatek/mxp-protocol/releases/tag/v0.1.0',
    changes: {
      added: [
        'Initial release of MXP Protocol',
        'Complete wire format specification (32-byte header, cache-aligned)',
        '11 message types (Register, Discover, Heartbeat, Call, Response, Event, Stream operations, Ack, Error)',
        'Zero-copy message encoding/decoding with XXHash3 checksums',
        'QUIC transport layer using Quinn',
        'Built-in distributed tracing (trace IDs in every message)',
        'Comprehensive test suite (14 passing tests)',
        'Performance benchmarks',
        'Example: ping-pong message exchange',
        'Full documentation and SPEC.md',
        'GitHub Actions CI/CD (tests, clippy, formatting, security audit)',
        'Automatic crates.io publishing on tag',
      ],
      performance: [
        'Message encode/decode: < 100μs (average ~14μs)',
        'Sub-millisecond latency target',
        '100K+ messages/sec throughput capacity',
      ],
      documentation: [
        'Complete README with protocol overview',
        'SPEC.md with detailed wire format',
        'API documentation with examples',
        'Contributing guidelines',
        'Code of Conduct',
      ],
    },
  },
]

export function ChangelogPage() {
  const [changelog, setChangelog] = useState<ChangelogEntry[]>(changelogData)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Optionally fetch from GitHub API
    const fetchChangelog = async () => {
      try {
        setLoading(true)
        // GitHub API endpoint for releases
        const response = await fetch('https://api.github.com/repos/yafatek/mxp-protocol/releases')
        if (response.ok) {
          const releases = await response.json()
          // Transform GitHub releases to our format
          const transformed = releases.map((release: any) => ({
            version: release.tag_name.replace('v', ''),
            date: release.published_at.split('T')[0],
            link: release.html_url,
            changes: parseReleaseNotes(release.body),
          }))
          if (transformed.length > 0) {
            setChangelog(transformed)
          }
        }
      } catch (error) {
        console.error('Failed to fetch changelog from GitHub:', error)
        // Fall back to static data
      } finally {
        setLoading(false)
      }
    }

    fetchChangelog()
  }, [])

  const parseReleaseNotes = (body: string): ChangelogEntry['changes'] => {
    const changes: ChangelogEntry['changes'] = {}
    const lines = body.split('\n')
    let currentSection: keyof ChangelogEntry['changes'] | null = null

    for (const line of lines) {
      const lowerLine = line.toLowerCase()
      if (lowerLine.includes('### added') || lowerLine.includes('## added')) {
        currentSection = 'added'
        changes.added = []
      } else if (lowerLine.includes('### changed') || lowerLine.includes('## changed')) {
        currentSection = 'changed'
        changes.changed = []
      } else if (lowerLine.includes('### fixed') || lowerLine.includes('## fixed')) {
        currentSection = 'fixed'
        changes.fixed = []
      } else if (lowerLine.includes('### performance') || lowerLine.includes('## performance')) {
        currentSection = 'performance'
        changes.performance = []
      } else if (lowerLine.includes('### doc') || lowerLine.includes('## doc')) {
        currentSection = 'documentation'
        changes.documentation = []
      } else if (line.trim().startsWith('-') && currentSection) {
        const item = line.trim().substring(1).trim()
        if (item) {
          if (!changes[currentSection]) {
            changes[currentSection] = []
          }
          changes[currentSection]!.push(item)
        }
      }
    }

    return changes
  }

  const structuredData = createArticleStructuredData(
    'MXP Protocol Changelog',
    'All notable changes to MXP Protocol documented here. Track releases, new features, and improvements.',
    '2025-11-01'
  )

  return (
    <>
      <SEO
        title="Changelog"
        description="All notable changes to MXP Protocol. Track releases, new features, performance improvements, and bug fixes."
        keywords={[
          'MXP changelog',
          'MXP releases',
          'protocol updates',
          'version history',
          'release notes'
        ]}
        canonical="https://getmxp.xyz/changelog"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Container className="py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Changelog</h1>
              <p className="text-muted-foreground text-lg">
                All notable changes to MXP Protocol are documented here.
              </p>
            </div>

            {loading && (
              <div className="text-center py-12 text-muted-foreground">Loading changelog...</div>
            )}

            <div className="space-y-8">
              {changelog.map((entry, index) => (
                <Card key={entry.version} className="relative">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                          <Tag className="h-5 w-5 text-primary" />
                          Version {entry.version}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(entry.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </CardDescription>
                      </div>
                      {entry.link && (
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Release
                        </a>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {entry.changes.added && entry.changes.added.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-400">
                            Added
                          </h3>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            {entry.changes.added.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.changes.changed && entry.changes.changed.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-yellow-600 dark:text-yellow-400">
                            Changed
                          </h3>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            {entry.changes.changed.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.changes.fixed && entry.changes.fixed.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                            Fixed
                          </h3>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            {entry.changes.fixed.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.changes.performance && entry.changes.performance.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">
                            Performance
                          </h3>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            {entry.changes.performance.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.changes.documentation && entry.changes.documentation.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-gray-600 dark:text-gray-400">
                            Documentation
                          </h3>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            {entry.changes.documentation.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  {index < changelog.length - 1 && <Separator className="my-4" />}
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                View all releases on{' '}
                <a
                  href="https://github.com/yafatek/mxp-protocol/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

