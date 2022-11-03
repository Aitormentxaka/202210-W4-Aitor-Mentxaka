import { strictEquals } from './sample.js';

// eslint-disable-next-line no-console

strictEquals(1, 1);
strictEquals(NaN, NaN);

strictEquals(0, -0);
strictEquals(-0, 0);
strictEquals(1, '1');
strictEquals(true, false);
strictEquals(false, false);
strictEquals('water', 'oil');
