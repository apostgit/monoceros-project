import styles from '../components/Index/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.overlay_bg}>
        <div className={styles.bg}>
          <div className={styles.blur}>
            <div className={styles.info}>
              <p>Physical Art in a Digital World</p>

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
