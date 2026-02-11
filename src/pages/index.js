import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <span className={styles.heroBadge}>⚡ Trusted by 500+ Web3 Projects</span>
        <Heading as="h1" className="hero__title">
          Enterprise <span className={styles.gradientText}>Web3 Infrastructure</span> Built for Scale
        </Heading>
        <p className="hero__subtitle">
          From wallet integration to multi-chain scaling, we provide the complete infrastructure stack to power your decentralized applications.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Explore Services
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            View Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ── Inline SVG Icon Components ── */
/* Primary elements use fill="currentColor" (blue in light, white in dark)
   Detail elements use style={{ fill: 'var(--tile-detail)' }} (white in light, blue in dark)
   Both swap on hover */

function WalletsIcon() {
  const d = { fill: 'var(--tile-detail)' };
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(90, 40)">
        <circle cx="50" cy="30" r="25" fill="currentColor" />
        <path d="M10,95 C10,65 30,50 50,50 C70,50 90,65 90,95 L90,100 L10,100 Z" fill="currentColor" />
        <rect x="30" y="110" width="40" height="30" rx="5" fill="currentColor" />
        <circle cx="38" cy="125" r="6" style={d} />
        <rect x="50" y="120" width="15" height="10" rx="2" style={d} />
        <line x1="5" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="80" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="50" r="6" fill="currentColor" />
        <circle cx="100" cy="50" r="6" fill="currentColor" />
      </g>
      <text x="140" y="240" textAnchor="middle" fontFamily="'Space Grotesk', Inter, Arial, sans-serif" fontSize="28" fontWeight="700" fill="currentColor">Wallets</text>
    </svg>
  );
}

function ApiIcon() {
  const d = { fill: 'var(--tile-detail)' };
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(70, 35)">
        <rect x="25" y="20" width="90" height="120" rx="10" fill="currentColor" />
        <rect x="40" y="40" width="60" height="8" rx="2" style={{ ...d, opacity: 0.8 }} />
        <rect x="40" y="58" width="45" height="8" rx="2" style={{ ...d, opacity: 0.6 }} />
        <rect x="40" y="76" width="55" height="8" rx="2" style={{ ...d, opacity: 0.6 }} />
        <circle cx="50" cy="115" r="6" style={d} />
        <circle cx="70" cy="115" r="6" style={{ ...d, opacity: 0.5 }} />
        <circle cx="90" cy="115" r="6" style={{ ...d, opacity: 0.3 }} />
        <circle cx="10" cy="60" r="10" fill="currentColor" />
        <line x1="20" y1="60" x2="25" y2="60" stroke="currentColor" strokeWidth="4" />
        <circle cx="130" cy="60" r="10" fill="currentColor" />
        <line x1="115" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="4" />
        <circle cx="70" cy="155" r="10" fill="currentColor" />
        <line x1="70" y1="140" x2="70" y2="145" stroke="currentColor" strokeWidth="4" />
      </g>
      <text x="140" y="240" textAnchor="middle" fontFamily="'Space Grotesk', Inter, Arial, sans-serif" fontSize="28" fontWeight="700" fill="currentColor">API</text>
    </svg>
  );
}

function TransactionsIcon() {
  const d = { fill: 'var(--tile-detail)' };
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(65, 30)">
        <rect x="20" y="10" width="110" height="140" rx="8" fill="currentColor" />
        <text x="40" y="55" fontFamily="monospace" fontSize="28" fontWeight="700" style={d}>{'{'}</text>
        <text x="108" y="55" fontFamily="monospace" fontSize="28" fontWeight="700" style={d}>{'}'}</text>
        <rect x="50" y="65" width="50" height="6" rx="2" style={{ ...d, opacity: 0.7 }} />
        <rect x="55" y="80" width="40" height="6" rx="2" style={{ ...d, opacity: 0.5 }} />
        <rect x="55" y="95" width="45" height="6" rx="2" style={{ ...d, opacity: 0.5 }} />
        <rect x="50" y="110" width="50" height="6" rx="2" style={{ ...d, opacity: 0.7 }} />
        <circle cx="75" cy="135" r="12" style={d} />
        <polygon points="72,130 72,140 80,135" fill="currentColor" />
      </g>
      <text x="140" y="240" textAnchor="middle" fontFamily="'Space Grotesk', Inter, Arial, sans-serif" fontSize="28" fontWeight="700" fill="currentColor">Transactions</text>
    </svg>
  );
}

function SecurityIcon() {
  const d = { fill: 'var(--tile-detail)' };
  const ds = { stroke: 'var(--tile-detail)' };
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(75, 30)">
        <path d="M65,10 L120,30 L120,80 C120,120 90,145 65,155 C40,145 10,120 10,80 L10,30 Z" fill="currentColor" />
        <rect x="40" y="70" width="50" height="40" rx="6" style={d} />
        <path d="M50,70 L50,55 C50,42 58,35 65,35 C72,35 80,42 80,55 L80,70" style={ds} strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="65" cy="85" r="6" fill="currentColor" />
        <rect x="62" y="88" width="6" height="12" rx="2" fill="currentColor" />
      </g>
      <text x="140" y="240" textAnchor="middle" fontFamily="'Space Grotesk', Inter, Arial, sans-serif" fontSize="28" fontWeight="700" fill="currentColor">Security</text>
    </svg>
  );
}

function ScalingIcon() {
  const d = { fill: 'var(--tile-detail)' };
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(55, 30)">
        <circle cx="85" cy="75" r="25" fill="currentColor" />
        <circle cx="85" cy="75" r="12" style={d} />
        <circle cx="30" cy="40" r="18" fill="currentColor" />
        <circle cx="140" cy="40" r="18" fill="currentColor" />
        <circle cx="30" cy="110" r="18" fill="currentColor" />
        <circle cx="140" cy="110" r="18" fill="currentColor" />
        <circle cx="85" cy="145" r="18" fill="currentColor" />
        <circle cx="30" cy="40" r="8" style={d} />
        <circle cx="140" cy="40" r="8" style={d} />
        <circle cx="30" cy="110" r="8" style={d} />
        <circle cx="140" cy="110" r="8" style={d} />
        <circle cx="85" cy="145" r="8" style={d} />
        <line x1="45" y1="50" x2="65" y2="65" stroke="currentColor" strokeWidth="4" />
        <line x1="125" y1="50" x2="105" y2="65" stroke="currentColor" strokeWidth="4" />
        <line x1="45" y1="100" x2="65" y2="85" stroke="currentColor" strokeWidth="4" />
        <line x1="125" y1="100" x2="105" y2="85" stroke="currentColor" strokeWidth="4" />
        <line x1="85" y1="100" x2="85" y2="127" stroke="currentColor" strokeWidth="4" />
      </g>
      <text x="140" y="240" textAnchor="middle" fontFamily="'Space Grotesk', Inter, Arial, sans-serif" fontSize="28" fontWeight="700" fill="currentColor">Scaling</text>
    </svg>
  );
}

function ExperimentationIcon() {
  const d = { fill: 'var(--tile-detail)' };
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(60, 25)">
        <path d="M60,15 L60,60 L25,140 C20,152 27,165 42,165 L118,165 C133,165 140,152 135,140 L100,60 L100,15 Z" fill="currentColor" />
        <rect x="55" y="8" width="50" height="15" rx="4" fill="currentColor" />
        <rect x="35" y="85" width="40" height="65" rx="4" style={{ ...d, opacity: 0.2 }} />
        <text x="55" y="125" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" style={d}>A</text>
        <rect x="85" y="85" width="40" height="65" rx="4" style={{ ...d, opacity: 0.35 }} />
        <text x="105" y="125" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" style={d}>B</text>
        <line x1="80" y1="85" x2="80" y2="150" style={{ stroke: 'var(--tile-detail)', opacity: 0.5 }} strokeWidth="2" />
        <circle cx="50" cy="145" r="5" style={{ ...d, opacity: 0.4 }} />
        <circle cx="110" cy="140" r="4" style={{ ...d, opacity: 0.4 }} />
      </g>
      <text x="140" y="240" textAnchor="middle" fontFamily="'Space Grotesk', Inter, Arial, sans-serif" fontSize="28" fontWeight="700" fill="currentColor">Experimentation</text>
    </svg>
  );
}

/* ── Tile Data ── */
const ServiceTiles = [
  {
    title: 'Wallets',
    secondaryHeader: 'Wallets & Auth',
    icon: WalletsIcon,
    themeClass: 'tile-ux',
    description: 'Enterprise-grade wallet solutions and authentication systems for seamless user onboarding.',
    features: ['Wallets', 'Auth'],
  },
  {
    title: 'API',
    secondaryHeader: 'RPC & Indexing',
    icon: ApiIcon,
    themeClass: 'tile-api',
    description: 'Lightning-fast RPC endpoints and comprehensive indexing with global distribution.',
    features: ['RPC', 'Indexing'],
  },
  {
    title: 'Transactions',
    secondaryHeader: 'Contracts & Payments',
    icon: TransactionsIcon,
    themeClass: 'tile-execution',
    description: 'Deploy and interact with smart contracts. Integrated payment rails for reliable execution.',
    features: ['Contracts', 'Payments'],
  },
  {
    title: 'Security',
    secondaryHeader: 'Monitoring & Compliance',
    icon: SecurityIcon,
    themeClass: 'tile-security',
    description: 'Enterprise-grade security monitoring and regulatory compliance built-in.',
    features: ['Monitoring', 'Compliance'],
  },
  {
    title: 'Scaling',
    secondaryHeader: 'Multi-chain & L2',
    icon: ScalingIcon,
    themeClass: 'tile-scaling',
    description: 'Scale across multiple chains and L2 networks with unified APIs.',
    features: ['Multi-chain', 'L2'],
  },
  {
    title: 'Experimentation',
    secondaryHeader: 'Sandbox & A/B Testing',
    icon: ExperimentationIcon,
    themeClass: 'tile-experimentation',
    description: 'Test new features in isolated environments with instant rollback capabilities.',
    features: ['Sandbox', 'A/B Testing'],
  },
];

function ServiceTile({ title, secondaryHeader, icon: Icon, themeClass, description, features }) {
  return (
    <div className={clsx(styles.serviceTile, themeClass)}>
      <div className={styles.tileImageWrapper}>
        <Icon />
      </div>
      <div className={styles.tileContent}>
        <div className={styles.tileSecondaryHeader}>{secondaryHeader}</div>
        <p className={styles.tileDescription}>{description}</p>
        <div className={styles.tileFeatures}>
          {features.map((feature, idx) => (
            <span key={idx} className={styles.featureTag}>{feature}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesFlow() {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>The Complete Web3 Stack</h2>
          <p>A seamless flow from user experience to global scale</p>
        </div>

        {/* Landscape Grid Layout */}
        <div className={styles.tilesGrid}>
          {ServiceTiles.map((tile, idx) => (
            <div key={idx} className={styles.tileWrapper}>
              <ServiceTile {...tile} />
            </div>
          ))}
        </div>

        {/* Flow direction indicator */}
        <div className={styles.flowDirection}>
          <span className={styles.flowLabel}>Wallets</span>
          <div className={styles.flowLine}></div>
          <span className={styles.flowLabel}>APIs</span>
          <div className={styles.flowLine}></div>
          <span className={styles.flowLabel}>Transactions</span>
          <div className={styles.flowLine}></div>
          <span className={styles.flowLabel}>Security</span>
          <div className={styles.flowLine}></div>
          <span className={styles.flowLabel}>Scaling</span>
          <div className={styles.flowLine}></div>
          <span className={styles.flowLabel}>Experiment</span>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '50B+', label: 'Requests Processed' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '25+', label: 'Chains Supported' },
    { value: '<50ms', label: 'Global Latency' },
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2 className="cta-title">Ready to Build?</h2>
        <p className="cta-description">
          Get started with our free tier and scale as you grow. No credit card required.
        </p>
        <Link className="button button--primary button--lg" to="/docs/intro">
          Start Building Free
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Enterprise Web3 Infrastructure"
      description="Docs Are Us - From wallet integration to multi-chain scaling, we provide the complete infrastructure stack to power your decentralized applications.">
      <HomepageHeader />
      <main>
        <ServicesFlow />
        <StatsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
