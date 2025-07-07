import { AuthCard } from "@/components/auth/AuthCard";
import { RegisterForm } from "@/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary p-4">
      <AuthCard
        title="Create an Account"
        description="Join us at Lodgewell for an unforgettable experience"
        footerContent={
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Login here
            </Link>
          </p>
        }
      >
        <RegisterForm />
      </AuthCard>
    </div>
  );
}
