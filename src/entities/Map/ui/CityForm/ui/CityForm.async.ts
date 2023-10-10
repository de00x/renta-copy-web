import { FC, lazy } from 'react';
import { ICityForm } from '../ui/CityForm';

export const CityFormAsync = lazy<FC<ICityForm>>(() => import('./CityForm'));
