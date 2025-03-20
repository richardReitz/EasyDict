export type WordData = {
    word: string;
    phonetic: string;
    phonetics: {
        text: string;
        audio: string;
    }[]
    meanings: {
        partOfSpeech: string;
        definitions: {
            definition: string;
            example: string;
        }[]
    }[]
}