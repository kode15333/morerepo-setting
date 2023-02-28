import NextRouteCall from "@/components/NextRouteCall";
import { fireEvent, render } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
describe("<NextRouteCall/>", () => {
  it("<Link/>", () => {
    const { getByRole } = render(<NextRouteCall />);

    const link = getByRole("link");

    expect(link).toHaveAttribute("href", "/docs");
  });

  it("router.push", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));

    const { getByRole } = render(<NextRouteCall />);

    const button = getByRole("button");

    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith("/docs");
  });
});
