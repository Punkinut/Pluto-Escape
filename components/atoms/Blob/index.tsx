import { FC } from 'react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

const Blob: FC = () => {
    return <motion.div className={styles.blob}></motion.div>;
};

export default Blob;
