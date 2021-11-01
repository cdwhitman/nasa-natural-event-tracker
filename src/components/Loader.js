import loading from './loading.gif';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={loading} alt='Loading' />
      <h1>Fetching Data...</h1>
    </div>
  );
};

export default Loader;
