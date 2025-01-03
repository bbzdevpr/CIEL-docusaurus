import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cybersécurité',
    Svg: require('@site/static/img/cybersecurite.svg').default,
    description: (
      <>
        Apprendre à protéger ses données.
      </>
    ),
  },
  {
    title: 'Informatique et réseau',
    Svg: require('@site/static/img/informatique et reseau.svg').default,
    description: (
      <>
        L'informatique et le réseau, voyons les bases
      </>
    ),
  },
  {
    title: 'Electronique',
    Svg: require('@site/static/img/electronique.svg').default,
    description: (
      <>
        Electronique, reprenons le controle
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
