
import React from 'react';

import Carousel from './Carousel';
import Slide from './Slide';

const Swipper = () => {

  return (
    <div>
      <Carousel>
        <Slide />
        <Slide />
        <Slide />
      </Carousel>
    </div>
  );
};

export default Swipper;