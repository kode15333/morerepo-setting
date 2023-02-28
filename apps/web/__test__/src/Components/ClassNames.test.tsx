import ClassNames from "@/components/ClassNames";
import { fireEvent, render } from "@testing-library/react";

describe("<ClassNames/>", () => {
  it("should render", async () => {
    const { getByText } = render(<ClassNames />);
    const button = getByText("Click Me");

    const target = getByText("Change Color");

    expect(target).not.toHaveClass("isActive");

    fireEvent.click(button);

    expect(target).toHaveClass("isActive");
    expect(target).toHaveStyle("color: red;");
  });
});
