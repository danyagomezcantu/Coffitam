import type { NextPage } from "next";
import styles from "./pantalla-de-bienvenida.module.css";

const PantallaDeBienvenida: NextPage = () => {
  return (
    <div className={styles.pantallaDeBienvenida}>
      <div className={styles.pantallaDeBienvenidaChild} />
      <div className={styles.pantallaDeBienvenidaItem} />
      <img
        className={styles.capturaDePantalla20231120}
        alt=""
        src="/captura-de-pantalla-20231120-a-las-100324-pm-1@2x.png"
      />
    </div>
  );
};

export default PantallaDeBienvenida;
