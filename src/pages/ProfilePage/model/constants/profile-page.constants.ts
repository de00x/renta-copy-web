import {IUsersDataMock, IReviewsMock} from '../types/profile-page.types'


export const usersDataMock: IUsersDataMock[] = [
    {
        firstText: 'Имя',
        secondText: 'Иван'
    },
    {
        firstText: 'Фамилия',
        secondText: 'Иванов'
    },
    {
        firstText: 'Отчество',
        secondText: 'Иванович'
    },
    {
        firstText: 'Телефон',
        secondText: '+7 (999) 777 66 55'
    },
    {
        firstText: 'День рождения',
        secondText: '07.07.2077'
    },
    {
        firstText: 'Электронная почта',
        secondText: 'helloWorld777@gmail.com'
    }
]

export const reviewsMock: IReviewsMock[] = [
    {
        name: 'Андрей К.',
        stars: 5,
        text: 'Отличная квартир! Вежливый хозяин :)'
    },
    {
        name: 'Владимир Ш.',
        stars: 4,
        text: 'В квартире чисто, отзывчивый хозяин, ответил на все вопросы, проблем с заселение не было, но до остановки идти далеко'
    },
    {
        name: 'Андрей К.',
        stars: 3,
        text: 'Отличная квартир! Вежливый хозяин :)'
    },
    {
        name: 'Андрей К.',
        stars: 2,
        text: 'Отличная квартир! Вежливый хозяин :)'
    },
    {
        name: 'Владимир Ш.',
        stars: 1,
        text: 'В квартире чисто, отзывчивый хозяин, ответил на все вопросы, проблем с заселение не было, но до остановки идти далеко'
    },
    {
        name: 'Андрей К.',
        stars: 0,
        text: 'Отличная квартир! Вежливый хозяин :)'
    }
]

export const numberOfStarsMock = ['star1', 'star2', 'star3', 'star4', 'star5']