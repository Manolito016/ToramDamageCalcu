// Math utility functions for calculations

// Floor division helper
export function floorDivide(value: number, divisor: number): number {
  return Math.floor(value / divisor);
}

// Clamp a value between min and max
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Apply soft cap (efficiency halved after every threshold)
export function applySoftCap(value: number, threshold: number): number {
  if (value <= 0) return 0;
  if (value <= threshold) return value;
  
  let remaining = value;
  let result = 0;
  let currentThreshold = threshold;
  let efficiency = 1;
  
  while (remaining > 0) {
    const amount = Math.min(remaining, currentThreshold);
    result += amount * efficiency;
    remaining -= amount;
    efficiency *= 0.5;
    currentThreshold = threshold;
  }
  
  return result;
}

// Calculate percentage increase
export function applyPercentage(base: number, percent: number): number {
  return base * (1 + percent / 100);
}

// Sum array of numbers
export function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
