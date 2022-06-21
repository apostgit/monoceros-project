import styles from '../../components/Press/Post/Post.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../utils/supabaseClient'
import ReactMarkdown from 'react-markdown'

const id = () => {
  const router = useRouter()

  const [post, setPost] = useState()

  const get_post = async () => {
    const { data } = await supabase
      .from('press')
      .select()
      .match({ id: router.query.id })

    data && setPost(data[0])
  }

  useEffect(() => {
    (async () => {
      await get_post()
    })()
  }, [router])

  return (
    post ?
      <div className={styles.post}>
        <div className={styles.inner}>
          <div className={styles.thumbnail} style={{ backgroundImage: `url(${post.thumbnail})` }}></div>
          <p className={styles.title}>{post.title}</p>
          <div className={styles.flex_container}>
            <p className={styles.tag}><i className='fa-solid fa-tags'></i> {post.tag}</p>
            <p className={styles.date}><i className='fa-regular fa-calendar'></i> {new Date(post.created_at).toDateString()}</p>
          </div>
          
          <div className={styles.content}>
            <ReactMarkdown children={post.body} />
          </div>
        </div>
      </div>
      : null
  )
}

export default id