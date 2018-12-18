import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../index';
import Dialog from '../Dialog';

storiesOf('Tooltip', module).add('with text', () => (
  <Tooltip>
    <Dialog>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
      necessitatibus, voluptate esse ad, porro quidem qui voluptatem quam
      numquam, neque maiores harum sed quis! Amet porro cum sunt repudiandae
      dolore.
    </Dialog>
  </Tooltip>
));
