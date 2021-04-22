import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
          <div className={clsx('col col--6')}>
            <div className="text--right">
              <img src="img/shake.gif" />
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div className="text--center">
              <h3>Shakespeare Ipsum</h3>
              <p>
                to be, or not to be, thats the question Will plead like angels, trumpet-tongued, against The little Love-god lying once asleep So the life that died with shame Hath had no power yet upon thy beauty To fright the souls of fearful adversaries,

                To think it was so? o, give me thy hand, Whether 'tis nobler in the mind to suffer The fair ophelia! nymph, in thy orisons Of being taken by the insolent foe

                Singe my white head! and thou, all-shaking thunder, With worms that are thy chamber-maids; o, here Did not attend him as we rode? I think

                Whilst many nymphs that vow'd chaste life to keep To the lascivious pleasing of a lute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
