import { FC } from 'react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { BlobProps } from './types';

const Blob: FC<BlobProps> = ({ mousePosition }) => {
    return (
        <motion.div
            className={styles.blob}
            animate={{
                x: mousePosition.x,
                y: mousePosition.y
            }}
            transition={{ type: 'spring', stiffness: 100 }}></motion.div>
    );
};

export default Blob;
