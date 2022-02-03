type LocalStoragePropertyTypes = 'accessToken' | 'refreshToken';

interface ILocalStorageControls {
  set(value: string): void;
  get(): string | null;
  remove(): void;
}

export interface ILocalStorage extends Record<LocalStoragePropertyTypes, ILocalStorageControls> {
  clearStorage(): void;
}

const properties: LocalStoragePropertyTypes[] = [
  'accessToken',
  'refreshToken',
];

const LocalStorage = {
  ...properties.reduce((acc, propertyName) => {
    acc[propertyName] = {
      set(value) {
        localStorage.setItem(propertyName, value);
      },
      get() {
        return localStorage.getItem(propertyName);
      },
      remove() {
        localStorage.removeItem(propertyName);
      },
    };

    return acc;
  }, {} as Omit<ILocalStorage, 'clearStorage'>),
  clearStorage() {
    localStorage.clear();
  },
};

export { LocalStorage };
