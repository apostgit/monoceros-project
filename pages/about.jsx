import styles from '../components/About/About.module.scss'

const about = () => {
  return (
    <div className={styles.about}>
      <div className={styles.components}>
        <div className={styles.item}>
          <div className={styles.inner}>
            <p>Monoceros is one of the 88 official galaxy constellations of the known universe.</p>
            <p>The Monoceros Project is about the future of art in a digital world.</p>
            <p>Monoceros aspires to bring physical art up to speed with a world that is changing at an interstellar pace.</p>
            <p>We want physical art to continue to exist and adapt in an era that seems to be primarily digital.</p>
            <p>We wish to empower the creators of art - artists, first and foremost - as well as the ecosystem of art as we understand it today, which includes galleries, exhibitions, museums, Schools of Fine Arts, to name the most obvious.</p>
            <p>The Monoceros Project seeks to establish long lasting relationships with art ecosystems and empower them in this transitional period.</p>
          </div>
        </div>

        <div className={styles.item} id='bridge'>
          <div className={styles.inner}>
            <p className={styles.header}>NFTs - The bridge between Physical and Digital</p>
            <p>The unexpected and parabolic growth of Non-Fungible Tokens (NFTs) is a strong sign of how easy it is to create a digital version of a 'real' thing.</p>
            <p>By turning physical art into an NFT, one creates a unique digital version of it.</p>
            <p>This opens many new 'skies' for art - to create a digital copy instead of a physical copy much faster and cheaper; to easily create art NFTs and make it accessible and easier to monetize. This monetization could then be used to enhance art in the real world.</p>
            <p>Our vision of empowering art encompasses, among others:</p>
            <ul>
              <li>Funding to Schools of Fine Arts</li>
              <li>Scholarships to exceptional Art students</li>
              <li>Sponsoring of exhibitions and art spaces</li>
            </ul>
          </div>
        </div>

        <div className={styles.item} id='marketplace'>
          <div className={styles.inner}>
            <p className={styles.header}>Monoceros NFT Platform</p>
            <p>Our goals are meant to be achieved through our proprietary NFT platform.</p>
            <p>In our platform we feature NFTs that represent physical pieces of art of known origin and quality.</p>
            <p>Artists, galleries, collectors, and museums are free to upload their NFT collection in our platform and promote the digital versions of their physical pieces of art. Of course, one could acquire the physical piece as well, but this is beyond the scope of our platform.</p>
          </div>
        </div>

        <div className={styles.item} id='wediffer'>
          <div className={styles.inner}>
            <p className={styles.header}>Why we are Different</p>
            <p>Our platform is different for one simple reason - it features 'quality art'.</p>
            <p>This statement requires further qualification; we believe in the absolute freedom of art and the expression of artists in any way they see fit, away from 'labeling'.</p>
            <p>However, there is an 'objective' consensus of what is art - and especially, quality art.</p>
            <p>A disturbing issue in the NFT space is the packaging and commercialization of everything as 'art'. This vast flow of information makes difficult the distinction between quality art and random 'art' to the untrained eye.</p>
            <p>Our platform features a curated selection of NFTs that originates from physical pieces of 'objectively' quality art - and awaits you to explore it.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about