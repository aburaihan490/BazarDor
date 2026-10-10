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
                        className={`absolute w-68.75 h-52.5 top-17.5 right-0 z-100
          overflow-y-auto bg-white shadow-lg
          transition-all duration-300 animate-fade-in`}
                        onClick={() => setIsOpen(false)}
                    >
                        {children}
                    </div>
                </>
            )}
        </div>
    );
};

export default MobileNav;
