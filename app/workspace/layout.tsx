import MobileHead from "@/components/MobileHead";
import MobileNav from "@/components/MobileNav";

type Props = LayoutProps<"/workspace">;

const Layout = ({ children }: Props) => {
  return (
    <>
      <MobileHead />
      <MobileNav />
      {children}
    </>
  );
};

export default Layout;
