import { render } from "@testing-library/react";
import {
  intersectionMockInstance,
  mockAllIsIntersecting,
  mockIsIntersecting,
} from "react-intersection-observer/test-utils";
import InterSection from "@/components/InterSection";

describe("InterSection", () => {
  it("컴포넌트 Intersection 상태", () => {
    const { getByText } = render(<InterSection />);

    mockAllIsIntersecting(true);

    expect(getByText("true")).toBeInTheDocument();
  });

  it("threshold 값에 따라 InView 상태 업데이트", () => {
    const { getByText } = render(<InterSection options={{ threshold: 0.3 }} />);

    mockAllIsIntersecting(0.1);

    expect(getByText("false")).toBeInTheDocument();

    mockAllIsIntersecting(0.3);

    expect(getByText("true")).toBeInTheDocument();
  });

  it("wrapper Intersection 강제 지정", () => {
    const { getByTestId, getByText } = render(<InterSection />);
    const wrapper = getByTestId("wrapper");

    mockIsIntersecting(wrapper, 0.5);

    expect(getByText("true")).toBeInTheDocument();
  });

  it("Observe 호출 여부", () => {
    const { getByTestId } = render(<InterSection />);
    const wrapper = getByTestId("wrapper");

    const instance = intersectionMockInstance(wrapper);

    expect(instance.observe).toHaveBeenCalledWith(wrapper);
  });
});
