import { useEffect } from 'react';
import { useCalculator } from '../context/CalculatorContext';
import { exportBuild } from '../utils/exportImport';

/**
 * Keyboard shortcuts hook for the calculator
 * Ctrl+S: Export build
 * Ctrl+Z: Undo (reset to last saved state)
 */
export function useKeyboardShortcuts() {
  const { state, resetState } = useCalculator();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || 
          e.target instanceof HTMLTextAreaElement || 
          e.target instanceof HTMLSelectElement) {
        return;
      }

      // Ctrl+S or Cmd+S: Export build
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        try {
          exportBuild(state);
        } catch (error) {
          console.error('Failed to export:', error);
        }
      }

      // Ctrl+Z or Cmd+Z: Reset (with confirmation)
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        // Note: This is a simple reset, not a true undo
        // Could be enhanced with an undo history in the future
        e.preventDefault();
        if (window.confirm('Reset all data? (Ctrl+Z)')) {
          resetState();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [state, resetState]);
}
