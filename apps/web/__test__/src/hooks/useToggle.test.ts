import { act, renderHook } from "@testing-library/react";
import useToggle from "@/hooks/useToggle";

describe("useToggle", () => {
  it("ClickEvent", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);

    // @ts-ignore
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
  });

  it("initialState", () => {
    const { result } = renderHook(useToggle, { initialProps: true });
    expect(result.current[0]).toBe(true);
  });
});
