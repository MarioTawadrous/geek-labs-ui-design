// import Container from "../container/container";
import Header from "../header/header";
// import Navigation from "../navigation/navigation";
import Tabs from "../tabs/tabs";

function Layout() {
  return (
    <div className="w-screen m-w-screen h-screen max-h-screen overflow-hidden bg-[#181818]">
      <Header />
      <Tabs />
    </div>
  );
}

export default Layout;
