import { makeAutoObservable } from 'mobx';
import { getRequest } from '../../utils/axios';
import { Score, ScoreboardState } from './types';

export class ScoreboardStore {
    public state: ScoreboardState;

    private static getInitialState(): ScoreboardState {
        return {
            scoreboard: undefined
        };
    }

    constructor() {
        this.state = ScoreboardStore.getInitialState();
        makeAutoObservable(this);
    }

    public *loadState(): Generator {
        this.state = ScoreboardStore.getInitialState();

        try {
            const data = yield getRequest('/scoreboard');
            this.state.scoreboard = data as Score;
        } catch {
            this.state.scoreboard = undefined;
        }
    }
}
