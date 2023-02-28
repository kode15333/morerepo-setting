import { useEffect, useState } from "react";

const Effect = () => {
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    console.log("isChanged", isChanged);
  }, [isChanged]);

  return (
    <div>
      <button onClick={() => setIsChanged(!isChanged)}>Click Me</button>
    </div>
  );
};

export default Effect;
