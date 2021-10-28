import { getUsers, createUser } from './Data';

describe('Работа с данными', () => {
    it('GET запрос', () => {
        return getUsers().then((data) => {
            expect(data.length).toBe(10);
            expect(typeof data[0]).toBe('string');
        });
    });

    it('POST запрос с именем', () => {
        return createUser({ name: 'Ivan' }).then((res) => {
            expect(res).toEqual({ name: 'Ivan', id: 11 });
        });
    });

    it('POST запрос с email', () => {
        return createUser({ email: 'Chaim_McDermott@dana.io' }).then((res) => {
            expect(res).toEqual({ email: 'Chaim_McDermott@dana.io', id: 11 });
        });
    });
});
