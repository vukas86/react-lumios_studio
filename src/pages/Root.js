import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import ContactUs from "../components/ContactUs";

function RootLayout() {
  return (
    <>
      <MainNav />
      <Outlet />
      <ContactUs />
    </>
  );
}

export default RootLayout;
