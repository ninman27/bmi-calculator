import Image from "next/image";
import styles from "./bmiLimitationsDesktop.module.css";

const BmiLimitationsDesktop = () => {
  return (
    <section className={styles.section}>
      {/* First container */}
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className={`${styles.card} ${styles.firstCard}`}>
          <div className={styles.iconHeading}>
            <Image
              src="/icons/icon-gender.svg"
              alt="gender"
              width={32}
              height={32}
            />
            <h4>Gender</h4>
          </div>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a childs age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
      </div>

      {/* Second Container */}
      <div className={`${styles.container} ${styles.second}`}>
        <div className={styles.card}>
          <div className={styles.iconHeading}>
            <Image src="/icons/icon-age.svg" alt="age" width={32} height={32} />
            <h4>Age</h4>
          </div>
          <p>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconHeading}>
            <Image
              src="/icons/icon-muscle.svg"
              alt="muscle"
              width={32}
              height={32}
            />
            <h4>Muscle</h4>
          </div>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesnt differentiate muscle from fat.
          </p>
        </div>
      </div>
      {/* Third Container */}
      <div className={`${styles.container} ${styles.third}`}>
        <div className={styles.card}>
          <div className={styles.iconHeading}>
            <Image
              src="/icons/icon-pregnancy.svg"
              alt="pregnancy"
              width={32}
              height={32}
            />
            <h4>Pregnancy</h4>
          </div>
          <p>
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconHeading}>
            <Image
              src="/icons/icon-race.svg"
              alt="race"
              width={32}
              height={32}
            />
            <h4>Race</h4>
          </div>
          <p>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BmiLimitationsDesktop;
