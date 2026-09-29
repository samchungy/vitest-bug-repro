import { expect, test } from 'vitest';
// Vitest 5.0.2: toThrow(string) delegates to Chai compatibleMessage,
// which does thrown.message.indexOf(...) with no guard.
test('control: real Error + toThrow(string) works', async () => {
  await expect(
    Promise.reject(new Error('missing client credentials .SecretString')),
  ).rejects.toThrow('missing client credentials .SecretString');
});
test('control: non-Error + toThrow(constructor) works', async () => {
  await expect(Promise.reject({})).rejects.toBeInstanceOf(Object);
});
test('repro: non-Error + toThrow(string) crashes', async () => {
  // TypeError: Cannot read properties of undefined (reading 'indexOf')
  await expect(Promise.reject({})).rejects.toThrow(
    'missing client credentials .SecretString',
  );
});
