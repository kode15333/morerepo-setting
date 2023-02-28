import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "../pages";

describe("MSW Test", function () {
  it("should render", async function () {
    render(<Home />);
    const button = screen.getByRole("button");
    expect(screen.findByText("False")).toBeTruthy();
    fireEvent.click(button);

    await waitFor(() => expect(screen.findByText("True")).toBeTruthy());
  });
});
