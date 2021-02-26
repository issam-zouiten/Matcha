const queries = {
    SELECT: {
        GetAllUsers: "SELECT  * FROM users",
        GetUserByEmail: "SELECT users.* FROM users WHERE users.email = ?",
        GetUserById: "SELECT users.* FROM users WHERE users.id = ?",
        GetUserByUsername: "SELECT users.* FROM users WHERE users.username = ?",
        GetUserByToken: "SELECT * FROM users WHERE vfToken = ?",
    },
    INSERT: {
        AddUser: 'INSERT INTO users (lastname, firstname, username, email, password) VALUES (?, ?, ?, ?, ?)',
    },
    UPDATE: {
        UpToken: 'UPDATE users SET vfToken = ? WHERE email = ?',
        ResetPassword: 'UPDATE users SET password = ? WHERE vfToken = ?',
        verif: 'UPDATE users SET verif = 1 WHERE email = ?',
        non_verif: 'UPDATE users SET verif = 0 WHERE email = ?',
        UpdateOnline: "UPDATE users SET Online = 1 ,lastSignIn = null WHERE id = ?",
        UpdateOffline: "UPDATE users SET Online = 0 ,lastSignIn = NOW() WHERE id = ?",
    },
}

module.exports = queries;