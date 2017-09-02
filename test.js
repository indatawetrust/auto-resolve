import test from 'ava';
import autoResolve from './index';

test('test', async t => {
  
  t.deepEqual([5,4], await autoResolve([() => 5, Promise.resolve(4)]));
    
  t.is(6, await autoResolve(() => 6));

})
