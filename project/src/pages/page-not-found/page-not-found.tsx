import Header from '../../components/header/header';
import styles from './page-not-found.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = (): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <section className={styles.wrapper}>
      <img src="img/image-404.jpg" alt="error_404" />
      <Link to="/">
        <span className={styles.text}>
          Go to home page
        </span>
      </Link>
    </section>
  </div>
);

export default PageNotFound;
