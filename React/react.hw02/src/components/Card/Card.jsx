import React, {PureComponent} from 'react';
import styles from './Card.module.scss'

class Card extends PureComponent {
  render() {
    const {name, price, img, code, color} = this.props;

    return (
      <div className={styles.cardWrapper}>

        {/*<div className={styles.favourites} onClick={() => toggleFav(name)}>*/}
        {/*  {isFavourite && <StarRemove className={styles.svg}/>}*/}
        {/*  {!isFavourite && <StarAdd/>}*/}
        {/*</div>*/}

        <p className={styles.name}>{name}</p>
        <img className={styles.img} src={img} alt={name}/>
        <p className={styles.price}>{price}$</p>
        <p className={styles.colorProduct}>color:{color}</p>
        <p className={styles.code}>Code:{code}</p>
        <button className={styles.buttonAdd}
                // onClick={}
        >Add to cart</button>
      </div>
    )
  }
}

export default Card;