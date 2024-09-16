import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';

describe('CoverArt Component', () => {
  it('renders with default props', () => {
    const { asFragment } = render(<CoverArt alt="Default cover art" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with specific image source', () => {
    const { asFragment } = render(
      <CoverArt src="test-image.jpg" alt="Test cover art" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with different alt text', () => {
    const { asFragment } = render(
      <CoverArt alt="Alternative cover art" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
