const fn = {
    add: (x, y) => x + y,
    makeUser: (name, age) => ({name, age, gender: undefined}),
    throwErr: () => {
        throw new Error('error.');
    },
    getName: (callback) => {
        const name = 'Mike';
        setTimeout(() => {
            callback(name);
            // throw new Error('error.');
        }, 3000);
    },
    getAge: () => {
        const age = 28;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(age);
                // reject('error.');
            }, 3000);
        });
    },
    connectUserDb: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: 'Mike',
                    age: 28,
                    gender: 'Male'
                });
            }, 500);
        });
    },
    disconnectUserDb: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    },
    connectCarDb: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    brand: 'BMW',
                    color: 'red',
                    owner: 'Mike'
                });
            }, 500);
        });
    },
    disconnectCarDb: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    },
    createUser: (name) => {
        console.log('실제로 사용자가 생성되었습니다.');
        return {
            name
        }
    }
}

module.exports = fn;