import Link from "next/link";
import Image from "next/image";

import TikTokIcon from "@/assets/social/tiktok.svg";
import YoutubeIcon from "@/assets/social/youtube.svg";
import InstagramIcon from "@/assets/social/instagram.svg";
import PinterestIcon from "@/assets/social/pinterest.svg";

interface SocialLink {
    alt: string;
    icon: string;
    href: string;
}

const socialLinks: SocialLink[] = [
    {
        alt: "Instagram",
        icon: InstagramIcon,
        href: "https://www.instagram.com/i.festei/",
    },
    {
        alt: "Pinterest",
        icon: PinterestIcon,
        href: "https://br.pinterest.com/ifeste1/",
    },
    {
        alt: "TikTok",
        icon: TikTokIcon,
        href: "https://www.tiktok.com/@ifestei",
    },
    {
        alt: "Youtube",
        icon: YoutubeIcon,
        href: "https://www.youtube.com/@i.festei",
    },
];

export const Social = () => {
    return (
        <div className="flex flex-shrink-0 flex-col items-center gap-10 xl:gap-5">
            <span className="text-xl font-normal text-white">Acompanhe a gente:</span>

            <div className="grid grid-cols-2 items-center gap-10">
                {socialLinks.map((link, index) => (
                    <Link key={index} href={link.href} target="_blank">
                        <Image
                            src={link.icon}
                            alt={link.alt}
                            loading="lazy"
                            width={54}
                            className="h-auto transition-all duration-300 ease-in-out hover:-translate-y-1"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};
