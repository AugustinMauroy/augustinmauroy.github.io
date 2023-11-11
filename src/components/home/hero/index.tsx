import LocalizedMessage from '@/components/i18n/localizedMessage';
import { getAge, isBirthday } from '@/utils/getAge';
import Pictures from './pictures';
import styles from './index.module.css';
import type { FC } from 'react';

const Hero: FC = () => (
  <section className={styles.hero}>
    <Pictures />
    <div className={styles.content}>
      <h1>
        <LocalizedMessage id="components.home.title" />
      </h1>
      <p>
        <LocalizedMessage
          id="components.home.description"
          values={{
            age: getAge(new Date(2006, 5, 18)),
          }}
        />
      </p>
      <p>
        {isBirthday(new Date(2006, 5, 18)) ? (
          <LocalizedMessage id="components.home.birthday" />
        ) : null}
      </p>
    </div>
  </section>
);

export default Hero;
