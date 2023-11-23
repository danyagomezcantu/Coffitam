import type { NextPage } from "next";
import styles from "./personalizacin-alumnx.module.css";

const PersonalizacinAlumnx: NextPage = () => {
  return (
    <div className={styles.personalizacinAlumnx}>
      <img
        className={styles.personalizacinAlumnxChild}
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
      <img
        className={styles.personalizacinAlumnxItem}
        alt=""
        src="/line-11.svg"
      />
      <img
        className={styles.personalizacinAlumnxInner}
        alt=""
        src="/line-11.svg"
      />
      <img className={styles.lineIcon} alt="" src="/line-2.svg" />
      <img
        className={styles.personalizacinAlumnxChild1}
        alt=""
        src="/line-2.svg"
      />
    </div>
  );
};

export default PersonalizacinAlumnx;
