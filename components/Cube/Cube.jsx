import styles from './Cube.module.scss'
import { useEffect } from 'react';
import Rellax from 'rellax';

const Cube = ({width, height, speed, left}) => {
  useEffect(() => {
    var rellax = new Rellax('.rellax');
  }, [])

  return (
    <div className='rellax' data-rellax-speed={speed}><div className={styles.rellax_square} style={{ width, height, left: `${left}%` }}></div></div>
  )
}

export default Cube