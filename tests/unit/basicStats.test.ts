import { describe, it, expect } from 'vitest';
import { calculateMaxHP, calculateMaxMP, calculateAccuracy, calculateCSPD, calculateAilmentResistance, calculateCriticalRateFromStat } from '../../src/utils/calculations/basicStats';

describe('Basic Stats Calculations', () => {
  describe('calculateMaxHP', () => {
    it('should calculate HP with base VIT', () => {
      const result = calculateMaxHP(1, 10, { flat: 0, percent: 0 });
      expect(result).toBeGreaterThan(0);
    });

    it('should scale with level', () => {
      const lowLevel = calculateMaxHP(1, 10, { flat: 0, percent: 0 });
      const highLevel = calculateMaxHP(100, 10, { flat: 0, percent: 0 });
      expect(highLevel).toBeGreaterThan(lowLevel);
    });

    it('should scale with VIT', () => {
      const lowVit = calculateMaxHP(50, 10, { flat: 0, percent: 0 });
      const highVit = calculateMaxHP(50, 100, { flat: 0, percent: 0 });
      expect(highVit).toBeGreaterThan(lowVit);
    });
  });

  describe('calculateMaxMP', () => {
    it('should calculate MP with base INT', () => {
      const result = calculateMaxMP(1, 10, 1, 1, { flat: 0, percent: 0 });
      expect(result).toBeGreaterThan(0);
    });

    it('should scale with INT', () => {
      const lowInt = calculateMaxMP(50, 10, 1, 1, { flat: 0, percent: 0 });
      const highInt = calculateMaxMP(50, 100, 1, 1, { flat: 0, percent: 0 });
      expect(highInt).toBeGreaterThan(lowInt);
    });
  });

  describe('calculateAccuracy', () => {
    it('should calculate accuracy based on DEX', () => {
      const result = calculateAccuracy(50, 50, { flat: 0, percent: 0 });
      expect(result).toBeGreaterThan(0);
    });

    it('should increase with DEX', () => {
      const lowDex = calculateAccuracy(50, 10, { flat: 0, percent: 0 });
      const highDex = calculateAccuracy(50, 100, { flat: 0, percent: 0 });
      expect(highDex).toBeGreaterThan(lowDex);
    });
  });

  describe('calculateCSPD', () => {
    it('should calculate cast speed based on DEX and AGI', () => {
      const result = calculateCSPD(50, 10, 50, { flat: 0, percent: 0 });
      expect(result).toBeGreaterThan(0);
    });
  });

  describe('calculateAilmentResistance', () => {
    it('should calculate resistance from MTL', () => {
      const result = calculateAilmentResistance(50);
      expect(result).toBeGreaterThan(0);
    });
  });

  describe('calculateCriticalRateFromStat', () => {
    it('should calculate critical rate from CRT', () => {
      const result = calculateCriticalRateFromStat(50, { flat: 0, percent: 0 });
      expect(result).toBeGreaterThan(25); // Base is 25
    });
  });
});
