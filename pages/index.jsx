import styles from '../components/Index/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.overlay_bg}>
        <div className={styles.bg}>
          <div className={styles.blur}>
            <div className={styles.info}>
              <p>Monoceros is one of the 88 official galaxy constellations of the known universe.</p>
              <p>The Monoceros Project is about the future of art in a digital world.</p>
              <p>Monoceros aspires to bring physical art up to speed with a world that is changing at an interstellar pace.</p>
              <p>We want physical art to continue to exist and adapt in an era that seems to be primarily digital.</p>
              <p>We wish to empower the creators of art - artists, first and foremost - as well as the ecosystem of art as we understand it today, which includes galleries, exhibitions, museums, Schools of Fine Arts, to name the most obvious.</p>
              <p>The Monoceros Project seeks to establish long lasting relationships with art ecosystems and empower them in this transitional period.</p>

              <button onClick={() => window.open('/about', '_self')}>
                The Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
