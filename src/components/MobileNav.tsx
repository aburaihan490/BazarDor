'use client';

import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import ProfileAction from './ProfileAction';

interface Props {
    children: React.ReactNode;
}

const MobileNav = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative md:hidden">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-2"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-60"
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        className={`absolute w-[275px] h-[275px] top-[70px] right-0 z-100
          overflow-y-auto bg-white shadow-lg
          transition-all duration-300 animate-fade-in`}
                    >
                        {children}
                        <div className="flex items-center justify-center gap-x-3.5 ps-8 py-1.5 border border-violet-400 rounded-3xl m-1.5">
                            <div className="flex items-center gap-x-3.5">
                                <ProfileAction />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default MobileNav;
