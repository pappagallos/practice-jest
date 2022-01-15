import { render } from '@testing-library/react';
import Timer from './Timer';

test('초 표시', () => {
    Date.now = jest.fn(() => 123456789);
    const view = render(<Timer />);
    expect(view).toMatchSnapshot();
});