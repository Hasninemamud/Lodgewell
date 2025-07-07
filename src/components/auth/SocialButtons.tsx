'use client';

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const GoogleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4">
        <path
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.05 1.05-2.83 2.17-4.64 2.17-3.57 0-6.5-2.93-6.5-6.5s2.93-6.5 6.5-6.5c1.98 0 3.33.83 4.1 1.6l2.33-2.33C17.69 2.45 15.48 1.5 12.48 1.5c-4.97 0-9 4.03-9 9s4.03 9 9 9c5.22 0 8.5-3.67 8.5-8.75 0-.5-.05-.92-.12-1.33h-8.38z"
        fill="currentColor"
        ></path>
    </svg>
);


export function SocialButtons() {
    const { toast } = useToast();

    const onGoogleClick = () => {
        // This is where you would handle Google Sign-In
        toast({
            title: "Google Sign-In (UI Only)",
            description: "Backend functionality not implemented.",
        });
    }

    return (
        <div className="w-full">
            <Button variant="outline" className="w-full" onClick={onGoogleClick}>
                <GoogleIcon />
                <span className="ml-2">Google</span>
            </Button>
        </div>
    );
}
