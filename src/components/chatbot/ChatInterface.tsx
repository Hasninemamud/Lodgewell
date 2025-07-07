'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getAiResponse } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { SendHorizonal, Hotel, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'assistant', content: "Hello! How can I help you with your stay at Lodgewell?" }
  ]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const newMessages: Message[] = [
      ...messages,
      { id: Date.now(), role: 'user', content: input.trim() },
    ];
    setMessages(newMessages);
    const userQuery = input.trim();
    setInput('');

    startTransition(async () => {
      const response = await getAiResponse({ query: userQuery });
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now() + 1, role: 'assistant', content: response },
      ]);
    });
  };
  
  return (
    <div className="flex-1 flex flex-col h-full">
      <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-4',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'assistant' && (
                <Avatar className="h-8 w-8 border-2 border-primary">
                   <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-[75%] rounded-lg p-3 text-sm shadow-sm',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                )}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === 'user' && (
                 <Avatar className="h-8 w-8 border-2 border-muted-foreground">
                   <AvatarFallback>You</AvatarFallback>
                 </Avatar>
              )}
            </div>
          ))}
           {isPending && (
            <div className="flex items-start gap-4 justify-start">
              <Avatar className="h-8 w-8 border-2 border-primary">
                 <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-3 text-sm shadow-sm">
                <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-foreground rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="p-4 border-t bg-background">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 resize-none"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as any);
              }
            }}
          />
          <Button type="submit" disabled={isPending || !input.trim()} size="icon">
            <SendHorizonal className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
