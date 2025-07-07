import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footerContent?: React.ReactNode;
}

export function AuthCard({ children, title, description, footerContent }: AuthCardProps) {
  return (
    <div className="w-full max-w-md">
       <Card className="shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        {footerContent && (
          <CardFooter>
            <div className="w-full">
              {footerContent}
            </div>
          </CardFooter>
        )}
       </Card>
    </div>
  );
}
