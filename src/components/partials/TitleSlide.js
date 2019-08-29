import React from 'react';
import { Slide, Heading } from 'spectacle';

export default ({ children, ...rest }) => (
  <Slide transition={['zoom']} bgColor='primary' {...rest}>
    <Heading textColor='secondary'>{children}</Heading>
  </Slide>
);
