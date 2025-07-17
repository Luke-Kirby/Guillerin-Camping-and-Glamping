export const printStr = (item: string | (() => string)): string => (typeof item === 'function') ? item() : item
