import { Version } from './version';
import { detectIOS } from '@vkontakte/vkjs/lib/IOSDetections';

export enum System {
  IOS = 'ios',
  UNKNOWN = '',
}

export interface BrowserInfo {
  userAgent: string;
  system: System;
  systemVersion: Version | null;
}

const memoized: { [index: string]: BrowserInfo } = {};

export function computeBrowserInfo(userAgent = ''): BrowserInfo {
  if (memoized[userAgent]) {
    return memoized[userAgent];
  }

  let systemVersion: Version | null = null;
  let system = System.UNKNOWN;

  const { isIOS, iosMajor, iosMinor } = detectIOS(userAgent);

  if (isIOS) {
    system = System.IOS;
    systemVersion = {
      major: iosMajor,
      minor: iosMinor,
    };
  }

  const browserInfo: BrowserInfo = {
    userAgent,
    system,
    systemVersion,
  };

  memoized[userAgent] = browserInfo;

  return browserInfo;
}
