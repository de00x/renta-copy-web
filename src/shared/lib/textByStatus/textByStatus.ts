export const getTextByStatus = (status: boolean) => {
    switch (status) {
    case true:
        return 'забронирована';
    case false:
        return 'Статус: на оформлении брони';
    default:
        return 'Ошибка';
    }
};
