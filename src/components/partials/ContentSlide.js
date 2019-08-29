import React from 'react';
import { Slide, Heading, Layout, Fill, Text, Image } from 'spectacle';

export default ({ title, bullets = [] }) => (
  <Slide transition={['zoom']} bgColor='primary'>
    <Heading size={2} fit textColor='tertiary' margin='0 0 50px 0'>
      {title}
    </Heading>
    {bullets && (
      <Layout>
        {bullets.map(({ image, text }, i) => (
          <Fill key={i}>
            <Text margin='0 5px'>
              {image && <Image src={image} height='300px' />}
              {text}
            </Text>
          </Fill>
        ))}
      </Layout>
    )}
  </Slide>
);
