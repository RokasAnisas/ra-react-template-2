import { render } from '@/test/utils';

import { Example } from './Example';

describe('Example', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<Example>{TEST_LABEL}</Example>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
