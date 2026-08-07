import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const loginButtonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    console.log("Email:", email, "Password:", password);
  };

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
      <Card className="w-[450px] h-[400px] border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Login To LearnAcademy</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-6">
              <div className="mt-4">
                <Input
                  ref={emailRef}
                  className="h-12"
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
                  className="h-12"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, loginButtonRef)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </button>
              </div>
            </div>
            <div className="flex justify-end w-full mt-6">
              <Button
                ref={loginButtonRef}
                className="w-20 h-10 cursor-pointer"
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="grid">
          <div className="mt-10 text-center text-base">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-600 underline underline-offset-4"
            >
              Signup
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
