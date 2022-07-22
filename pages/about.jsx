import styles from '../components/About/About.module.scss'

const about = () => {
  return (
    <div className={styles.about}>
      <div className={styles.components}>
        <div className={styles.item} id='bridge'>
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
            <p>and many many other ideas, for which you can reach us at monoceros@...</p>
          </div>
        </div>

        <div className={styles.item} id='marketplace'>
          <div className={styles.inner}>
            <p className={styles.header}>Monoceros Marketplace</p>
            <p>Our goals are meant to be achieved through our proprietary NFT marketplace.</p>
            <p>In our marketplace we feature NFTs that represent physical pieces of art, of known origin and authenticity.</p>
            <p>Artists, galleries, collectors and museums are all free to upload their NFT collection in our marketplace and sell the “digital twin” of a real piece of art. Of course, one could try to acquire the physical piece as well, but this is beyond the scope of our platform.</p>
          </div>
        </div>

        <div className={styles.item} id='wediffer'>
          <div className={styles.inner}>
            <p className={styles.header}>Why we are Different</p>
            <p>Our marketplace is different for one simple reason - it features “real” art of quality.</p>
            <p>This statement requires further qualification. We believe in the absolute freedom of art and the expression of artists in any way they see fit, away from “labeling”.</p>
            <p>However, there is in broad terms, an objective consensus of what is art, and also, quality art.</p>
            <p>Another reason which is even more disturbing and obvious in the NFT space, is the commercialization of and packaging of everything as art; or put otherwise, there is a vast flow of information and NFTs, and it is difficult to the untrained eye to distinguish between quality art and random art.</p>
            <p>In conclusion, in our marketplace we feature what is objectively regarded as real, quality art with a curated selection of NFTs.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about