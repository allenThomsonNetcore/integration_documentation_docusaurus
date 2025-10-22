import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type SDKItem = {
  title: string;
  icon: string;
  description: string;
  link: string;
};

const SDKList: SDKItem[] = [
  {
    title: 'Android',
    icon: '🤖',
    description: 'Integrate Netcore SDK into your Android applications with native support.',
    link: '/docs/Android/base-sdk-integration',
  },
  {
    title: 'iOS',
    icon: '🍎',
    description: 'Add Netcore SDK to your iOS apps with Swift and Objective-C support.',
    link: '/docs/intro',
  },
  {
    title: 'Flutter',
    icon: '🎯',
    description: 'Cross-platform integration for Flutter applications on Android and iOS.',
    link: '/docs/intro',
  },
  {
    title: 'React Native',
    icon: '⚛️',
    description: 'Build mobile apps with React Native and Netcore SDK integration.',
    link: '/docs/intro',
  },
  {
    title: 'Web',
    icon: '🌐',
    description: 'Integrate Netcore SDK into your web applications with JavaScript.',
    link: '/docs/intro',
  },
];

function SDKCard({title, icon, description, link}: SDKItem) {
  return (
    <div className={clsx('col col--4', styles.sdkCard)}>
      <Link to={link} className={styles.sdkCardLink}>
        <div className={styles.sdkCardContent}>
          <div className={styles.sdkIcon}>{icon}</div>
          <Heading as="h3" className={styles.sdkTitle}>{title}</Heading>
          <p className={styles.sdkDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Choose Your Platform</Heading>
          <p>Select your platform to get started with Netcore SDK integration</p>
        </div>
        <div className="row">
          {SDKList.map((props, idx) => (
            <SDKCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
