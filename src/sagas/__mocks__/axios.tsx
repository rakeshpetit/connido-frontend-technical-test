import { ENV } from '../../const';
import { apiOutput } from '../Sagas.spec';

module.exports = {
    get: jest.fn((url) => {
            if (url === 'success' || url === ENV.FIXER_API) {
                return Promise.resolve({
                    data: apiOutput
                });
            } else {
                return Promise.reject();
            }
    })
};