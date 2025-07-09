const cacheMap = new Map<number, Promise<number>>();

export const computeCount = { count: 0 };

export function concurrentMemoFibonacci(n: number): Promise<number> {
  if (n < 0) {
    // don't allow negative numbers
    return Promise.reject(new Error("Fib number must be 0 or higher"));
  }

  if (n <= 1) {
    // handle 0 and 1 so the calculation doesn't produce negative numbers
    if (!cacheMap.has(n)) {
      computeCount.count++;
      cacheMap.set(n, Promise.resolve(n));
    }
  }

  // check if result is in cache, if so then use it
  const cachedResult = cacheMap.get(n);
  if (cachedResult !== undefined) {
    return cachedResult;
  }

  computeCount.count++;

  const resultPromise = (async () => {
    const a = await concurrentMemoFibonacci(n - 1);
    const b = await concurrentMemoFibonacci(n - 2);
    const result = a + b;
    return result;
  })();

  // add to cache after calculation
  cacheMap.set(n, resultPromise);

  return resultPromise;
}
