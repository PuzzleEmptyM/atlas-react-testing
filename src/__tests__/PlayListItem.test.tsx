import { render } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';

describe('PlayListItem Component', () => {
  it('renders with required props', () => {
    const { asFragment } = render(
      <PlayListItem title="Test Song" artist="Test Artist" duration="3:45" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with additional prop (className)', () => {
    const { asFragment } = render(
      <PlayListItem
        title="Another Test Song"
        artist="Another Test Artist"
        duration="4:20"
        className="custom-class"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with longer title and artist name', () => {
    const { asFragment } = render(
      <PlayListItem
        title="A Very Long Song Title That Exceeds Normal Length And Should Not Be This Long"
        artist="An Artist With A Very Long Name For Some Reason"
        duration="5:05"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
