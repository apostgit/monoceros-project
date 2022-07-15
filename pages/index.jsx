import styles from '../components/Index/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.overlay_bg}>
        <div className={styles.bg}>
          <div className={styles.blur}>
            <div className={styles.info}>
              <p>
                Monoceros is one of the 88 official galaxy constellations of the known universe.
                <br />
                Monoceros is also a project about the future of physical art in a digital world.
                <br />
                Please read what our Project does and why.
                <br />
                Then, our Marketplace awaits you for a journey in art - and the future of it.
              </p>

              <button onClick={() => window.open('/about', '_self')}>
                About Monoceros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
