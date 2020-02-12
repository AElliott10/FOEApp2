//server side validation
/*
import validator from 'Validator';
import isEmpty from 'lodash/isEmpty';

export function ValidateInput(data) {
    let errors = {};

    if (validator.isNull(data.identifier)) {
        errors.identifier = 'This field is required';

        if (validator.isNull(data.password)) {
            errors.password = 'This field is required';
        }

        return {
            errors,
            isValid: isEmpty(errors)
        };
    }
}

export default ValidateInput;

*/