import { render } from "@testing-library/react";
import EmotionStyle from "@/components/EmotionStyle";

describe("render", function () {
  it("s", function () {
    const { getByText } = render(<EmotionStyle />);

    expect(getByText("Hello World")).toHaveStyle("background-color: red;");
  });
});
