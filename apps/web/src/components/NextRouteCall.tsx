import Link from "next/link";
import { useRouter } from "next/router";

const NextRouteCall = () => {
  const router = useRouter();

  const handleClickLink = () => {
    router.push("/docs");
  };

  return (
    <div>
      <Link href="/docs">go to docs</Link>
      <button onClick={handleClickLink}>Click Me</button>
    </div>
  );
};

export default NextRouteCall;
