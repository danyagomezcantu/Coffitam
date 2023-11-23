import type { NextPage } from "next";
import styles from "./men-comida-alumnx.module.css";

const MenComidaAlumnx: NextPage = () => {
  return (
    <div className={styles.menComidaAlumnx}>
      <img
        className={styles.menComidaAlumnxChild}
        alt=""
        src="/ellipse-1@2x.png"
      />
      <img className={styles.image1Icon} alt="" src="/persona-1@2x.png" />
      <img
        className={styles.mugHotAlt1Icon}
        alt=""
        src="/mughotalt-11@2x.png"
      />
      <img
        className={styles.roomService1Icon}
        alt=""
        src="/roomservice-1@2x.png"
      />
      <img className={styles.sandwich1Icon} alt="" src="/sandwich-12@2x.png" />
      <img className={styles.menComidaAlumnxItem} alt="" src="/line-11.svg" />
      <img className={styles.menComidaAlumnxInner} alt="" src="/line-2.svg" />
    </div>
  );
};

export default MenComidaAlumnx;
