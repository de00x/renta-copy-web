import { FC, lazy } from 'react';
import { ConfirmationModalProps } from './ConfirmationForm';

export const ConfirmationFormAsync = lazy<FC<ConfirmationModalProps>>(() => import('./ConfirmationForm'));
