import { push, replace, go, goBack, goForward, locationDidChange } from '../src/actions';
import { Location } from 'history';

function createLocation(path: string = ''): Location {
  return {
    pathname: path,
    hash: '',
    key: '0uicnx',
    search: '',
    state: null,
  };
}

describe('actions', () => {

  describe('push', () => {
    it('create an push action', () => {
      expect(push('/home')).toMatchSnapshot();
      expect(push({ pathname: '/home', search: 'test' })).toMatchSnapshot();
    });
  });

  describe('replace', () => {
    it('create an replace action', () => {
      expect(replace('/home')).toMatchSnapshot();
      expect(replace({ pathname: '/home', search: 'test' })).toMatchSnapshot();
    });
  });

  describe('go', () => {
    it('create an go action', () => {
      expect(go(3)).toMatchSnapshot();
    });
  });

  describe('goBack', () => {
    it('create an goBack action', () => {
      expect(goBack()).toMatchSnapshot();
    });
  });

  describe('goForward', () => {
    it('create an goForward action', () => {
      expect(goForward()).toMatchSnapshot();
    });
  });

  describe('locationDidChange', () => {
    it('create an locationDidChange action', () => {
      expect(locationDidChange(createLocation('/home'))).toMatchSnapshot();
    });
  });

});
