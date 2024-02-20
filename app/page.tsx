import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import styles from "../styles/home.module.scss";
import commonStyles from "../styles/common.module.scss";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import { projectsList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import AlexanderGrattan from "../images/alexander-grattan.jpeg";

const blogPosts: { title: string; slug: string; date: string }[] = [
  {
    title: "Why I Don't Want to Work Remotely as a Young Person",
    slug: "no-remote-while-young",
    date: " February 20, 2024",
  },
  {
    title: "Falling Out of Love with family",
    slug: "falling-out-of-love-with-twin-macro",
    date: "February 20, 2024",
  },
];

export default function Homepage() {
  return (
    <div className={styles.homeContainer}>
      <IntroOverlay />
      <div id="afterAnimation">
        <Header logoLink="/" />
        <main>
          <section className={styles.hero}>
            <div className={styles.cta}>
              <h1 id="title" className={styles.title}>
                I create
                <span className={commonStyles.playful}> animated </span>{" "}
                experiences.
              </h1>
              <div id="portraitContainer" className={styles.portraitContainer}>
                <Image
                  src={AlexanderGrattan}
                  alt="Portrait of Kuda Rukuni"
                  className={styles.portrait}
                  priority
                />
              </div>
            </div>
            <p id="jobTitle" className={styles.jobTitle}>
              Kuda Rukuni / Software Developer
            </p>
          </section>
          {/* <section
            id="blogPreviewContainer"
            className={styles.blogPreviewContainer}
          >
            <h2>About Me</h2>
            <p>
              Hi there! My name is Alexander Grattan and I&apos;m a software
              developer at Actual Size, a branding and digital design agency,
              and a University of Pittsburgh graduate. <br />
              <br /> My current skills primarily focus around web development,
              but I also enjoy experimenting with app development, creative
              coding, data visualization, Human-Computer Interaction (HCI), and
              UX.
            </p>
          </section> */}
          <section
            id="blogPreviewContainer"
            className={styles.blogPreviewContainer}
          >
            <h2>My Blog</h2>
            <ul>
              {blogPosts.map((post, i) => (
                <li key={i}>
                  <Link href={`/blog/post/${post.slug}`}>
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.projectContainer} id="projects">
            <div className={styles.projectTitleContainer}>
              <h2>My Projects</h2>
            </div>

            <div className={styles.projectListingsContainer}>
              {projectsList.map((project) => (
                <ProjectListing key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </main>
        <footer>
          <h2>Taura Neni Apo</h2>
          <ul id="footerLinks" className={styles.footerLinks}>
            <li>
              <a
                href="https://drive.google.com/file/d/1pYhRSAeGOJjHJi_a8r0uLwAEsaaW0nTG/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Kuda's Resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kudarukuni"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to Kuda's GitHub"
              >
                <FaGithub />
                <span className={commonStyles.hiddenText}>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kudarukuni/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Kuda on LinkedIn"
              >
                <FaLinkedin />
                <span className={commonStyles.hiddenText}>LinkedIn</span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
