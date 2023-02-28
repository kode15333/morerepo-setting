import { useState } from "react";
import cn from "classnames";
import styled from "@emotion/styled";

const ClassNames = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
      setIsClicked(!isClicked);
  };
  return (
    <div>
      <button onClick={handleOnClick}>Click Me</button>
      <TextLabel className={cn('foo',{ isActive: isClicked })}>
        Change Color
      </TextLabel>
    </div>
  );
};

export default ClassNames;

const TextLabel = styled.label`
  color: blue;
  &.isActive {
    color: red;
  }
`;
