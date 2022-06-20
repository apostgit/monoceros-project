import styles from '../components/Index/Index.module.scss'
import Bridge from '../components/Index/Bridge/Bridge'
import Main from '../components/Index/Main/Main'
import Marketplace from '../components/Index/Marketplace/Marketplace'
import WeDiffer from '../components/Index/WeDiffer/WeDiffer'

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.overlay_bg}>
        <div className={styles.bg}>
          <div className={styles.blur}>
            <div className={styles.info}>
              <p>Welcome to Monoceros</p>

              <ul>
                <li><a href='#beginning'>Beginning</a></li>
                <li><a href='#bridge'>NFTs Bridge</a></li>
                <li><a href='#marketplace'>Monoceros Marketplace</a></li>
                <li><a href='#wediffer'>We differ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Main />

      <Bridge />

      <Marketplace />

      <WeDiffer />
    </div>
  )
}
