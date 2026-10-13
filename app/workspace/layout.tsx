import MobileNav from "@/components/MobileNav";

type Props = LayoutProps<"/workspace">;

const Layout = ({ children }: Props) => {
  return (
    <>
      <MobileNav />
      {children}
    </>
  );
};

export default Layout;
