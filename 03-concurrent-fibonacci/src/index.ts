const results = new Map<number, number>();
const inFlight = new Map<number, Promise<number>>();

export function concurrentMemoFibonacci(n: number): Promise<number> {
  // TODO: implement a memoized and concurrency-safe Fibonacci function
  return Promise.resolve(0);
}
