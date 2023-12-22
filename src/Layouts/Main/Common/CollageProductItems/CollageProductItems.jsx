import React, { useState } from 'react';
import styles from '../../Pages/Home/Home.module.scss';

export const CollageProductItems = ({ productName, category, imageUrl }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className={styles.imageContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.productInfo} style={{ position: 'fixed', top: position.y + 30, left: position.x + 30, display: isHovered ? 'flex' : 'none' }}>
                <p>{productName}</p>
                <span>{category}</span>
            </div>
            <a href="#" className={styles.imageWrapper}>
                <img src={imageUrl} alt="Food" />
            </a>
        </div>
    );
};
