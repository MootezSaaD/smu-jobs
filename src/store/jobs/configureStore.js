import { configureStore } from '@reduxjs/toolkit';
import reducer from './jobs';

export default function () {
  return configureStore({ reducer });
}
