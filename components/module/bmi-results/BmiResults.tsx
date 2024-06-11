import Image from "next/image";

import ImageBMI from "../../../public/images/bmi.webp";

import style from "./bmiResults.module.css";

const BmiResults = () => {
  return (
    <section className={style.bmiResultSection}>
      <Image src={ImageBMI} alt="bmi" className={style.imageBmi} />
      <div className={style.bmiTextContainer}>
        <h2>What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered a <q> healthy weight </q>.
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};

export default BmiResults;
