import { Theme } from "@/components";
import type { INavbarNavigation } from "@/types";
import { navBarPageMocks } from "@/__mocks__";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

const _Navbar: FC = () => {
    const { pathname } = useRouter();

    return (
        <nav className='containers navbar'>
            <Link href={navBarPageMocks.main.link}>
                <a className='navbar__l'>
                    <h1>{navBarPageMocks.main.title}</h1>
                </a>
            </Link>
            <div className='navbar__b'>
                {navBarPageMocks.navigation.map(({ id, title, path }: INavbarNavigation) => (
                    <Link key={id} href={path}>
                        <a className={`navbar__link ${pathname === path ? "navbar__a" : ""}`}>{title}</a>
                    </Link>
                ))}
                <Link href={navBarPageMocks.other.link}>
                    <a target='_blank' className='navbar__p'>
                        {React.createElement(navBarPageMocks.other.icon, {})}
                        {navBarPageMocks.other.title}
                    </a>
                </Link>
            </div>
            <Theme />
        </nav>
    );
};

export const Navbar = React.memo(_Navbar);
