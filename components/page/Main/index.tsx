import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { ScoreboardStore } from '../../../stores/scoreboard/index.store';
import Blob from '../../atoms/Blob';

const Main: FC = () => {
    const [store] = useState(() => new ScoreboardStore());

    useEffect(() => {
        store.loadState();
    }, [store]);

    const { state } = store;

    console.log(JSON.stringify(state, null, 2));

    return (
        <div>
            <Blob />
        </div>
    );
};

export default observer(Main);
