import moment from 'moment';
import {$api} from 'shared/api/api';
import {IFormValuesData} from '../../types/registration-form-data.types'

export const onRegistration = (value: IFormValuesData) => {
    const {
        birthday: copyBirthday,
        acceptUserAgreementText,
        ...otherValues
    } = value;

    const birthday = copyBirthday ? moment(copyBirthday).format('DD.MM.YYYY') : null;

    const dataToSend = {
        ...otherValues,
        birthday,
    };

    return $api.post('/auth/registration', dataToSend);
};
