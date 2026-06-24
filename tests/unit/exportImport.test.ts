import { describe, it, expect } from 'vitest';
import { exportBuild, importBuild, type ExportData } from '../../src/utils/exportImport';

describe('Export/Import Utilities', () => {
  const mockState = {
    character: {
      level: 50,
      baseStats: { STR: 10, INT: 20, VIT: 15, AGI: 10, DEX: 25 },
      personalStat: { type: 'CRT', value: 50 },
      element: 'Neutral' as const,
    },
  } as any;

  describe('exportBuild', () => {
    it('should create a valid export object', () => {
      // Mock document.createElement and Blob
      const createLinkSpy = vi.spyOn(document, 'createElement');
      
      exportBuild(mockState, 'Test Build');
      
      // Should attempt to create a download link
      expect(createLinkSpy).toHaveBeenCalled();
    });
  });

  describe('importBuild', () => {
    it('should successfully import valid export data', async () => {
      const exportData: ExportData = {
        version: '1.0.0',
        exportedAt: new Date().toISOString(),
        name: 'Test Build',
        state: mockState,
      };

      const mockFile = new File([JSON.stringify(exportData)], 'test.json', {
        type: 'application/json',
      });

      const result = await importBuild(mockFile);
      
      expect(result.version).toBe('1.0.0');
      expect(result.name).toBe('Test Build');
      expect(result.state).toEqual(mockState);
    });

    it('should reject invalid JSON', async () => {
      const mockFile = new File(['invalid json'], 'test.json', {
        type: 'application/json',
      });

      await expect(importBuild(mockFile)).rejects.toThrow('Failed to parse export file');
    });

    it('should reject missing version', async () => {
      const invalidData = { state: mockState };
      const mockFile = new File([JSON.stringify(invalidData)], 'test.json', {
        type: 'application/json',
      });

      await expect(importBuild(mockFile)).rejects.toThrow('Invalid export file format');
    });

    it('should reject missing state', async () => {
      const invalidData = { version: '1.0.0' };
      const mockFile = new File([JSON.stringify(invalidData)], 'test.json', {
        type: 'application/json',
      });

      await expect(importBuild(mockFile)).rejects.toThrow('Invalid export file format');
    });
  });
});
