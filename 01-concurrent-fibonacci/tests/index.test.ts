import { computeCount, concurrentMemoFibonacci } from "../src/index";

jest.useFakeTimers();

describe("concurrentMemoFibonacci", () => {
  // reset before each test
  beforeEach(() => {
    computeCount.count = 0;
  });

  it("computes fibonacci numbers concurrently without duplication", async () => {
    // using computeCount instead of setTimeout for faster performance
    // const spy = jest.spyOn(global, "setTimeout");

    const p1 = concurrentMemoFibonacci(10);
    const p2 = concurrentMemoFibonacci(10);
    const p3 = concurrentMemoFibonacci(9);

    // Advance timers to trigger all setTimeout callbacks
    jest.runAllTimers();

    const [r1, r2, r3] = await Promise.all([p1, p2, p3]);
    expect(r1).toBe(55);
    expect(r1).toBe(r2);
    expect(r3).toBe(34);

    expect(computeCount.count).toBe(11);
    // expect(spy).toHaveBeenCalledTimes(11); // 0..10
  });
});
