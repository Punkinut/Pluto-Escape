import { FC } from 'react';
import styles from './index.module.scss';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/clientApp';

const Blob: FC = () => {
    // Basic firebase data connection, this is a proof of concept and will have to be moved to and API directiry with state management
    const getData = async () => {
        const docRef = doc(db, 'scoreboard', 'Ud9In5pXLlAyURyW1xAd');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
        } else {
            console.log('No such document!');
        }
    };
    getData();

    return <div className={styles.border}>Pluto Escape</div>;
};

export default Blob;
