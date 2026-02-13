// --- Icon import ---
// SquareMenu is a hamburger-menu icon from Lucide (like Icons.menu in Flutter)
import { SquareMenu } from "lucide-react";

// --- UI component imports ---
// These are pre-built dropdown widgets from shadcn/ui (similar to PopupMenuButton in Flutter)
// DropdownMenu       = the overall widget (like PopupMenuButton)
// DropdownMenuTrigger = the button that opens the menu (like the child of PopupMenuButton)
// DropdownMenuContent = the popup list itself (like the list of PopupMenuItems)
// DropdownMenuItem    = each clickable row (like PopupMenuItem)
// DropdownMenuLabel   = a non-clickable header text
// DropdownMenuSeparator = a divider line (like Divider() in Flutter)
// DropdownMenuGroup   = groups items together
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";

// Link = Next.js navigation (like Navigator.push or GoRouter in Flutter)
import Link from "next/link";

// links = an array of { href, label } objects defining menu items
import { links } from "@/utils/links";
import SignOutLinks from "./SignOutLinks";

// Clerk auth components — they conditionally show/hide children based on login state
// SignedIn  = only renders children when user IS logged in  (like a StreamBuilder checking auth)
// SignedOut = only renders children when user is NOT logged in
// SignInButton / SignUpButton = wrappers that open Clerk's login/signup flow on tap
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

// This is a functional component (similar to a StatelessWidget in Flutter)
const DropdownListMenu = () => {
  return (
    // DropdownMenu = the root widget that manages open/close state internally
    <DropdownMenu>
      {/* Trigger button — tapping this opens the dropdown (like GestureDetector + PopupMenuButton) */}
      {/* "asChild" means: don't wrap in an extra element, use Button directly as the trigger */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <SquareMenu /> {/* hamburger icon */}
          <UserIcon />  {/* user avatar/icon */}
        </Button>
      </DropdownMenuTrigger>

      {/* The popup content that appears when the trigger is tapped */}
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator /> {/* horizontal line divider */}

          {/* --- GUEST (not logged in) --- */}
          {/* SignedOut only renders its children when there is NO authenticated user */}
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton>
                <button>Login</button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignUpButton>
                <button>Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>

          {/* --- AUTHENTICATED (logged in) --- */}
          {/* SignedIn only renders its children when the user IS authenticated */}
          <SignedIn>
            {/* Loop through the links array and create a menu item for each one */}
            {/* This is like ListView.builder in Flutter */}
            {links.map((item, index) => {
              return (
                <DropdownMenuItem key={index}>
                  {/* Link navigates to item.href on click (like Navigator.pushNamed) */}
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutLinks /> {/* logout button */}
            </DropdownMenuItem>
          </SignedIn>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// "export default" makes this component importable by other files
// In Flutter terms, this is like making the widget public so other files can use it
export default DropdownListMenu;
