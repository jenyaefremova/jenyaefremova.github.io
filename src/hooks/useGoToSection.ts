import { useCallback } from 'react';

export function useGoToSection(sectionId: string) {
  const goToSection = useCallback(() => {
    document.getElementById(`${sectionId}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }, [sectionId]);

  return { goToSection };
}
