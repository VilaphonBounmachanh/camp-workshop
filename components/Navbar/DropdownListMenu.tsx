import { SquareMenu } from "lucide-react";

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
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLinks from "./SignOutLinks";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <SquareMenu />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {links.map((item, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
        <SignOutLinks />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
