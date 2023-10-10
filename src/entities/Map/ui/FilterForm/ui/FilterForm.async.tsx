import { FC, lazy } from 'react';
import { IFilterForm } from './FilterForm';

export const FilterFormAsync = lazy<FC<IFilterForm>>(() => import('./FilterForm'));
