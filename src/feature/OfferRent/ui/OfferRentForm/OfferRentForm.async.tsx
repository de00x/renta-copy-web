import { FC, lazy } from 'react';
import { ConfirmationModalProps } from './OfferRentForm';

export const OfferRentFormAsync = lazy<FC<ConfirmationModalProps>>(() => import('./OfferRentForm'));
