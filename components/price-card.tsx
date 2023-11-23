import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./price-card.module.css";

type PriceCardType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const PriceCard: NextPage<PriceCardType> = ({ propTop }) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src="/rectangle-1741@2x.png" />
      <div className={styles.burstingBlueberry}>Bursting Blueberry</div>
      <div className={styles.groupInner} />
      <div className={styles.div}>₹249</div>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group1.svg" />
      <div className={styles.groupChild1} />
      <img className={styles.groupChild2} alt="" src="/group-1021.svg" />
      <div className={styles.div1}>4.5</div>
    </div>
  );
};

export default PriceCard;
