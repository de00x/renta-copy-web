import { FC, lazy } from 'react';
import { ICityForm } from '../ui/FlatsListFormForMobile';

export const FlatsListFormForMobileAsync = lazy<FC<ICityForm>>(() => import('./FlatsListFormForMobile'));
