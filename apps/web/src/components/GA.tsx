import { useRouter } from "next/router";
import { useEffect } from "react";


const Ga = () => {
  const router = useRouter();
  useEffect(() => {
  }, [router.events]);
  return <div>GA</div>;
};

export default Ga;
