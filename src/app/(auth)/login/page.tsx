import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary p-4">
      <AuthCard
        title="Welcome Back"
        description="Sign in to your Lodgewell account"
        footerContent={
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-primary hover:underline">
              Register here
            </Link>
          </p>
        }
      >
        <LoginForm />
      </AuthCard>
    </div>
  );
}
