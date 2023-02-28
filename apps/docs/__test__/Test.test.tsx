import Home from "../pages";
import { render } from "@testing-library/react";

describe("<Home/>", () => {
  it("render", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Home")).toBeInTheDocument();
  });
});
