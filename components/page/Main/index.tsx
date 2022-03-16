import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { ScoreboardStore } from '../../../stores/scoreboard/index.store';
import Background from '../../organisms/Background';
import styles from './index.module.scss';

const Main: FC = () => {
    const [store] = useState(() => new ScoreboardStore());

    useEffect(() => {
        store.loadState();
    }, []);

    const { state } = store;

    if (state.scoreboard) {
        console.log(JSON.stringify(state.scoreboard, null, 2));
    }
    return (
        <section className={styles.container}>
            <Background />
        </section>
    );
};

export default observer(Main);
