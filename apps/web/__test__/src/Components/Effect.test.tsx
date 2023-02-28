import { fireEvent, render } from "@testing-library/react";
import Effect from "@/components/Effect";

console.log = jest.fn();

describe("<Effect/>", () => {
  it("should render", async () => {
    const { getByText } = render(<Effect />);

    const button = getByText("Click Me");
    fireEvent.click(button);

    expect(console.log).toHaveBeenCalledWith("isChanged", true);
  });

  it("rerender", () => {
    const { rerender } = render(<Effect />);

    rerender(<Effect />);

    expect(console.log).toHaveBeenCalledWith("isChanged", false);
  });
});
