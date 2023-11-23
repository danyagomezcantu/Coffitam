import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./form-container1.module.css";

type FormContainer1Type = {
  dimensionCode?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const FormContainer1: NextPage<FormContainer1Type> = ({
  dimensionCode,
  propTop,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDiv2Style}>
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src={dimensionCode} />
      <div className={styles.drizzledWithCaramel}>Drizzled with Caramel</div>
      <div className={styles.groupInner} />
      <div className={styles.div}>₹199</div>
      <div className={styles.groupWrapper}>
        <img className={styles.groupIcon} alt="" src="/group2.svg" />
      </div>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupChild1} alt="" src="/group-1022.svg" />
      <div className={styles.div1}>4.5</div>
    </div>
  );
};

export default FormContainer1;
