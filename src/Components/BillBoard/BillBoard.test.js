import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import TvPopular from '../../Data/TvPopular';
import registerIcons from '../../fontawesome';
import BillBoard from './BillBoard';

registerIcons();

const { results: tvPopular } = TvPopular;

describe('should render rates with stars', () => {
  const createArray = (num) => {
    const rateArray = [];
    for (let i = 0; i < num; i++) {
      rateArray.push(`${i}`);
    }

    return rateArray;
  };
  it('[array with length 1 ].map() to equal [@]', () => {
    const array = createArray(1);
    expect(array.map((e) => e).length).toBe(1);
  });

  it('[array with length @ ].map() to equal [@]', () => {
    const array = createArray(2);
    expect(array.map((e) => e).length).toBe(2);
  });

  it('should render solid stars', () => {
    render(<BillBoard billBoard={tvPopular[0]} />);
    const solidStars = screen.getAllByTitle('solidStar');
    // <FontAwesomeIcon icon={['fas', 'star']} />;
    expect(solidStars.length).toBe(4);
  });

  it('should render Empty stars', () => {
    render(<BillBoard billBoard={tvPopular[0]} />);
    const solidStars = screen.getAllByTitle('emptyStar');
    // <FontAwesomeIcon icon={['fas', 'star']} />;
    expect(solidStars.length).toBe(1);
  });
});
