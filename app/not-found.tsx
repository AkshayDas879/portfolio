import Link from "next/link";
import portfolioData from "./data/portfolio.json";
import { PortfolioData } from "./lib/types";

export default function NotFound() {
    const data = portfolioData as PortfolioData;
    const { title, description, backLinkText } = data.notFound;

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-6xl font-bold text-slate-900 mb-4">{title}</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-md">
                {description}
            </p>
            <Link
                href="/"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
                {backLinkText}
            </Link>
        </div>
    );
}
