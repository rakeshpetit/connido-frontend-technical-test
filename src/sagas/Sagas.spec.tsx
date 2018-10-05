import { callAPI } from './Sagas';

export const apiOutput = { base: 'EUR', date: '2018-10-05',
        rates: { 'GBP' : 0.887 },
        success: true, timestamp: 1538723946
    };

describe('promise callAPI', () => {
it('should resolve promise if api call is succesful', () => {
return callAPI('success')
    .then((data: any) => expect(data).toEqual(apiOutput));
});

it('should reject promise if api call is failure', () => {
    return callAPI('fail')
        .then((data: any) => expect(data).toBe(undefined));
    });
});