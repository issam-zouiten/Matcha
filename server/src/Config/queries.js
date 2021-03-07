const queries = {
    SELECT: {
        GetAllUsers: "SELECT  * FROM users",
        GetUserByEmail: "SELECT users.* FROM users WHERE users.email = ?",
        GetUserById: "SELECT users.* FROM users WHERE users.id = ?",
        GetUserByUsername: "SELECT users.* FROM users WHERE users.username = ?",
        GetUserByToken: "SELECT * FROM users WHERE vfToken = ?",
        GetTagId: "SELECT tag_id FROM tags WHERE tag = ?",
        GetITags: "SELECT tag FROM tags",

    },
    INSERT: {
        AddUser: 'INSERT INTO users (lastname, firstname, username, email, password) VALUES (?, ?, ?, ?, ?)',

    },
    UPDATE: {
        UpToken: 'UPDATE users SET vfToken = ? WHERE email = ?',
        ResetPassword: 'UPDATE users SET password = ? WHERE vfToken = ?',
        verif: 'UPDATE users SET verif = 1 WHERE email = ?',
        non_verif: 'UPDATE users SET verif = 0 WHERE email = ?',
        UpdateInfo: "UPDATE users SET gender = ?, Sexual_orientation = ?, date_birthday = ?, biography = ? WHERE id = ?",
        UpdateOnline: "UPDATE users SET Online = 1 ,lastSignIn = null WHERE id = ?",
        UpdateOffline: "UPDATE users SET Online = 0 ,lastSignIn = NOW() WHERE id = ?",
    },
    DELETE: {
        DeleteUserTags: "DELETE FROM `usersInterests` WHERE uId = ?",
    },
}

module.exports = queries;