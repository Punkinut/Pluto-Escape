import Blob from '.';
import { render } from '@testing-library/react';

describe('Blob tests', () => {
    it('Should render', () => {
        const { container } = render(<Blob mousePosition={{ x: 0, y: 0 }} />);
        const html = container.innerHTML;

        expect(html).toBeDefined();
    });
});
