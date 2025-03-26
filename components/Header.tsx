"use client";

import React from "react";

import {
  Terminal,
  User,
  Briefcase,
  Code,
  FolderGit,
  GraduationCap,
  Contact,
  Sun,
  Moon,
} from "lucide-react";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  scrollToSection,
}) => {
  const navItems = [
    { id: "home", icon: <Terminal className="w-5 h-5" />, label: "DEV/SM" },
    { id: "about", icon: <User className="w-5 h-5" />, label: "About" },
    {
      id: "experience",
      icon: <Briefcase className="w-5 h-5" />,
      label: "Experience",
    },
    { id: "skills", icon: <Code className="w-5 h-5" />, label: "Skills" },
    {
      id: "projects",
      icon: <FolderGit className="w-5 h-5" />,
      label: "Projects",
    },
    {
      id: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Education",
    },
    { id: "contact", icon: <Contact className="w-5 h-5" />, label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
        <ul className="flex justify-center space-x-4 sm:space-x-8 overflow-x-auto list-none p-0 m-0">
          {navItems.map(({ id, icon, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                  ${
                    activeSection === id
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600/20 text-gray-600 dark:text-gray-300"
                  } no-underline border-0`}
              >
                {icon}
                <span className="hidden md:inline">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
