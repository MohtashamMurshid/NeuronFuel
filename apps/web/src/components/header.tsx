"use client";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { Mountain } from "lucide-react";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-center border-b mb-4">
      <Link href="/" className="flex items-center justify-center">
        <Mountain className="h-6 w-6" />
        <span className="sr-only">Turbo Learn</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {links.map((link) => (
          <Link
            key={link.to}
            href={link.to}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4 ml-auto">
        <ModeToggle />
        <Authenticated>
          <UserButton />
        </Authenticated>
        <Unauthenticated>
          <SignInButton />
          <SignUpButton />
        </Unauthenticated>
      </div>
    </header>
  );
}
