import BmiLimitationsDesktop from "@/components/module/bmi-limitations-desktop/BmiLimitationsDesktop";
import BmiLimitations from "@/components/module/bmi-limitations/BmiLimitations";
import BmiResults from "@/components/module/bmi-results/BmiResults";
import Hero from "@/components/module/hero/Hero";
import Tips from "@/components/module/tips/Tips";

const Home = () => {
  return (
    <>
      <Hero />
      <BmiResults />
      <Tips />
      <BmiLimitationsDesktop />
      <BmiLimitations />
    </>
  );
};

export default Home;
