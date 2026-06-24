import type { CalculatorState } from '../types';

// Export format version for future migrations
export const EXPORT_VERSION = '1.0.0';

export interface ExportData {
  version: string;
  exportedAt: string;
  name: string;
  state: CalculatorState;
}

/**
 * Export calculator state to JSON file
 */
export function exportBuild(state: CalculatorState, name?: string): void {
  const exportData: ExportData = {
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    name: name || `Toram Build ${new Date().toLocaleDateString()}`,
    state,
  };

  const jsonString = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${exportData.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Import calculator state from JSON file
 */
export function importBuild(file: File): Promise<ExportData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const content = event.target?.result;
        if (typeof content !== 'string') {
          reject(new Error('Invalid file content'));
          return;
        }

        const data: ExportData = JSON.parse(content);

        // Validate structure
        if (!data.version || !data.state) {
          reject(new Error('Invalid export file format'));
          return;
        }

        // Version check (future-proofing)
        if (data.version !== EXPORT_VERSION) {
          console.warn(`Export file version ${data.version} may not be compatible with current version ${EXPORT_VERSION}`);
        }

        resolve(data);
      } catch (error) {
        reject(new Error('Failed to parse export file: ' + (error instanceof Error ? error.message : 'Unknown error')));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsText(file);
  });
}

/**
 * Copy build state to clipboard as JSON
 */
export async function copyBuildToClipboard(state: CalculatorState, name?: string): Promise<void> {
  const exportData: ExportData = {
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    name: name || `Toram Build ${new Date().toLocaleDateString()}`,
    state,
  };

  const jsonString = JSON.stringify(exportData);
  
  await navigator.clipboard.writeText(jsonString);
}

/**
 * Paste build state from clipboard
 */
export async function pasteBuildFromClipboard(): Promise<ExportData> {
  const text = await navigator.clipboard.readText();
  const data: ExportData = JSON.parse(text);

  if (!data.version || !data.state) {
    throw new Error('Invalid clipboard data');
  }

  return data;
}

/**
 * Format build info for display
 */
export function formatBuildInfo(data: ExportData): string {
  const date = new Date(data.exportedAt).toLocaleString();
  return `${data.name}\nExported: ${date}\nVersion: ${data.version}`;
}
