import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { MessageCircle } from "lucide-react";
import { ChatInterface } from "./ChatInterface";

export function Chatbot() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-8 w-8" />
          <span className="sr-only">Open Chatbot</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0">
        <SheetHeader className="p-6 pb-2">
          <SheetTitle className="font-headline text-2xl">Lodgewell Assistant</SheetTitle>
          <SheetDescription>
            Ask me anything about our hotel, services, or local recommendations!
          </SheetDescription>
        </SheetHeader>
        <ChatInterface />
      </SheetContent>
    </Sheet>
  );
}
