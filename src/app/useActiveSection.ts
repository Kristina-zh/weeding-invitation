import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const updateActiveSection = () => {
      let newActiveSection = 'home';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            newActiveSection = id;
            break;
          }
        }
      }
      setActiveSection(newActiveSection);
    };

    const intervalId = setInterval(updateActiveSection, 500);

    return () => clearInterval(intervalId);
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
