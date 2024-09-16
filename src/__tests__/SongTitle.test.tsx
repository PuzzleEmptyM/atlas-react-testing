import { render } from '@testing-library/react';
import SongTitle from '../components/SongTitle';

describe('SongTitle Component', () => {
  it('renders with title and artist', () => {
    const { asFragment } = render(
      <SongTitle title="Sample Song" artist="Sample Artist" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with longer title and artist', () => {
    const { asFragment } = render(
      <SongTitle
        title="A Very Long Song Title That Might Span Multiple Lines And Should Not Have Any Business Being This Long"
        artist="An Artist With An Equally Long Name That Is Very Impressive"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with special characters in title and artist', () => {
    const { asFragment } = render(
      <SongTitle title="Song Title #1%^:|<:{}?" artist="Artist @ Name&$!}|{<>?}:" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
