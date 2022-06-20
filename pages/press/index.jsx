import styles from '../../components/Press/Press.module.scss'
import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'

const index = () => {
  const [posts, setPosts] = useState()

  const get_post = async () => {
    const { data } = await supabase
      .from('press')
      .select()

    data && setPosts(data)
  }

  useEffect(() => {
    (async () => {
      await get_post()
    })()
  }, [])


  return (
    <div className={styles.press}>
      <div className={styles.inner}>
        {posts &&
          <div className={styles.big_post} onClick={() => window.open(`/press/${posts[0].id}`, '_self')}>
            <div className={styles.thumbnail} style={{ backgroundImage: `url(${posts[0].thumbnail})` }}></div>
            <p className={styles.title}>{posts[0].title}</p>
            <p className={styles.date}><i className='fa-regular fa-calendar'></i> {new Date(posts[0].created_at).toDateString()}</p>
          </div>}
      </div>
    </div>
  )
}

export default index