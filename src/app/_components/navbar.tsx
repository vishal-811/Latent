import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { auth } from "~/server/auth";
import { signout } from "./signout";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="container mx-auto flex items-center justify-between border-b border-zinc-200 p-6">
      {/* Logo */}
      <div className="flex justify-between gap-x-10">
        <div className="text-bold text-xl font-bold text-blue-600">
          <Link href={"/"}>Latent</Link>
        </div>

        {/* Shows */}
        <div>
          <Link href={"/shows"}>Shows</Link>
        </div>

        {/* Show can only be created by admin */}
        {/* Create */}
        <div>
          <Link href={"/create"}>Create</Link>
        </div>
      </div>

      {/* User login  */}
      {/* Avatar */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session?.user.image ?? ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem onClick={signout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
