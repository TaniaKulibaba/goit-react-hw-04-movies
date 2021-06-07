import ReactLoader from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <ReactLoader type="Hearts" color="blue" />
    </div>
  );
};

export default Loader;