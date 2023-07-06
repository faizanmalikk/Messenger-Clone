'use client';

import useRoutes from "@/app/hooks/useRoutes";
// import SettingsModal from "./SettingsModal";
import { useState } from "react";
import { User } from "@prisma/client";
import DesktopItem from "./DesktopItem";
import Avatar from "../Avatar";

interface DesktopSidebarProps {
    currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    currentUser
}) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* <SettingsModal currentUser={currentUser} isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
            <div className="
        hidden 
        lg:fixed 
        lg:inset-y-0 
        lg:left-0 
        lg:z-40 
        lg:w-[100px]
        xl:px-6
        lg:overflow-y-auto 
        lg:bg-white 
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
      ">
                <nav className="mt-4 flex flex-col justify-between">
                    <ul role="list" className="flex flex-col items-center space-y-3">
                        {routes.map((item) => (
                            <DesktopItem
                                key={item.label}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                                active={item.active}
                                onClick={item.onClick}
                            />
                        ))}
                    </ul>
                </nav>
                <nav className="mt-4 flex flex-col justify-between items-center">
                    <div
                        onClick={() => setIsOpen(true)}
                        className="cursor-pointer hover:scale-110 duration-700"
                    >
                        <Avatar user={currentUser} />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default DesktopSidebar;