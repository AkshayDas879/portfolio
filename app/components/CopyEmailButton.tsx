'use client';

import { useState } from 'react';

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
            className="w-full md:w-auto border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition text-slate-600 cursor-pointer"
        >
            {copied ? "Copied! ✅" : "Copy Email"}
        </button>
    );
}
