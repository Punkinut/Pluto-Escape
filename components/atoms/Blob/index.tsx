import { FC } from 'react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { BlobProps } from './types';

const Blob: FC<BlobProps> = ({ smallMousePosition }) => {
    return (
        <>
            <motion.div
                className={styles.smallBlob}
                animate={{
                    x: smallMousePosition.x,
                    y: smallMousePosition.y
                }}></motion.div>
        </>
    );
};

export default Blob;
