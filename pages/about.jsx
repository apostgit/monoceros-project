import styles from '../components/About/About.module.scss'
import Bridge from '../components/Index/Bridge/Bridge'
import Main from '../components/Index/Main/Main'
import Marketplace from '../components/Index/Marketplace/Marketplace'
import WeDiffer from '../components/Index/WeDiffer/WeDiffer'

const about = () => {
  return (
    <div className={styles.about}>
      <div className={styles.components}>
        <Main />

        <Bridge />

        <Marketplace />

        <WeDiffer />
      </div>
    </div>
  )
}

export default about