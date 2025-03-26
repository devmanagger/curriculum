"use client";

import { Header } from "@/components/Header";
import { Router } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

export default function Home(props: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = [
    "home",
    "about",
    "experience",
    "skills",
    "projects",
    "education",
    "contact",
  ];

  // Crear referencias para cada sección
  const sectionRefs = useRef(
    sections.reduce((acc, section) => {
      acc[section] = useInView({ threshold: 0.5 });
      return acc;
    }, {} as Record<string, { ref: (node?: Element | null | undefined) => void; inView: boolean }>)
  ).current;

  // Asignar las referencias a los elementos correspondientes
  useEffect(() => {
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        sectionRefs[section].ref(element);
      }
    });
  }, [sections, sectionRefs]);

  // Actualizar activeSection cuando una sección entra en vista
  useEffect(() => {
    const visibleSection = sections.find(
      (section) => sectionRefs[section].inView
    );
    if (visibleSection) {
      setActiveSection(visibleSection);
    }
  }, [sections, sectionRefs]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div
        className={`min-h-screen ${
          darkMode ? "dark" : ""
        } transition-colors duration-300`}
      >
        <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
          <Header
            activeSection={activeSection}
            darkMode={darkMode}
            scrollToSection={scrollToSection}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      </div>
    </>
  );
}
