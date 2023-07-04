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

import s from "./styles.module.scss";

const App = () => {
  return (
    <div className={s.container}>
      <div className={s.spaceCraft}>
        <img src={spaceCraft} alt="space craft" />
      </div>
      <header className={s.header}>
        <div>
          <img src={ghostDriveIcon} alt="Ghost Drive" />
        </div>
        <div className={s.metamask}>
          <img src={metamask} alt="Metamask" />
        </div>
      </header>
      <section className={s.ghostDrive}>
        <div className={s.titleWrapper}>
          <img src={ghostDrive} alt="GHOST DRIVE" className={s.title} />
          <h4 className={s.subtitle}>free sign up for beta</h4>
          <p className={s.description}>JOIN BOUNTY PROGRAM FOR TESTERS </p>
        </div>
        <div className={s.line}>
          <img src={line} alt="line" />
        </div>
        <div className={`${s.buttonContainer} ${s.getStarted}`}>
          <button className={s.button}>GET STARTED</button>
        </div>
        <div className={s.linksWrapper}>
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
      <section className={s.fileManager}>
        <img src={fileManager} alt="file manager" />
      </section>
      <section className={s.features}>
        <img src={publicIcon} alt="public" className={s.publicIcon} />
        <div className={s.feature}>
          <h6 className={s.featureSubtitle}>END-TO-END</h6>
          <h2 className={s.featureTitle}>Encrypted</h2>
          <p className={s.featureDescription}>DESIGNED TO KEEP PRIVACY</p>
          <img src={dots} alt="dots" className={s.dots} />
          <img src={encrypted} alt="Encrypted" className={s.encrypted} />
        </div>
        <div className={s.feature}>
          <h6 className={s.featureSubtitle}>workspaces</h6>
          <h2 className={s.featureTitle}>Secured</h2>
          <p className={s.featureDescription}>team spaces</p>
          <img src={dots} alt="dots" className={s.dots} />
          <img src={secured} alt="Secured" className={s.secured} />
        </div>
        <div>
          <div className={s.feature}>
            <h6 className={s.featureSubtitle}>blockchain</h6>
            <h2 className={s.featureTitle}>AGNOSTIC</h2>
            <p className={s.featureDescription}>Digital assets tokenization</p>
            <img src={dots} alt="dots" className={s.dots} />
            <img src={agnostic} alt="Agnostic" className={s.agnostic} />
          </div>
          <div className={s.blockchainWrapper}>
            <div className={s.blockchain}>
              <img src={polygon} alt="polygon " />
              <p>polygon</p>
            </div>
            <div className={s.blockchain}>
              <img src={ethereum} alt="ethereum" />
              <p>ethereum</p>
            </div>
            <div className={s.blockchain}>
              <img src={filecoin} alt="filecoin" />
              <p>filecoin</p>
            </div>
            <div className={s.blockchain}>
              <img src={binance} alt="binance" />
              <p>binance</p>
            </div>
          </div>
        </div>
        <div className={s.downloadBlock}>
          <div className={s.buttonContainer}>
            <button className={s.button}>OWN YOUR DATA</button>
          </div>
          <p className={s.downloadText}>
            Download
            <br />
            GHOSTDRIVE desktop APPS
          </p>
          <div className={s.linksBlock}>
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
      <footer className={s.footer}>
        <img src={footerImage} alt="spaceship" />
      </footer>
    </div>
  );
};

export default App;
