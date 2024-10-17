// src/utils/windowUtil.ts

export const isBrowser = typeof window !== 'undefined';

export const getWindow = (): Window | null => {
  return isBrowser ? window : null; // Aquí definimos el tipo de retorno
};

// Otras funciones útiles que necesites que dependan de `window`
export const getLocalStorage = (key: string): string | null => {
  return isBrowser ? window.localStorage.getItem(key) : null;
};
