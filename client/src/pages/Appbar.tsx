import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Appbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isAuthPage =
    location.pathname === "/signup" || location.pathname === "/login";

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between px-8 py-3 items-center bg-blue-800 text-white h-16">
        <div className=" flex gap-6 items-center">
          <span className="cursor-pointer">
            <Menu strokeWidth={1.5} />{" "}
          </span>
          <p className="text-xl cursor-pointer" onClick={() => navigate("/")}>
            LearnAcademy
          </p>
        </div>
        {!isAuthPage && (
          <div className="flex space-x-4">
            {isLoggedIn ? (
              <Button className="w-20 cursor-pointer" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button
                  className="w-20 cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </Button>
                <Button
                  className="w-20 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
