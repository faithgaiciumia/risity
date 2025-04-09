import EmailSignIn from "@/app/ui/Login/EmailSignIn";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function EmailLogin({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const session = await auth();
  if (session?.user) {
    redirect((await searchParams).callbackUrl || "/");
  }
  return (
    <div>
      <EmailSignIn />
    </div>
  );
}
