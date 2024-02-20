import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "../styles/header.module.scss";
import commonStyles from "../styles/common.module.scss";

type HeaderProps = {
  logoLink: string;
};

export default function Header({ logoLink }: HeaderProps) {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.spaceBetween}>
          <Link href={logoLink} className={styles.logo}>
            AG
          </Link>
          <ul className={styles.navList}>
            <li>
              <a
                href="https://drive.google.com/file/d/1pYhRSAeGOJjHJi_a8r0uLwAEsaaW0nTG/view?usp=drive_link"
                title="Download Kuda's Resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kudarukuni"
                title="Go to Alexander's GitHub"
              >
                <FaGithub />
                <span className={commonStyles.hiddenText}>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kudarukuni/"
                title="Connect with Kuda on LinkedIn"
              >
                <FaLinkedin />
                <span className={commonStyles.hiddenText}>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
