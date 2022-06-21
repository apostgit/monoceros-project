import styles from './BigPost.module.scss'

const BigPost = ({post}) => {
  return (
    <div className={styles.big_post} onClick={() => window.open(`/press/${post.id}`, '_self')}>
      <div className={styles.thumbnail} style={{ backgroundImage: `url(${post.thumbnail})` }}></div>
      <p className={styles.title}>{post.title}</p>
      <div className={styles.flex_container}>
        <p className={styles.tag}><i className='fa-solid fa-tags'></i> {post.tag}</p>
        <p className={styles.date}><i className='fa-regular fa-calendar'></i> {new Date(post.created_at).toDateString()}</p>
      </div>
    </div>  
  )
}

export default BigPost