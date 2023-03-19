import React from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

interface Props {
  options?: IntersectionOptions;
}
const InterSection = ({ options }: Props) => {
  const { ref, inView } = useInView(options);
  return (
    <div ref={ref} data-testid="wrapper">
      {inView.toString()}
    </div>
  );
};

export default InterSection;
