import React from 'react';
import { Slide, Heading } from 'spectacle';

export default ({ children, ...rest }) => (
  <Slide transition={['zoom']} bgColor='primary' {...rest}>
    <Heading>{children}</Heading>
  </Slide>
);
