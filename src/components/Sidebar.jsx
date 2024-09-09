import { PencilLine } from "phosphor-react"

import styles from './Sidebar.module.css'
import cover from '../assets/cover.png'

import { Avatar } from "./Avatar"
export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src={cover} alt="" />
        <div className={styles.profile}>
          <Avatar src="https://github.com/ElleLavigne.png" />
          <strong>Elle Lavigne</strong>
          <span>UI UX Design & Web Developer</span>
          <footer>
            <a href="#">
              <PencilLine size={20} />
              Editar seu perfil
            </a>
          </footer>
        </div>
      </aside>
    </>
  )
}