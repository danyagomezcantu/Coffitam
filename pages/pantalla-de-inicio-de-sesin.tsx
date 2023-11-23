import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./pantalla-de-inicio-de-sesin.module.css";

const PantallaDeInicioDeSesin: NextPage = () => {
  const onButtonContainer2Click = useCallback(() => {
    // Please sync "F3: Homepage 1 (Directorx/Coordinadorxs)" to the project
  }, []);

  return (
    <div className={styles.pantallaDeInicioDeSesin}>
      <img
        className={styles.pantallaDeInicioDeSesinChild}
        alt=""
        src="/frame-62.svg"
      />
      <div className={styles.button}>
        <div className={styles.contraseaWrapper}>
          <div className={styles.contrasea}>Contraseña</div>
        </div>
      </div>
      <div className={styles.button1}>
        <div className={styles.correoElectrnicoWrapper}>
          <div className={styles.contrasea}>Correo electrónico</div>
        </div>
      </div>
      <div className={styles.button2} onClick={onButtonContainer2Click}>
        <div className={styles.ingresaWrapper}>
          <b className={styles.ingresa}>Ingresa</b>
        </div>
      </div>
      <div className={styles.holaAdmin}>¡Hola, admin!</div>
    </div>
  );
};

export default PantallaDeInicioDeSesin;
