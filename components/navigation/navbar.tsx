"use client";

import * as React from "react";
import Link from "next/link";
import { FaCarAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "About Us",
        href: "/",
        description: "Learn more about our company and our mission.",
    },
    {
        title: "Our Team",
        href: "/",
        description: "Meet the team behind the scenes.",
    },
    {
        title: "Reviews",
        href: "/",
        description: "Read what our customers have to say about our services and products.",
    },
];

export function Nav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Rent</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[300px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/rent"
                                        passHref
                                    >
                                        <FaCarAlt className="w-10 h-10 text-black" />
                                        <div className="mb-2 mt-4 text-lg font-medium">Rent now!</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Check out our latest offers and rent a car today!
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Link href="/" passHref>
                                <ListItem title="Status">Check your rental status!</ListItem>
                            </Link>
                            <Link href="/" passHref>
                                <ListItem title="Instructions">
                                    How to rent a car using our platform.
                                </ListItem>
                            </Link>
                            <Link href="/" passHref>
                                <ListItem title="Conditions">
                                    Check the conditions for renting a car.
                                </ListItem>
                            </Link>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] p-2 md:w-[400px] md:grid-rows-3 lg:w-[500px] ">
                            {components.map((component) => (
                                <Link key={component.title} href={component.href} passHref>
                                    <ListItem key={component.title} title={component.title}>
                                        {component.description}
                                    </ListItem>
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = "ListItem";
