import {MainPageAsync} from './ui/MainPage.async';
import {mainActions, mainReducer} from './models/slice/mainSlice';
import {MainSchema} from './models/types/mainSchema';

export {
    MainPageAsync as MainPage,
    mainActions,
    mainReducer,
};

export type {MainSchema}