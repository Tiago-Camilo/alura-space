import React, { useState } from "react";
import Tags from "../tags";
import fotos from "./fotos.json";
import styles from "./Galeria.module.scss";
import Cards from "./cards";

export default function Galeria() {

  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((valor) => valor.tag))]

  const filtrarFotos = (tag) => {
    const fotosNovas = fotos.filter((foto) => {
      return foto.tag === tag
    })
    setItens(fotosNovas)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
      <Cards fotos={itens} styles={styles} />
    </section>
  );
}
