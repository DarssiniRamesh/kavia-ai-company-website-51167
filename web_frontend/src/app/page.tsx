import Image from "next/image";
import styles from "./homepage.module.css";

/**
 * Homepage for KAVIA AI - Built for pixel-perfect fidelity with provided design reference.
 */
// PUBLIC_INTERFACE
export default function Home() {
  return (
    <main className={styles.homepage}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Image
            src="/favicon.ico"
            alt="KAVIA AI"
            width={40}
            height={40}
            className={styles.logo}
            priority
          />
          <span className={styles.logoText}>KAVIA AI</span>
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#offerings">Offerings</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Unlock AI-Driven Success with <span className={styles.heroAccent}>KAVIA</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Future-proof your business with tailored AI strategy, rapid ML prototyping, and trusted GenAI guidance.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="/assets/hero-placeholder.png"
            alt="AI Abstract"
            width={460}
            height={370}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Announcement Bar */}
      <div className={styles.announcement}>
        <span className={styles.dot}></span>
        <span>
          🛠 Now offering Generative AI Workshops • Book your session today!
        </span>
      </div>

      {/* Feature Section */}
      <section className={styles.features} id="offerings">
        <h2 className={styles.featuresHeading}>Our Offerings</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>AI Strategy</h3>
            <p>
              Bespoke roadmaps to align data & AI to your business goals, unlock ROI and drive growth.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Rapid ML Prototyping</h3>
            <p>
              End-to-end prototypes delivered in weeks, not months. Validate value before scaling.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>GenAI Workshops</h3>
            <p>
              Hands-on learning—turn buzzwords into action with guided, impactful sessions.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Trust & Compliance</h3>
            <p>
              AI that works ethically, securely, and in-line with the latest policies and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutContent}>
          <h2>About KAVIA AI</h2>
          <p>
            KAVIA AI is a collective of seasoned specialists delivering pragmatic, trusted AI solutions. We blend deep technical knowledge, business acumen, and governance expertise to help organizations thrive in the AI era.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>
          Ready to start your AI journey?<br />
          <span className={styles.ctaAccent}>Let&apos;s talk.</span>
        </h2>
        <a href="#contact" className={styles.ctaButtonLarge}>
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Image src="/favicon.ico" alt="KAVIA AI" width={30} height={30} />
            <span className={styles.logoText}>KAVIA AI</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="#about">About</a>
            <a href="#offerings">Offerings</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} KAVIA AI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
