class LocalStorage {
    static set<T>(key: string, value: T): void {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Erro ao salvar "${key}" no localStorage:`, error);
        }
    }

    static get<T>(key: string): T | null {
        try {
            const value = localStorage.getItem(key);

            if (value === null) {
                return null;
            }

            return JSON.parse(value) as T;
        } catch (error) {
            console.error(`Erro ao buscar "${key}" no localStorage:`, error);
            return null;
        }
    }

    static remove(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Erro ao remover "${key}" do localStorage:`, error);
        }
    }

    static has(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

    static clear(): void {
        try {
            localStorage.clear();
        } catch (error) {
            console.error("Erro ao limpar o localStorage:", error);
        }
    }
}

export default LocalStorage;
