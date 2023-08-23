import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { Button } from './Button';

describe('Button', () => {
  baselineComponent((props) => <Button {...props}>Button</Button>);
});
