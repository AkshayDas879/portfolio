'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyEmailButtonProps {
    email: string;
}

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <button
            onClick={copyToClipboard}
            className="w-full md:w-auto min-w-[170px] whitespace-nowrap border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 text-slate-600 dark:text-slate-400 cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
            {copied ? (
                <>
                    <Check size={18} className="text-green-500" />
                    <span>Copied!</span>
                </>
            ) : (
                <>
                    <Copy size={18} />
                    <span>Copy Email</span>
                </>
            )}
        </button>
    );
}
