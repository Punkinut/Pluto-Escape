import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { ScoreboardStore } from '../../../stores/scoreboard/index.store';
import Blob from '../../atoms/Blob';
import styles from './index.module.scss';

const Main: FC = () => {
    const [store] = useState(() => new ScoreboardStore());

    useEffect(() => {
        store.loadState();
    }, [store]);

    const { state } = store;

    if (state.scoreboard) {
        console.log(JSON.stringify(state.scoreboard, null, 2));
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        console.log(e);
    };

    return (
        <section className={styles.gamerContainer} onMouseMove={(e) => handleMouseMove(e)}>
            <Blob />
        </section>
    );
};

export default observer(Main);
