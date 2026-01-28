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

const ServiceTiles = [
  {
    title: 'UX',
    secondaryHeader: 'Wallets & Auth',
    image: '/img/tile-ux.svg',
    themeClass: 'tile-ux',
    description: 'Enterprise-grade wallet solutions and authentication systems for seamless user onboarding.',
    features: ['Wallets', 'Auth'],
  },
  {
    title: 'API',
    secondaryHeader: 'RPC & Indexing',
    image: '/img/tile-api.svg',
    themeClass: 'tile-api',
    description: 'Lightning-fast RPC endpoints and comprehensive indexing with global distribution.',
    features: ['RPC', 'Indexing'],
  },
  {
    title: 'Execution',
    secondaryHeader: 'Contracts & Payments',
    image: '/img/tile-execution.svg',
    themeClass: 'tile-execution',
    description: 'Deploy and interact with smart contracts. Integrated payment rails for reliable execution.',
    features: ['Contracts', 'Payments'],
  },
  {
    title: 'Security',
    secondaryHeader: 'Monitoring & Compliance',
    image: '/img/tile-security.svg',
    themeClass: 'tile-security',
    description: 'Enterprise-grade security monitoring and regulatory compliance built-in.',
    features: ['Monitoring', 'Compliance'],
  },
  {
    title: 'Scaling',
    secondaryHeader: 'Multi-chain & L2',
    image: '/img/tile-scaling.svg',
    themeClass: 'tile-scaling',
    description: 'Scale across multiple chains and L2 networks with unified APIs.',
    features: ['Multi-chain', 'L2'],
  },
  {
    title: 'Experimentation',
    secondaryHeader: 'Sandbox & A/B Testing',
    image: '/img/tile-experimentation.svg',
    themeClass: 'tile-experimentation',
    description: 'Test new features in isolated environments with instant rollback capabilities.',
    features: ['Sandbox', 'A/B Testing'],
  },
];

function ServiceTile({ title, secondaryHeader, image, themeClass, description, features }) {
  return (
    <div className={clsx(styles.serviceTile, themeClass)}>
      <div className={styles.tileImageWrapper}>
        <img src={image} alt={title} className={styles.tileImage} />
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

function FlowIndicator() {
  return (
    <div className={styles.flowIndicator}>
      <span>→</span>
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
          <span className={styles.flowLabel}>UX</span>
          <div className={styles.flowLine}></div>
          <span className={styles.flowLabel}>APIs</span>
          <div className={styles.flowLine}></div>
          <span className={styles.flowLabel}>Execution</span>
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
