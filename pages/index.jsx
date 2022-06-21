import styles from '../components/Index/Index.module.scss'
import { useState } from 'react'
import Bridge from '../components/Index/Bridge/Bridge'
import Main from '../components/Index/Main/Main'
import Marketplace from '../components/Index/Marketplace/Marketplace'
import WeDiffer from '../components/Index/WeDiffer/WeDiffer'

export default function Home() {
  const comps = [<Main />, <Bridge />, <Marketplace />, <WeDiffer />]

  const [index, setIndex] = useState(0)

  return (
    <div className={styles.index}>
      <div className={styles.overlay_bg}>
        <div className={styles.bg}>
          <div className={styles.blur}>
            <div className={styles.info}>
              <p>Welcome to Monoceros</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.components}>
        <button className={`${styles.btn_arrow} ${styles.left}`} style={{ opacity: index == 0 ? 0 : 1 }} onClick={() => setIndex(index > 0 ? index - 1 : 0)}>
          <i className='fa-solid fa-angle-left'></i>
        </button>

        <div className={styles.comp}>
          {comps[index]}
        </div>
 
        <button className={`${styles.btn_arrow} ${styles.right}`} style={{ opacity: index == comps.length - 1 ? 0 : 1 }} onClick={() => setIndex(index < comps.length - 1 ? index + 1 : comps.length - 1)}>
          <i className='fa-solid fa-angle-right'></i>
        </button>

        <div className={styles.mobile_buttons}>
          <button className={`${styles.btn_arrow} ${styles.mobile_btn} ${styles.left}`} style={{ opacity: index == 0 ? 0 : 1 }} onClick={() => setIndex(index > 0 ? index - 1 : 0)}>
            <i className='fa-solid fa-angle-left'></i>
          </button>

          <button className={`${styles.btn_arrow} ${styles.mobile_btn} ${styles.right}`} style={{ opacity: index == comps.length - 1 ? 0 : 1 }} onClick={() => setIndex(index < comps.length - 1 ? index + 1 : comps.length - 1)}>
            <i className='fa-solid fa-angle-right'></i>
          </button>
        </div>
      </div>
    </div>
  )
}
