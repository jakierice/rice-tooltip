import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../index';
// import { action } from '@storybook/addon-actions';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Tooltip', module)
  .add('with text', () => <Tooltip />);
