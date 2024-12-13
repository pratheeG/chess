import { getMainMethod } from '.'

describe('getMainMethod', () => {
    it('Should call main method', () => {
        const response = getMainMethod();
        expect(response).toBe('Main Method');
    })
})