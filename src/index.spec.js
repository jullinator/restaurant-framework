import {assert} from 'chai';

import * as Package from './index';

describe(
   'Package Export', () => it(
      'should have exports', () => assert.ok(Package)
   )
);
