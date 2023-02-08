import React from "react";
import Card from "./card";

export default function Cards({ fotos, styles }) {
  return (
    <ul className={styles.galeria__lista}>
      {fotos.map((foto) => {
        return <Card key={foto.id} foto={foto} styles={styles} />;
      })}
    </ul>
  );
}
