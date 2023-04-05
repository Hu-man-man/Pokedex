import React from "react";
import styles from "../styles/Home.module.css";

function PokemonCart(props) {
  return (
    <div className={`${styles.pokemon} ${styles[props.data.types[0].type.name]}`}>
      <div className={styles.imgContainer}>
        <img src={props.data.sprites.front_default} alt={props.data.name} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{props.data.name}</h3>
        <span className={styles.type}>
          Type: <span>{props.data.types[0].type.name}</span>
        </span>
      </div>
    </div>
  );
}

export default PokemonCart;
