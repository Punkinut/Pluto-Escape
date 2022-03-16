import Blob from '.';
import { render } from '@testing-library/react';

describe('Blob tests', () => {
    it('Should render', () => {
        const position = { x: 0, y: 0 };
        const { container } = render(<Blob smallMousePosition={position} />);
        const html = container.innerHTML;

        expect(html).toBeDefined();
    });
});
