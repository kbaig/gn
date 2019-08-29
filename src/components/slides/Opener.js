import React from 'react';

import { Heading, Slide, Text } from 'spectacle';

export default () => (
  <Slide transition={['zoom']} bgColor='primary'>
    <Heading size={1} fit caps textColor='secondary'>
      What makes a business investable?
    </Heading>
    <Text
      margin='30px 0 0'
      textColor='tertiary'
      textFont='secondary'
      textSize='2'
      fit
      bold
    >
      a guide for junior associates
    </Text>
  </Slide>
);
