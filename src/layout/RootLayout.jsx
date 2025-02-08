import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Header Section */}
      <div className="h-14 w-full">
        <Header />
      </div>

      {/* Outlet (Scrollable Content) */}
      <div className="flex-1 w-full overflow-y-auto scrollbar-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;