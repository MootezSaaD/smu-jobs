import { createStore } from 'redux';
import reducer from './jobs';

export default function configureStore() {
  const store = createStore(reducer);
  return store;
}
