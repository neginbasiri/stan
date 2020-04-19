import React from 'react';
import styles from './CardItem.module.css';
import {Image, Text} from '../../atoms';

const CardItem = ({item}) => {
    const {images, title} = item;
    const {url} = images['Poster Art'];

    return <div className={styles.default}>
        <Image src={url} className='contain' alt={title}/>
        <Text>{title}</Text>
    </div>
};

export default CardItem;