import React from 'react';

import { Heading, Slide, Text } from 'spectacle';

export default () => (
  <Slide transition={['zoom']} bgColor='primary'>
    <Heading size={1} fit textColor='secondary'>
      What makes a business investable?
    </Heading>
    <Text margin='30px 0 0' textColor='tertiary' textSize='48px'>
      a guide for junior associates
    </Text>
  </Slide>
);
