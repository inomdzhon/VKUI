import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { IconExampleForFallbackBasedOnImageBaseSize } from '../../testing/icons';
import { baselineComponent, tryToGetByTestId } from '../../testing/utils';
import { Avatar, AvatarProps } from './Avatar';

const TEST_LOCATORS = {
  ROOT: 'avatar',
  BADGE: 'avatar-badge',
};

const AvatarTest = (props: AvatarProps) => <Avatar {...props} data-testid={TEST_LOCATORS.ROOT} />;

const getAvatarRootEl = () => screen.getByTestId(TEST_LOCATORS.ROOT);

describe(Avatar, () => {
  baselineComponent(Avatar);

  it('should use `initials` instead `fallbackIcon`', () => {
    const INITIALS = 'ПД';

    render(
      <AvatarTest
        initials={INITIALS}
        fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />}
      />,
    );

    const elAvatar = getAvatarRootEl();
    const fallbackIcon = tryToGetByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
      elAvatar,
    );

    expect(elAvatar).toHaveTextContent(INITIALS);
    expect(elAvatar).not.toContainElement(fallbackIcon);
  });

  it('should use `fallbackIcon` if `initials` is not provided', () => {
    render(<AvatarTest fallbackIcon={<IconExampleForFallbackBasedOnImageBaseSize />} />);

    const elAvatar = getAvatarRootEl();
    const fallbackIcon = tryToGetByTestId(
      IconExampleForFallbackBasedOnImageBaseSize.DATA_TEST_ID,
      elAvatar,
    );

    expect(elAvatar).toContainElement(fallbackIcon);
  });
});
