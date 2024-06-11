"use client";

import { useState } from "react";
import styles from "./calculator.module.css";

const Calculator = () => {
  const [formData, setFormData] = useState({
    cm: 0,
    kg: 0,
    ft: 0,
    inch: 0,
    st: 0,
    lbs: 0,
    measurement: "metric",
  });

  const handleChange = (event: any) => {
    const { name, type, checked, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  };

  const bmiMetricCalculator = (
    cm: number,
    kg: number,
    totalCm: number,
    totalKg: number
  ) => {
    const result =
      formData.measurement === "metric"
        ? (kg / ((cm * cm) / 10000)).toFixed(2)
        : (totalKg / ((totalCm * totalCm) / 10000)).toFixed(2);
    return result;
  };

  const ftToCm = formData.ft / 0.032808;
  const inchToCm = formData.inch / 0.3937;

  const totalCm = ftToCm + inchToCm;

  const stToKg = formData.st / 0.15747;
  const lbsToKg = formData.lbs / 2.2046;

  const totalKg = stToKg + lbsToKg;

  const result = bmiMetricCalculator(
    formData.cm,
    formData.kg,
    totalCm,
    totalKg
  );

  const numericResult = parseInt(result);
  return (
    <div className={styles.container}>
      <h3>Enter your details below</h3>
      <form>
        <div className={styles.radioButtonContainer}>
          <div className={styles.inputLabel}>
            <input
              type="radio"
              id="metric"
              value="metric"
              name="measurement"
              checked={formData.measurement === "metric"}
              onChange={handleChange}
              className={styles.radioButton}
            />
            <label htmlFor="metric" className={styles.labelRadioButton}>
              Metric
            </label>
          </div>
          <div className={styles.inputLabel}>
            <input
              type="radio"
              id="imperial"
              value="imperial"
              name="measurement"
              onChange={handleChange}
              className={styles.radioButton}
            />
            <label htmlFor="imperial" className={styles.labelRadioButton}>
              Imperial
            </label>
          </div>
        </div>
        {/* metric inputs */}
        {formData.measurement === "metric" && (
          <div className={styles.inputsContainer}>
            <div className={styles.inputLabelContainer}>
              <label htmlFor="height" className={styles.label}>
                Height
              </label>
              <input
                name="cm"
                type="number"
                id="height"
                value={formData.cm}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.inputLabelContainer}>
              <label htmlFor="weight" className={styles.label}>
                Weight
              </label>
              <input
                name="kg"
                type="number"
                id="weight"
                value={formData.kg}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>
        )}

        {/* imperial inputs */}
        {formData.measurement === "imperial" && (
          <div>
            <label htmlFor="height" className={styles.label}>
              Height
            </label>
            <div className={styles.imperialInputsContainer}>
              <input
                name="ft"
                type="number"
                id="height"
                value={formData.ft}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                name="inch"
                type="number"
                id="height"
                value={formData.inch}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <label
              htmlFor="weight"
              className={`${styles.label} ${styles.marginTop}`}
            >
              Weight
            </label>
            <div className={styles.imperialInputsContainer}>
              <input
                name="st"
                type="number"
                id="weight"
                value={formData.st}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                name="lbs"
                type="number"
                id="weight"
                value={formData.lbs}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>
        )}
      </form>
      {isNaN(numericResult) || numericResult <= 0 ? (
        <div className={styles.resultsContainer}>
          <div>
            <h3>Welcome!</h3>
            <p>
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.resultsContainer}>
          <div className={styles.headingResultsContainer}>
            <p>Your BMI is...</p>
            <h1>{result}</h1>
          </div>
          <p>
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between <b>63.3kgs - 85.2kgs</b>.
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
