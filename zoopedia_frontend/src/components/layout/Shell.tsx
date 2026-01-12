import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export function Shell({ variant }: { variant: "centered" | "game" }) {
  return (
    <div className="appBg">
      <Navbar />

      {variant === "centered" ? (
        <main className="shellCentered">
          <div className="phoneFrame">
            <Outlet />
          </div>
        </main>
      ) : (
        <main className="shellGame">
          <div className="phoneFrame gameFrame">
            <Outlet />
          </div>
        </main>
      )}
    </div>
  );
}
