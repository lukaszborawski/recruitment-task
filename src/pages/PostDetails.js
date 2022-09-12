import { useSelector } from 'react-redux'
import { selectCommentsByPost } from '../features/comments/commentsSlice'
import { useParams } from 'react-router-dom'

const PostDetails = () => {

  const { postID } = useParams()
  const commentsForPost = useSelector(state => selectCommentsByPost(state, Number(postID)))

  return (
    <section>
      <h2>Comments</h2>

      <ul>{commentsForPost.map(
        ({ id, name }) => (
          <li key={id}>
            <p>{name}</p>
          </li>

        )
      )
      }</ul>
    </section>
  )
}

export default PostDetails