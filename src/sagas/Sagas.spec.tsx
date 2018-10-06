import axios from 'axios';
import { callAPI, refreshDataPromise } from './Sagas';

export const successApiOutput = { 
        base: 'EUR', date: '2018-10-05',
        rates: { 'GBP' : 0.887 },
        success: true, timestamp: 1538723946
    };

export const failureApiOutput = { error: true };

describe('callAPI promise', () => {
    it('should resolve promise if api call is succesful', () => {
    return callAPI('success')
        .then((data: any) => expect(data).toEqual(successApiOutput));
    });

    it('should reject promise if api call is failure', () => {
        return callAPI('fail')
            .then((result: any) => expect(result.data).toEqual(failureApiOutput));
        });
});

describe('refreshDataPromise', () => {        
    it('should resolve refreshDataPromise if api call succeeds', () => {
        const fakeSuccessCall =  (url: string) => {
            return axios.get(url)
            .then(res => res.data)
            .catch(error => error);
        };
        return refreshDataPromise(fakeSuccessCall)
            .then((data: any) => {                
                expect(data).toBe(successApiOutput);
                return data;
            })
            ;
        });

    it('should reject refreshDataPromise if api call fails', () => {
        const fakeFailCall =  () => {
            return axios.get('fail')
                .then(res => res.data)
                .catch(error => error);
        };
        return refreshDataPromise(fakeFailCall)
            .then((result: any) => {
                console.log(result.data);
                expect(result.data.error).toBe(true);
                return result;
            })
            ;
        });

});