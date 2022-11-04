import { Animation, Navbar } from "@/components";
import React, { FC } from "react";

const _Header: FC = () => (
    <header>
        <Animation>
            <Navbar />
        </Animation>
    </header>
);

export const Header = React.memo(_Header);
