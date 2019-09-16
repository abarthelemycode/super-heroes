import { getLangStorage } from '@/store/locale/index';

describe('localeModule/index', () => {
  it('getLangStorage', () => {
    const result = getLangStorage();
    expect(result).toEqual('en');
  });
});
