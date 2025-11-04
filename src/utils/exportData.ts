/**
 * Export data utility functions for CSV and JSON downloads
 */

interface ExportColumn {
  key: string;
  label: string;
}

/**
 * Convert data to CSV format and trigger download
 */
export const exportToCSV = <T extends Record<string, any>>(
  data: T[],
  filename: string,
  columns?: ExportColumn[]
) => {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  const headers = columns 
    ? columns.map(col => col.label)
    : Object.keys(data[0]);

  const keys = columns
    ? columns.map(col => col.key)
    : Object.keys(data[0]);

  const csvContent = [
    headers.join(','),
    ...data.map(row =>
      keys.map(key => {
        const value = row[key];
        // Handle values with commas or quotes
        if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value ?? '';
      }).join(',')
    )
  ].join('\n');

  downloadFile(csvContent, `${filename}.csv`, 'text/csv');
};

/**
 * Convert data to JSON format and trigger download
 */
export const exportToJSON = <T extends Record<string, any>>(
  data: T[],
  filename: string
) => {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  const jsonContent = JSON.stringify(data, null, 2);
  downloadFile(jsonContent, `${filename}.json`, 'application/json');
};

/**
 * Helper function to trigger file download
 */
const downloadFile = (content: string, filename: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Format data for export with custom transformations
 */
export const formatDataForExport = <T extends Record<string, any>>(
  data: T[],
  transformers?: Record<string, (value: any) => any>
): Record<string, any>[] => {
  if (!transformers) return data;

  return data.map(row => {
    const transformedRow: Record<string, any> = { ...row };
    Object.keys(transformers).forEach(key => {
      if (key in transformedRow) {
        transformedRow[key] = transformers[key](transformedRow[key]);
      }
    });
    return transformedRow;
  });
};
