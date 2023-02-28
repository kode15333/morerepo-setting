import GA from "@/components/GA";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import { pageview } from "@/utils/ga";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("<GA/>", () => {
  it("should render", () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
    }));
    const { getByText } = render(<GA />);
    const target = getByText("GA");

    expect(target).toBeInTheDocument();
  });

  it("routerChangeComplete event Fire", () => {
    const on = jest.fn();
    const off = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      events: {
        on,
        off,
      },
    }));
    const { rerender } = render(<GA />);

    expect(on).toHaveBeenCalledWith("routeChangeComplete", pageview);

    rerender(<GA />);

    expect(off).toHaveBeenCalledWith("routeChangeComplete", pageview);
    expect(on).toHaveBeenCalledWith("routeChangeComplete", pageview);
  });
});
