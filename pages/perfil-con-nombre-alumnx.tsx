import type { NextPage } from "next";
import styles from "./perfil-con-nombre-alumnx.module.css";

const PerfilConNombreAlumnx: NextPage = () => {
  return (
    <div className={styles.perfilConNombreAlumnx}>
      <img
        className={styles.perfilConNombreAlumnxChild}
        alt=""
        src="/ellipse-1@2x.png"
      />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
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
      <img className={styles.sandwich1Icon} alt="" src="/sandwich-11@2x.png" />
      <img
        className={styles.perfilConNombreAlumnxItem}
        alt=""
        src="/frame-61.svg"
      />
      <img
        className={styles.perfilConNombreAlumnxInner}
        alt=""
        src="/line-1.svg"
      />
      <div className={styles.lineDiv} />
      <div className={styles.phoneNumber}>
        <div className={styles.phoneNumberChild} />
        <div className={styles.phoneNumber1}>Phone number:</div>
        <div className={styles.div}>+38 (063) 602 1997</div>
        <img className={styles.phoneIcon} alt="" src="/phone-icon.svg" />
      </div>
      <b className={styles.nombreDeUsuario}>Daniel de la Cruz</b>
      <div className={styles.cardsOnFile}>
        <div className={styles.phoneNumberChild} />
        <div className={styles.cardsOnFile1}>Cards on file</div>
        <div className={styles.modifyOrView}>
          Modify or view my cards on file
        </div>
        <img className={styles.cardsOnFileItem} alt="" src="/frame-60.svg" />
      </div>
      <div className={styles.email}>
        <div className={styles.phoneNumberChild} />
        <div className={styles.cardsOnFile1}>Email:</div>
        <div className={styles.modifyOrView}>daniel748474@gmail.com</div>
        <img className={styles.emailIcon} alt="" src="/email-icon.svg" />
      </div>
    </div>
  );
};

export default PerfilConNombreAlumnx;
