import React from "react";

import ghostDrive from "assets/ghostDrive.svg";
import metamask from "assets/icons/metamask.svg";
import ghostDriveIcon from "assets/icons/ghost-drive-icon.svg";
import spaceCraft from "assets/space-craft.png";
import windowsIcon from "assets/icons/windows.svg";
import appleIcon from "assets/icons/apple.svg";
import chromeIcon from "assets/icons/chrome.svg";
import linuxIcon from "assets/icons/linux.svg";
import fileManager from "assets/file-manager.svg";
import publicIcon from "assets/icons/public.svg";
import encrypted from "assets/encrypted.png";
import secured from "assets/secured.png";
import agnostic from "assets/agnostic.png";
import dots from "assets/icons/dots.svg";
import filecoin from "assets/icons/filecoin.svg";
import binance from "assets/icons/binance.svg";
import ethereum from "assets/icons/ethereum.svg";
import polygon from "assets/icons/polygon.svg";
import footerImage from "assets/footer.png";
import line from "assets/line.svg";
import angle from "assets/icons/angle-button.svg";

import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spaceCraft}>
        <img src={spaceCraft} alt="space craft" />
      </div>
      <header className={styles.header}>
        <div>
          <img src={ghostDriveIcon} alt="Ghost Drive" />
        </div>
        <div className={styles.metamask}>
          <img src={metamask} alt="Metamask" />
        </div>
      </header>
      <section className={styles.ghostDrive}>
        <div className={styles.titleWrapper}>
          <img src={ghostDrive} alt="GHOST DRIVE" className={styles.title} />
          <h4 className={styles.subtitle}>free sign up for beta</h4>
          <p className={styles.description}>JOIN BOUNTY PROGRAM FOR TESTERS </p>
        </div>
        <div className={styles.line}>
          <img src={line} alt="line" />
        </div>
        <div className={`${styles.buttonContainer} ${styles.getStarted}`}>
          <button className={styles.button}>GET STARTED</button>
          <img src={angle} alt="angle" className={styles.topLeft} />
          <img src={angle} alt="angle" className={styles.topRight} />
          <img src={angle} alt="angle" className={styles.bottomLeft} />
          <img src={angle} alt="angle" className={styles.bottomRight} />
        </div>
        <div className={styles.linksWrapper}>
          <a href="#">
            <img src={windowsIcon} alt="windows" />
          </a>
          <a href="#">
            <img src={appleIcon} alt="apple" />
          </a>
          <a href="#">
            <img src={chromeIcon} alt="chrome" />
          </a>
        </div>
      </section>
      <div className={styles.fileManager}></div>
      <section className={styles.features}>
        <img src={publicIcon} alt="public" className={styles.publicIcon} />
        <div className={styles.feature}>
          <h6 className={styles.featureSubtitle}>END-TO-END</h6>
          <h2 className={styles.featureTitle}>Encrypted</h2>
          <p className={styles.featureDescription}>DESIGNED TO KEEP PRIVACY</p>
          <img src={dots} alt="dots" className={styles.dots} />
          <img src={encrypted} alt="Encrypted" className={styles.encrypted} />
        </div>
        <div className={`${styles.feature} ${styles.featureSecured}`}>
          <h6 className={styles.featureSubtitle}>workspaces</h6>
          <h2 className={styles.featureTitle}>Secured</h2>
          <p className={styles.featureDescription}>team spaces</p>
          <img src={dots} alt="dots" className={styles.dots} />
          <img src={secured} alt="Secured" className={styles.secured} />
        </div>
        <div>
          <div className={styles.feature}>
            <h6 className={styles.featureSubtitle}>blockchain</h6>
            <h2 className={styles.featureTitle}>AGNOSTIC</h2>
            <p className={styles.featureDescription}>
              Digital assets tokenization
            </p>
            <img src={dots} alt="dots" className={styles.dots} />
            <img src={agnostic} alt="Agnostic" className={styles.agnostic} />
          </div>
          <div className={styles.blockchainWrapper}>
            <div className={styles.blockchain}>
              <img src={polygon} alt="polygon " />
              <p>polygon</p>
            </div>
            <div className={styles.blockchain}>
              <img src={ethereum} alt="ethereum" />
              <p>ethereum</p>
            </div>
            <div className={styles.blockchain}>
              <img src={filecoin} alt="filecoin" />
              <p>filecoin</p>
            </div>
            <div className={styles.blockchain}>
              <img src={binance} alt="binance" />
              <p>binance</p>
            </div>
          </div>
        </div>
        <div className={styles.downloadBlock}>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>OWN YOUR DATA</button>
            <img src={angle} alt="angle" className={styles.topLeft} />
            <img src={angle} alt="angle" className={styles.topRight} />
            <img src={angle} alt="angle" className={styles.bottomLeft} />
            <img src={angle} alt="angle" className={styles.bottomRight} />
          </div>
          <p className={styles.downloadText}>
            Download
            <br />
            GHOSTDRIVE desktop APPS
          </p>
          <div className={styles.linksBlock}>
            <a href="#">
              <img src={windowsIcon} alt="windowsIcon" />
            </a>
            <a href="#">
              <img src={appleIcon} alt="appleIcon" />
            </a>
            <a href="#">
              <img src={linuxIcon} alt="linuxIcon" />
            </a>
            <a href="#">
              <img src={chromeIcon} alt="chromeIcon" />
            </a>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <img src={footerImage} alt="spaceship" />
      </footer>
    </div>
  );
};

export default App;
