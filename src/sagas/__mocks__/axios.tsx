import { ENV } from '../../const';
import { successApiOutput, failureApiOutput } from '../Sagas.spec';

module.exports = {
    get: jest.fn((url) => {
            if (url === 'success' || url === ENV.FIXER_API) {
                return Promise.resolve({
                    data: successApiOutput
                });
            } else {
                return Promise.reject({
                    data: failureApiOutput
                });
            }
    })
};