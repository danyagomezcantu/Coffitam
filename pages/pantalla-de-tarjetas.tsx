import type { NextPage } from "next";
import styles from "./pantalla-de-tarjetas.module.css";

const PantallaDeTarjetas: NextPage = () => {
  return (
    <div className={styles.pantallaDeTarjetas}>
      <img
        className={styles.pantallaDeTarjetasChild}
        alt=""
        src="/ellipse-11@2x.png"
      />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img className={styles.mugHotAlt1Icon} alt="" src="/mughotalt-1@2x.png" />
      <img
        className={styles.roomService1Icon}
        alt=""
        src="/roomservice-11@2x.png"
      />
      <img className={styles.sandwich1Icon} alt="" src="/sandwich-12@2x.png" />
      <img className={styles.pantallaDeTarjetasItem} alt="" src="/line-1.svg" />
      <div className={styles.pantallaDeTarjetasInner} />
    </div>
  );
};

export default PantallaDeTarjetas;
