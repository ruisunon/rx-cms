import { sharedLogging } from './shared-logging';

describe('sharedLogging', () => {
  it('should work', () => {
    expect(sharedLogging()).toEqual('shared-logging');
  });
});
