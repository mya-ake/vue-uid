import Uid from '@/uid';

describe('Uid', () => {
  let uid;
  beforeEach(() => {
    uid = new Uid();
  });

  it('sets number is 0', () => {
    expect(uid.number).toBe(0);
  });

  it('runs increment', () => {
    expect.assertions(2);

    expect(uid.number).toBe(0);
    uid.increment();
    expect(uid.number).toBe(1);
  });

  it('runs reset', () => {
    expect.assertions(3);

    expect(uid.number).toBe(0);
    uid.increment();
    expect(uid.number).toBe(1);
    uid.reset();
    expect(uid.number).toBe(0);
  });
});
