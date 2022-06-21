import styles from '../../components/Press/Index/Press.module.scss'
import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import BigPost from '../../components/Press/Index/BigPost/BigPost'
import Post from '../../components/Press/Index/Post/Post'

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
          <BigPost
            post={posts[0]} />}

        <div className={styles.grid_container}>
          {posts?.slice(1).map((post, index) => (
            <Post
              post={post}
              key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default index