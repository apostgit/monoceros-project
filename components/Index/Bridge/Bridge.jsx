import styles from './Bridge.module.scss'
import Cube from '../../Cube/Cube'

const Bridge = () => {
  return (
    <div className={styles.bridge} id='bridge'>
      <div className={styles.bg}>
        <div className={`${styles.bg_blur} ${styles.top}`}></div>
        <div className={`${styles.bg_blur} ${styles.bottom}`}></div>
      </div>
      <div className={styles.inner}>
        <p className={styles.header}>NFTs - The bridge between Physical and Digital</p>
        <p>In our view, in order to achieve that we need to bring physical art up to speed with digital art.</p>
        <p>The unexpected and parabolic growth of Non-Fungible Tokens or NFTs is a strong sign that it is very easy to create a “digital twin” for a “real” thing.</p>
        <p>By turning a physical piece of art into an NFT, one creates a unique “digital twin” of the real physical asset.</p>
        <p>This opens up many possibilities for art - to sell a digital copy instead of a physical copy, much faster and cheaper; to create NFTs of art with high value and other restrictions e.g., safety and storage restrictions, and in this way make it more accessible and easier to monetize it. This monetization could then be used to enhance art in the real world.</p>
        <p>Examples of our vision of empowering art could be:</p>
        <ul>
          <li>Scholarships to exceptional Art students</li>
          <li>Funding to Schools of Fine Arts</li>
          <li>Sponsoring of exhibitions</li>
        </ul>
        <Cube width='40px' height='40px' speed='6' left='20' />
        <p>and many many other ideas, for which you can reach us at monoceros@...</p>
      </div>
    </div>
  )
}

export default Bridge