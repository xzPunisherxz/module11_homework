import {getMonth} from "./index.js";

describe('test for getMonth function', ()=> {
    it('should correctly display month for 1-12', ()=> {
        expect(getMonth(7)).toBe('июль');
    }),
        it('should not return month for 0', ()=> {
            expect(getMonth(0)).toBe('неизвестно');
        }),
        it('should not return month for number > 12', ()=> {
            expect(getMonth(54)).toBe('неизвестно');
        }),
        it('should not return month for invalid argument (string)', ()=> {
            expect(getMonth('Month')).toBe('неизвестно');
        })
})