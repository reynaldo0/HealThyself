"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./Dialog";
import { Button } from "./Button";
import { Input } from "./Input";
import { ScrollArea } from "./ScrollArea";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { Send } from "lucide-react";
import React from "react";

export default function ChatBot({ buttonProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", content: "Halo! HealBot disini, Apakah ada yang bisa kami bantu?" },
    {
      sender: "user",
      content:
        "Halo! Saya ingin menanyakan beberapa pertanyaan mengenai kesehatan Fisik",
    },
    { sender: "bot", content: "Baik, jelaskan terkait dengan kesehatan anda" },
    { sender: "user", content: "..." },
  ]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", content: input }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            content:
              "Thank you for your question. I'm looking into that for you. Is there anything else you'd like to know?",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      <Button
        className={`fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 p-0 ${buttonProps.className} text-white shadow-lg`}
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[400px] p-5 mt-10 overflow-hidden bg-white z-[99999999]">
          <DialogHeader className="p-4 border-b">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>HB</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle>HealBot</DialogTitle>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="h-[350px] p-4 bg-white" ref={scrollAreaRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex space-x-2"
            >
              <Input
                className="flex-grow"
                placeholder="Tuliskan Pesan..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className="bg-blue-500 hover:bg-blue-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <div className="p-2 border-t text-center text-xs text-gray-500">
          Didukung oleh HealBot
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
