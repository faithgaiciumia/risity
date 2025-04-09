import Link from "next/link";
import { poppins, workSans } from "../ui/fonts";
import TopBar from "../ui/Login/TopBar";
import EmailSignIn from "../ui/Login/EmailSignIn";
import GoogleSignIn from "../ui/Login/GoogleSignIn";
import FacebookSignIn from "../ui/Login/FacebookSignin";

export default function Login() {
  return (
    <>
      {/* Login Buttons */}
      <div className="w-full space-y-3">
        <EmailSignIn />
        <GoogleSignIn />
        <FacebookSignIn />
      </div>
    </>
  );
}
