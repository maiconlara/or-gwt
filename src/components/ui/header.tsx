"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";



const Header = () => {
    const [headerColor, setHeaderColor] = useState("#ffffff66");

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        latest > 0 ? setHeaderColor("white") : setHeaderColor("transparent");
    });

    return (
        <div
            className="z-10 flex h-full max-h-[15px] min-h-[15px] w-full max-w-full items-center justify-between px-14 shadow transition-colors xl:px-24 2xl:px-20 3xl:px-24"
            style={{
                backgroundColor: headerColor,
            }}
        ></div>
    );
};
export default Header;
