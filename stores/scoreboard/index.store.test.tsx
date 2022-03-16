import { ScoreboardStore } from './index.store';

describe('Scoreboard store tests', () => {
    it('should create an instance with an initial state', () => {
        const newInstance = new ScoreboardStore();
        expect(newInstance).toBeDefined();
    });
});
