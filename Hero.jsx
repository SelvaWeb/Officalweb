import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.web.pdf";
import { useTheme } from "../../common/ThemeContext";
import Typical from "react-typical";


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
      
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          SElVA
          <br />
          RAJ
        </h1>
        <h2>Frontend Developer</h2>
        {" "}
        <h1>
          {" "}
          <Typical
             loop={Infinity}
             steps={[
               "Freelancer🧑🏻",
               1000,
               "Located In Karnataka 📍🗺️",
               1000,
               "BBA Graduate📚",
               1000,
               "Mysore University",
               1000,
               "React /React js devloper ⚛",
               1000,
             ]} 
          ></Typical>
        </h1>
       
        <span>
          <a href="https://x.com/selvara31018062?t=4c3hvAflkmIwJtS3eAklNw&s=03" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/selva-raj-b9484421b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="btn highlighted-btn">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
