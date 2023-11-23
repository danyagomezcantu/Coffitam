import type { NextPage } from "next";
import styles from "./pantalla-de-pago.module.css";

const PantallaDePago: NextPage = () => {
  return (
    <div className={styles.pantallaDePago}>
      <img
        className={styles.pantallaDePagoChild}
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
      <img className={styles.pantallaDePagoItem} alt="" src="/line-11.svg" />
      <img className={styles.pantallaDePagoInner} alt="" src="/line-11.svg" />
      <img className={styles.lineIcon} alt="" src="/line-2.svg" />
      <img className={styles.pantallaDePagoChild1} alt="" src="/line-2.svg" />
    </div>
  );
};

export default PantallaDePago;
