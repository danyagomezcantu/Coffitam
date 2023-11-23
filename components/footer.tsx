import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.iconosInternalFrame}>
        <img className={styles.persona1Icon} alt="" src="/persona-1@2x.png" />
        <img
          className={styles.roomService1Icon}
          alt=""
          src="/roomservice-1@2x.png"
        />
        <img
          className={styles.mugHotAlt1Icon}
          alt=""
          src="/mughotalt-1@2x.png"
        />
        <img className={styles.sandwich1Icon} alt="" src="/sandwich-1@2x.png" />
      </div>
    </div>
  );
};

export default Footer;
