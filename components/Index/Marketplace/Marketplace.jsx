import styles from './Marketplace.module.scss'
import Cube from '../../Cube/Cube'

const Marketplace = () => {
  return (
    <div className={styles.marketplace} id='marketplace'>
      <div className={styles.inner}>
        <p className={styles.header}>Monoceros Marketplace</p>
        <p>Our goals are meant to be achieved through our proprietary NFT marketplace.</p>
        <Cube width='50px' height='50px' speed='4' left='60' />
        <p>In our marketplace we feature NFTs that represent physical pieces of art, of known origin and authenticity.</p>
        <p>Artists, galleries, collectors and museums are all free to upload their NFT collection in our marketplace and sell the “digital twin” of a real piece of art. Of course, one could try to acquire the physical piece as well, but this is beyond the scope of our platform.</p>
      </div>
    </div>
  )
}

export default Marketplace