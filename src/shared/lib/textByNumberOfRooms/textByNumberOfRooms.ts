export const getTextByNumberOfRooms = (flat: number) => {
    switch (flat) {
    case 1:
        return 'Квартира однокомнатная';
    case 2:
        return 'Квартира двухкомнатная';
    case 3:
        return 'Квартира трехкомнатная';
    case 4:
        return 'Квартира четырехкомнатная';
    default:
        return 'Ошибка';
    }
};
