var expect = require('expect');

const { Users } = require('./users.js');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node'
        }, {
            id: '2',
            name: 'Virat',
            room: 'JavaScript'
        }, {
            id: '2',
            name: 'Rohit',
            room: 'Node'
        }]
    });
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Jhon',
            room: 'A'
        }
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '10';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for Node', () => {
        var userList = users.getUserList('Node');

        expect(userList).toEqual(['Mike', 'Rohit']);
    });

    it('should return names for JavaScript', () => {
        var userList = users.getUserList('JavaScript');

        expect(userList).toEqual(['Virat']);
    });
}); 