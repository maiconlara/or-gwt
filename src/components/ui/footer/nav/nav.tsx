import Link from "next/link";

type Link = {
    label: string;
    href: string;
};

export interface NavProps {
    title: string;
    links: Link[];
}

export const Nav = ({ links, title }: NavProps) => {
    return (
        <div className="flex flex-col items-start gap-2 text-base font-abel text-white">
            <span className="font-semibold">{title}</span>

            <div className="flex flex-col items-start gap-4">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="hover:text-custom-gray-400 font-normal transition-all duration-300 ease-in-out"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};
