Run `pnpm install && pnpm vitest repro.test.ts`

Observe:

```bash
 FAIL  repro.test.ts > repro: non-Error + toThrow(string) crashes
TypeError: Cannot read properties of undefined (reading 'indexOf')
 ❯ repro.test.ts:14:35
     12| test('repro: non-Error + toThrow(string) crashes',…
     13|   // TypeError: Cannot read properties of undefine…
     14|   await expect(Promise.reject({})).rejects.toThrow(
       |                                   ^
     15|     'missing client credentials .SecretString',
     16|   );
```
