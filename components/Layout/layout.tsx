import Header from "../Header/header";
import dynamic from "next/dynamic";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const Layout = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const DynamicFooter = dynamic(
    () => import("@/components/Footer/footer.jsx"),
    {
      ssr: false,
    }
  );
  return (
    <main>
      <Header />
      {props.children}
      <DynamicFooter />
    </main>
  );
};

export default Layout;
