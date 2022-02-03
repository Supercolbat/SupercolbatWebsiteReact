import {Circle} from "@chakra-ui/react"
import styles from '../styles/RandomButton.module.css'

export default function RandomButton (...props: any) {
  return (
    <button className={styles.button}>
      <Circle className={styles.shadow} size="5rem" bg="gray" color="white" />
      <Circle className={styles.edge} size="5rem" color="white" />
      <Circle className={styles.top} size="5rem" bg="#49DB37" color="white" />
    </button>
  )
}