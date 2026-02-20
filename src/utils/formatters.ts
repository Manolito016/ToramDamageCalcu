// Formatting utility functions

// Format number with specified decimal places
export function formatNumber(value: number, decimals: number = 0): string {
  return value.toFixed(decimals);
}

// Format percentage (e.g., 50 -> "50%")
export function formatPercent(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals)}%`;
}

// Format stat value with sign (+ or -)
export function formatSigned(value: number, decimals: number = 0): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(decimals)}`;
}

// Format stat modifier for display
export function formatStatModifier(stat: string, value: number): string {
  if (stat.includes('%')) {
    return `${formatSigned(value)}%`;
  }
  return formatSigned(value);
}
