import Cube from '../../Cube/Cube'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.main} id='beginning'>
      <div className={styles.inner}>
        <Cube width='40px' height='40px' speed='2' left='0' />
        <p className={styles.header}>Monoceros: The Beginning</p>
        <p>Monoceros is one of the 88 official galaxy constellations of the known universe.</p>
        <p>The Monoceros Project is about the future of physical art in a digital world.</p>
        <p>Monoceros aspires to bring physical art up to speed with a world that is
          changing at an interstellar pace.</p>
        <Cube width='50px' height='50px' speed='2' left='100' />
        <p>We want physical art to continue to exist and adapt accordingly, in an era that seems to be primarily digital. We have no objections against any form of art in any medium, may it that be digital, phygital, “real” or zeros and ones in a metaverse.</p>
        <p>Our “concern” is that physical art does not lag behind and starts to become irrelevant - maybe
          not in the near future, but further down the road. We wish to empower the creators of art -
          artists, first and foremost. And the ecosystem of art as we understand it today, which
          includes galleries, exhibitions, museums, Schools of Fine Arts to name the most obvious.</p>
        <p>Monoceros wants to build long lasting relationships with art ecosystems and empower them
          in this transitional period.</p>

        <Cube width='40px' height='40px' speed='2' left='40' />
      </div>
    </div>
  )
}

export default Main