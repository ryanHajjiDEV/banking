"use client";

import React from "react";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast"; // Check this path

export const ToastButton = () => {
  const { toast } = useToast();

  return (
    <Button
      className="view-all-btn mt-5 mb-[-45px]"
      onClick={() => {
        toast({
          variant: 'destructive',
          title: "Uh oh! Something went wrong",
          description: "There was a problem with your request.",
        });
      }}
    >
      Show Toast
    </Button>
  );
};

export default ToastButton;

// TODO: REMOVE THIS
