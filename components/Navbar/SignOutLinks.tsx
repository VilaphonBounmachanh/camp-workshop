"use client";
import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

const SignOutLinks = () => {
  return (
    <SignOutButton redirectUrl="/">
      <Button
        className="w-full mt-2"
        onClick={() => toast("Logged out successfully")}
      >
        <LogOut />
        Logout
      </Button>
    </SignOutButton>
  );
};

export default SignOutLinks;
