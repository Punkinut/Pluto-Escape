import { FC } from 'react';
import firebase from '../../../firebase/clientApp';
import styles from './index.module.scss';

const Blob: FC = () => {
    console.log(firebase);
    return <div className={styles.border}>Pluto Escape</div>;
};

export default Blob;
