import type { NextPage } from "next";
import FormContainer from "../components/form-container";
import PriceCard from "../components/price-card";
import FormContainer1 from "../components/form-container1";
import Footer from "../components/footer";
import styles from "./index.module.css";

const MenBebidaAlumnx: NextPage = () => {
  return (
    <div className={styles.menBebidaAlumnx}>
      <div className={styles.coffeeCards}>
        <FormContainer />
        <PriceCard />
        <FormContainer1 dimensionCode="/rectangle-1742@2x.png" />
        <FormContainer1
          dimensionCode="/rectangle-1743@2x.png"
          propTop="300.1px"
        />
        <FormContainer rectangleIconTop="599px" />
        <PriceCard propTop="898.5px" />
        <FormContainer1
          dimensionCode="/rectangle-1742@2x.png"
          propTop="599px"
        />
        <FormContainer1
          dimensionCode="/rectangle-1743@2x.png"
          propTop="899.1px"
        />
      </div>
      <Footer />
    </div>
  );
};

export default MenBebidaAlumnx;
