import Image from "next/image";

import style from "./tips.module.css";

const Tips = () => {
  return (
    <section className={style.tipsSection}>
      <div className={style.tipsCard}>
        <Image
          src="/icons/icon-eating.svg"
          alt="healthy eating"
          width={64}
          height={64}
        />
        <div>
          <h3 className={style.heading}>Healthy eating</h3>
          <p>
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </div>
      <div className={style.tipsCard}>
        <Image
          src="/icons/icon-exercise.svg"
          alt="regular exercise"
          width={64}
          height={64}
        />
        <div>
          <h3 className={style.heading}>Regular exercise</h3>
          <p>
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </div>
      <div className={style.tipsCard}>
        <Image
          src="/icons/icon-sleep.svg"
          alt="adequate sleep"
          width={64}
          height={64}
        />
        <div>
          <h3 className={style.heading}>Adequate sleep</h3>
          <p>
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tips;
