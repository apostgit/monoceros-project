import styles from './WeDiffer.module.scss'
import Cube from '../../Cube/Cube'

const WeDiffer = () => {
  return (
    <div className={styles.we_differ} id='wediffer'>
      <div className={styles.inner}>
        <p className={styles.header}>Why are we Different</p>
        <Cube width='70px' height='70px' speed='2' left='0' />
        <p>Our marketplace is different for one simple reason - it features “real” art of quality.</p>
        <p>This statement requires further qualification. We believe in the absolute freedom of art and the expression of artists in any way they see fit, away from “labeling”.</p>
        <Cube width='20px' height='20px' speed='1' left='40' />
        <p>However, there is in broad terms, an objective consensus of what is art, and also, quality art.</p>
        <p>Another reason which is even more disturbing and obvious in the NFT space, is the commercialization of and packaging of everything as art; or put otherwise, there is a vast flow of information and NFTs, and it is difficult to the untrained eye to distinguish between quality art and random art.</p>
        <p>In conclusion, in our marketplace we feature what is objectively regarded as real, quality art with a curated selection of NFTs.</p>
        <Cube width='30px' height='30px' speed='5' left='80' />
      </div>
    </div>
  )
}

export default WeDiffer