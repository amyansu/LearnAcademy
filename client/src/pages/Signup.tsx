import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLButtonElement>(null);
  const signupButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLButtonElement>,
    nextRef: React.RefObject<HTMLElement | null>
  ) => {
    if (e.key === "Enter" && nextRef.current) {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  return (
    <div className="flex justify-center items-center h-150">
      <Card className="w-[450px] h-[450px] border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Signup A New Account</CardTitle>
        </CardHeader>
        <CardContent className="grid">
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-6">
              <div className="mt-4">
                <Input
                  ref={emailRef}
                  className="h-11"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                />
              </div>
              <div className="relative">
                <Input
                  ref={passwordRef}
                  className="h-11 pr-10"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, roleRef)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </button>
              </div>
              <div>
                <Select>
                  <SelectTrigger
                    id="role"
                    className="w-full"
                    style={{ height: "44px" }}
                    ref={roleRef}
                    onKeyDown={(e) => handleKeyDown(e, signupButtonRef)}
                  >
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="candidate">Candidate</SelectItem>
                    <SelectItem value="recruiter">Recruiter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end w-full mt-6">
              <Button
                ref={signupButtonRef}
                className="w-20 h-10 cursor-pointer"
                type="submit"
              >
                Signup
              </Button>
            </div>
          </form>
          <div className="mt-10 text-center text-base ">
            Don&apos;t have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 underline underline-offset-4 hover:text-blue-600"
            >
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
