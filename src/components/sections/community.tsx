import { Container } from '@/components/ui/container'
import {
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  CodeBracketIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const resources = [
  {
    title: 'Documentation',
    icon: BookOpenIcon,
    gradient: 'from-indigo-500 to-purple-500',
    description: 'Complete guides, API references, and tutorials',
    links: [
      { label: 'Protocol Specification', url: 'https://github.com/yafatek/mxp-protocol/blob/main/SPEC.md' },
      { label: 'Getting Started Guide', url: 'https://github.com/yafatek/mxp-protocol#usage' },
      { label: 'API Documentation', url: 'https://docs.rs/mxp' },
      { label: 'Architecture Deep Dive', url: '#architecture' }
    ]
  },
  {
    title: 'Code Examples',
    icon: CodeBracketIcon,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Working examples and reference implementations',
    links: [
      { label: 'Ping Pong Example', url: 'https://github.com/yafatek/mxp-protocol/blob/main/examples/ping_pong.rs' },
      { label: 'Agent Mesh Demo', url: 'https://github.com/yafatek/relay/tree/main/agents-mesh' },
      { label: 'All Examples', url: 'https://github.com/yafatek/mxp-protocol/tree/main/examples' },
      { label: 'Benchmarks', url: 'https://github.com/yafatek/mxp-protocol/tree/main/benches' }
    ]
  },
  {
    title: 'Community',
    icon: UserGroupIcon,
    gradient: 'from-cyan-500 to-teal-500',
    description: 'Connect with other developers and contributors',
    links: [
      { label: 'GitHub Discussions', url: 'https://github.com/yafatek/mxp-protocol/discussions' },
      { label: 'Discord Server', url: 'https://discord.gg/mxp-protocol' },
      { label: 'Twitter/X', url: 'https://twitter.com/mxp_protocol' },
      { label: 'Reddit Community', url: 'https://reddit.com/r/mxp' }
    ]
  },
  {
    title: 'Contributing',
    icon: HeartIcon,
    gradient: 'from-teal-500 to-emerald-500',
    description: 'Help build the future of agent communication',
    links: [
      { label: 'Contributing Guide', url: 'https://github.com/yafatek/mxp-protocol/blob/main/CONTRIBUTING.md' },
      { label: 'Code of Conduct', url: 'https://github.com/yafatek/mxp-protocol/blob/main/CODE_OF_CONDUCT.md' },
      { label: 'Open Issues', url: 'https://github.com/yafatek/mxp-protocol/issues' },
      { label: 'RFC Process', url: 'https://github.com/yafatek/relay/blob/main/docs/roadmap.md' }
    ]
  }
]

const stats = [
  { label: 'GitHub Stars', value: '1.2K+', icon: '⭐' },
  { label: 'Contributors', value: '25+', icon: '👥' },
  { label: 'Production Users', value: '10+', icon: '🚀' },
  { label: 'Weekly Downloads', value: '5K+', icon: '📦' }
]

const communityChannels = [
  {
    name: '#general',
    description: 'General discussion about MXP and Relay',
    members: '500+'
  },
  {
    name: '#protocol',
    description: 'MXP spec discussions and proposals',
    members: '150+'
  },
  {
    name: '#relay',
    description: 'Relay implementation and runtime',
    members: '200+'
  },
  {
    name: '#showcase',
    description: 'Share your projects built with MXP',
    members: '100+'
  },
  {
    name: '#help',
    description: 'Get support from the community',
    members: '300+'
  },
  {
    name: '#contributors',
    description: 'Development and contribution coordination',
    members: '50+'
  }
]

const upcomingEvents = [
  {
    title: 'MXP Community Call',
    date: 'Every 2nd Tuesday',
    time: '10:00 AM PST',
    description: 'Monthly community sync, roadmap updates, and Q&A'
  },
  {
    title: 'Office Hours',
    date: 'Every Friday',
    time: '2:00 PM PST',
    description: 'Drop-in sessions with core maintainers'
  },
  {
    title: 'Contributor Workshop',
    date: 'First Saturday of Month',
    time: '9:00 AM PST',
    description: 'Hands-on sessions for new contributors'
  }
]

export function Community() {
  return (
    <section id="community" className="relative py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 mb-6">
              <UserGroupIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide">COMMUNITY</span>
            </div>
            
            <h2 className="mb-6">
              <span className="text-gradient">
                Join the
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                MXP Community
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Connect with developers, share knowledge, and help shape the future of agent communication protocols.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass rounded-2xl p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover-lift text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div 
                  key={index}
                  className="glass rounded-2xl p-8 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover-lift"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${resource.gradient}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {resource.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {resource.description}
                  </p>
                  
                  <div className="space-y-2">
                    {resource.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : undefined}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors group"
                      >
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                          {link.label}
                        </span>
                        <svg className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Discord Channels */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-3xl p-8 md:p-10 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-3 mb-8">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Discord Channels
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {communityChannels.map((channel, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {channel.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {channel.members}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {channel.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="https://discord.gg/mxp-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold transition-all duration-300 hover-lift"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  Join Discord Server
                </a>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Upcoming Events
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover-lift"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <RocketLaunchIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {event.title}
                    </h4>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span>🕐</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="glass rounded-3xl p-8 md:p-12 border-2 border-emerald-200 dark:border-emerald-800 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                Get the latest updates on MXP protocol development, new features, and community events.
              </p>
              
              <form className="max-w-md mx-auto flex gap-3">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold transition-all duration-300 hover-lift"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

