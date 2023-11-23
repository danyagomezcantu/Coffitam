import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./form-container.module.css";

type FormContainerType = {
  /** Style props */
  rectangleIconTop?: CSSProperties["top"];
};

const FormContainer: NextPage<FormContainerType> = ({ rectangleIconTop }) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleIconTop,
    };
  }, [rectangleIconTop]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src="/rectangle-174@2x.png" />
      <div className={styles.cinnamonCocoa}>{`Cinnamon & Cocoa`}</div>
      <div className={styles.groupInner} />
      <div className={styles.div}>$55</div>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.groupChild1} />
      <img className={styles.groupChild2} alt="" src="/group-102.svg" />
      <div className={styles.div1}>4.5</div>
    </div>
  );
};

export default FormContainer;
