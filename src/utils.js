import pathToRegexp from 'path-to-regexp';
import { history } from './Root';


export function pushNav(path, keys = {}, state) {
  history.push(pathToRegexp.compile(path)(keys), state);
}

export function replaceNav(path, keys, state) {
  history.replace(pathToRegexp.compile(path)(keys), state);
}