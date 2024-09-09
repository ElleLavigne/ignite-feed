import styles from './Comment.module.css'
import avatar from "../assets/avatar.png"
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/ElleLavigne.png" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Diego Fernandes</strong>
                <time
                  title="11 de Maio às 08:13"
                  dateTime="2022-05-11 08:13:38"
                >
                  Cerca de 1h atrás
                </time>
              </div>
              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24}></Trash>
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
