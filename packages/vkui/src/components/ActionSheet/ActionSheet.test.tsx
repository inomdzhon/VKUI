import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewWidth } from '../../lib/adaptivity';
import { runAllTimers, waitForFloatingPosition } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ActionSheet, ActionSheetProps } from './ActionSheet';

describe('ActionSheet', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());
  const toggle = document.createElement('div');
  const ActionSheetMobile = (props: Partial<ActionSheetProps>) => (
    <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer={false}>
      <ActionSheet toggleRef={toggle} onClose={jest.fn()} {...props} />
    </AdaptivityProvider>
  );

  describe('mobile', () => {
    it('closes on overlay click', async () => {
      const onClose = jest.fn();
      render(<ActionSheetMobile onClose={onClose} />);
      await waitForFloatingPosition();
      runAllTimers();
      userEvent.click(document.querySelector('.vkuiPopoutWrapper__overlay') as Element);
      runAllTimers();
      expect(onClose).toBeCalledTimes(1);
      expect(onClose).toBeCalledWith({ closedBy: 'other' });
    });
  });
});
