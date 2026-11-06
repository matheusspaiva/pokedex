

export async function TextToAudio(text: string) {


    try {
        console.log('text')
         const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = 'pt-BR';
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);

    } catch (error) {
        console.error('Erro na reprodução:', error);

        return text;
    }
}