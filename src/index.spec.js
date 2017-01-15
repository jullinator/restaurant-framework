import {assert, expect} from 'chai';

import * as Package from './index';

describe(
   'Package Export', () => it(
      'should have exports', () => assert.ok(Package)
   )
);

describe('Decorators', function(){
   it('Should work for static', function(){
      const Decorator = Target => {
         Target.worksForStatic = true
      }
      @Decorator
      class Test {}
      expect(Test.worksForStatic).to.equal(true)
   })
} )
