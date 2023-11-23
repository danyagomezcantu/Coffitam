import type { NextPage } from "next";
import styles from "./perfil-con-nombre-admin.module.css";

const PerfilConNombreAdmin: NextPage = () => {
  return (
    <div className={styles.perfilConNombreAdmin}>
      <img
        className={styles.perfilConNombreAdminChild}
        alt=""
        src="/ellipse-1@2x.png"
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
        className={styles.perfilConNombreAdminItem}
        alt=""
        src="/frame-62.svg"
      />
      <div className={styles.perfilConNombreAdminInner} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-3@2x.png" />
      <img className={styles.lineIcon} alt="" src="/line-1.svg" />
      <div className={styles.lineDiv} />
    </div>
  );
};

export default PerfilConNombreAdmin;
