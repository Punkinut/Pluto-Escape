import { render } from '@testing-library/react';
import Main from '.';

describe('Main page tests', () => {
    it('should render', () => {
        const { container } = render(<Main />);
        const html = container.innerHTML;

        expect(html).toBeDefined();
    });
});
