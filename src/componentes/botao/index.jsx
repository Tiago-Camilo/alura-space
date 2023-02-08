import React from 'react'
import styles from './Botao.module.scss'

export default function Botao({text}) {
  return (
    <button className={styles.botao}>{text}</button>
  )
}
