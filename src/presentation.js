import React from 'react';
import { Deck } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import TitleSlide from './components/partials/TitleSlide';
import ContentSlide from './components/partials/ContentSlide';

import Opener from './components/slides/Opener';

import productMarketFit from './data/productMarketFit';
import businessModel from './data/businessModel';
import team from './data/team';
import conclusion from './data/conclusion';

require('normalize.css');

const theme = createTheme(
  {
    primary: '#fefaef',
    secondary: '#84bd5e',
    tertiary: '#343e55',
    quaternary: '#546287'
  },
  {
    primary: { name: 'Domine', googleFont: true },
    secondary: { name: 'Source Sans Pro', googleFont: true }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Opener />

        <TitleSlide>Product-Market Fit</TitleSlide>
        {productMarketFit.map((props, i) => (
          <ContentSlide key={i} {...props} />
        ))}

        <TitleSlide>Business Model</TitleSlide>
        {businessModel.map((props, i) => (
          <ContentSlide key={i} {...props} />
        ))}

        <TitleSlide>Team</TitleSlide>
        {team.map((props, i) => (
          <ContentSlide key={i} {...props} />
        ))}

        <TitleSlide>Bottom Line</TitleSlide>
        {conclusion.map((props, i) => (
          <ContentSlide key={i} {...props} />
        ))}
      </Deck>
    );
  }
}
