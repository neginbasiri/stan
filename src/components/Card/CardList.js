import React from 'react';
import CardItem from './CardItem';
import styles from './CardList.module.css';

const CardList = ({entries}) => (<div className={styles.wrapper}>{entries.map( (item, index) => <CardItem key={index} item={item}/>)}</div>)

export default CardList;