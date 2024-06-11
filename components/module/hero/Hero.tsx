import Image from "next/image";

import style from "./hero.module.css";
import Calculator from "@/components/reusable/calculator/Calculator";

const Hero = () => {
  return (
    <section className={style.heroSection}>
      <Image src="/logo.svg" alt="logo" width={60} height={60} />
      <div className={style.heroTextContainer}>
        <h1>Body Mass Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <Calculator />
    </section>
  );
};

export default Hero;
