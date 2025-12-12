export const formatCurrency = (value: number): string => {
  return `${value.toLocaleString()}만원`;
};

export const formatKoreanNumber = (num: number): string => {
  if (num === 0) return '0만원';
  let result = '';
  
  // Input 'num' is already in 'Man-won' unit.
  // 10,000 Man-won = 1 Eok (100,000,000 KRW)
  const eok = Math.floor(num / 10000);
  const man = num % 10000;

  if (eok > 0) result += `${eok}억 `;
  if (man > 0) result += `${man.toLocaleString()}만`;
  
  return result.trim() + '원';
};

export const parseRawInput = (value: string): number => {
  return Number(value.replace(/[^0-9]/g, ''));
};