import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";


export function AppMenu() {
  return (
    <>
      <header>
          <Navigation />
      </header>
      <Outlet />
    </>
  );
}