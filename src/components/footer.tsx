import { FOOTER_LINKS } from "@/constants";
import { FooterLink, ReachChild } from "@/types";

/** footer for credits */
export default function Footer() {
    const linkButton = (link: FooterLink, key: number): ReachChild => {
        return <a key={key} href={link.url} target="_blank" rel="nofollow"
            className="bg-slate-700 hover:bg-slate-800 py-2 px-4 rounded-full text-white">{link.label}</a>;
    }

    return <div className="mt-5 bg-slate-300">
        <div className="footer py-4 flex flex-col gap-3 justify-center items-center container mx-auto">
            <p>Cristóbal Díaz Álvarez</p>

            {FOOTER_LINKS.map((link, k) => linkButton(link, k))}
        </div>
    </div>;
}
