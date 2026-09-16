import LocalStorage from './LocalStorage';

interface TranslationResponse {
    responseData: {
        translatedText: string;
        match: number;
    };
    responseStatus: number;
}

export async function translate(
    reference: string,
    text: string
): Promise<string> {

    const cacheKey = `${reference}`;

    const cached = LocalStorage.get<string>(cacheKey);

    if (cached) {
        return cached;
    }

    try {
        const params = new URLSearchParams({
            q: text,
            langpair: 'en|pt-BR',
        });

        const response = await fetch(
            `https://api.mymemory.translated.net/get?${params}`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data: TranslationResponse = await response.json();

        if (data.responseStatus !== 200) {
            throw new Error('Erro ao traduzir');
        }

        const translatedText = data.responseData.translatedText;

        LocalStorage.set(cacheKey, translatedText);

        return translatedText;

    } catch (error) {
        console.error('Erro na tradução:', error);

        return text;
    }
}