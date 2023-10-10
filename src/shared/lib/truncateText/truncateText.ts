export const truncateText = (text: string): string => {
    // Разбить текст на слова
    const words = text.split(' ');

    // Проверить, не находится ли текущее слово на середине
    let truncatedText = '';
    let wordCount = 0;
    for (let i = 0; i < words.length; i++) {
        if (truncatedText.length + words[i].length >= 15) {
            // Если длина строки с учетом нового слова больше максимальной
            if (truncatedText.length < text.length) {
                // Если текст еще не был урезан, добавить многоточие в конце строки
                truncatedText += '...';
            }
            break;
        } else {
            // Добавить следующее слово к строке
            truncatedText += ` ${words[i]}`;
            wordCount += 1;
        }
    }

    return truncatedText;
};
