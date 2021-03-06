import { useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={() => window.open('/', '_self')}>
        <p>MONOCEROS</p>
        <p>ART</p>
      </div>

      <div className={styles.nav}>
        <button className={`${styles.btn} ${styles.secondary}`} onClick={() => window.open('/about', '_self')}>
          The Project
        </button>

        <button className={`${styles.btn} ${styles.secondary}`} onClick={() => window.open('/ambassadors', '_self')}>
          Art Ambassadors
        </button>

        <button className={`${styles.btn} ${styles.secondary}`} onClick={() => window.open('/press', '_self')}>
          Press
        </button>

        <button className={`${styles.btn} ${styles.primary}`} onClick={() => window.open('https://platform.monoceros.art/', '_self')}>
          Platform
        </button>
      </div>

      <div className={styles.mobile_nav}>
        <div className={styles.btn} onClick={() => setMobileMenu(!mobileMenu)}>
          <i className='fa-solid fa-bars'></i>
        </div>

        {mobileMenu &&
          <div className={styles.mobile_menu}>
            <button className={`${styles.btn} ${styles.secondary}`} onClick={() => window.open('/', '_self')}>
              Home
            </button>

            <button className={`${styles.btn} ${styles.secondary}`} onClick={() => window.open('/about', '_self')}>
              The Project
            </button>

            <button className={`${styles.btn} ${styles.secondary}`} onClick={() => window.open('/ambassadors', '_self')}>
              Art Ambassadors
            </button>

            <button className={`${styles.btn} ${styles.secondary}`} onClick={() => window.open('/press', '_self')}>
              Press
            </button>

            <button className={`${styles.btn} ${styles.primary}`} onClick={() => window.open('https://nft.monoceros.art/', '_self')}>
              Marketplace
            </button>
          </div>}
      </div>
    </div>
  )
}

export default Header