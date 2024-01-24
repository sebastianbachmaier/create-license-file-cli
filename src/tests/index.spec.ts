import { assert, describe, it } from 'vitest';
import { main } from 'src/index'

describe('Index tests', () => {
  it('main should return 0', () => {
    const result = main();;
    assert.equal(result, 0);
  });
});
