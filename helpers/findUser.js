const findUser = (username, password) => {
    if(username === 'admin' && password === 'admin') {
        return {
            username,
        }
    } else {
        return null;
    }
}

module.exports = findUser;