import UidManager from '@/uid-manager';

describe('UidManager', () => {
  let uidManager;
  beforeEach(() => {
    uidManager = new UidManager();
  });

  it('sets number is 0', () => {
    expect(uidManager.uid).toBe(0);
  });

  it('runs increment', () => {
    expect.assertions(2);

    expect(uidManager.uid).toBe(0);
    uidManager.increment();
    expect(uidManager.uid).toBe(1);
  });

  it('runs reset', () => {
    expect.assertions(3);

    expect(uidManager.uid).toBe(0);
    uidManager.increment();
    expect(uidManager.uid).toBe(1);
    uidManager.reset();
    expect(uidManager.uid).toBe(0);
  });

  it('runs set name', () => {
    uidManager.name = 'testUid';
    expect(uidManager.name).toBe('testUid');
  });
});
