import { FC, useState } from 'react';
import Blob from '../../atoms/Blob';
import styles from './index.module.scss';

const Background: FC = () => {
    const [smallMousePosition, setSmallMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setSmallMousePosition({ x: e.pageX - 35, y: e.pageY - 35 });
    };
    return (
        <section className={styles.gamerContainer} onMouseMove={(e) => handleMouseMove(e)}>
            <Blob smallMousePosition={smallMousePosition} />
        </section>
    );
};

export default Background;
