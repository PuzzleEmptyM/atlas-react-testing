import { render, fireEvent } from '@testing-library/react';
import VolumeControl from '../components/VolumeControl';

describe('VolumeControl Component', () => {
  it('renders with default volume', () => {
    const { asFragment } = render(<VolumeControl />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders when muted', () => {
    const { getByRole, asFragment } = render(<VolumeControl />);
    const slider = getByRole('slider') as HTMLInputElement;
    fireEvent.change(slider, { target: { value: '0' } });
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders at maximum volume', () => {
    const { getByRole, asFragment } = render(<VolumeControl />);
    const slider = getByRole('slider') as HTMLInputElement;
    fireEvent.change(slider, { target: { value: '100' } });
    expect(asFragment()).toMatchSnapshot();
  });
});
