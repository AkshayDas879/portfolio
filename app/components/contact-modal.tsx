"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Mail, Linkedin, MessageCircle, X } from "lucide-react";

interface ContactModalProps {
  children: React.ReactNode;
  className?: string;
  email: string;
  linkedin: string;
  whatsapp: string;
}

export default function ContactModal({ children, className, email, linkedin, whatsapp }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const whatsappUrl = `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`;

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
      {/* Background click listener to close */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} aria-hidden="true" />
      
      <div className="relative w-full max-w-[95vw] sm:max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h3 className="font-serif text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50 pr-8">
          Let's Connect
        </h3>

        <div className="flex flex-col gap-3 sm:gap-4">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-4 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group"
          >
            <div className="p-2 sm:p-3 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
              <Mail size={24} />
            </div>
            <div className="overflow-hidden">
              <p className="font-semibold text-slate-900 dark:text-slate-50">Email</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate w-full">{email}</p>
            </div>
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-all group"
          >
            <div className="p-2 sm:p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform flex-shrink-0">
              <Linkedin size={24} />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">LinkedIn</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Connect with me</p>
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/10 transition-all group"
          >
            <div className="p-2 sm:p-3 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform flex-shrink-0">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">WhatsApp</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{whatsapp}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>

      {isOpen && mounted && createPortal(modalContent, document.body)}
    </>
  );
}
