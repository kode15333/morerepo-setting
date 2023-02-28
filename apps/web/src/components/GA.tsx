import { useRouter } from "next/router";
import { useEffect } from "react";
import { pageview } from "@/utils/ga";

const Ga = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);
  return <div>GA</div>;
};

export default Ga;
