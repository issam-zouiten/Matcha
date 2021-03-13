const queries = {
    SELECT: {
        GetAllUsers: "SELECT  * FROM users",
        GetUserByEmail: "SELECT users.* FROM users WHERE users.email = ?",
        GetUserById: "SELECT users.* FROM users WHERE users.id = ?",
        GetUserByUsername: "SELECT users.* FROM users WHERE users.username = ?",
        GetUserByToken: "SELECT * FROM users WHERE vfToken = ?",
        GetTagId: "SELECT tag_id FROM tags WHERE tag = ?",
        GetTags: "SELECT tags.* FROM tags",
        CheckTag: "SELECT COUNT(tag) as n FROM tags WHERE tag IN (?)",
        TagCreatedNbr: "SELECT COUNT(tag) as n FROM tags WHERE create_tag = ? ",
        GetPics: "SELECT * FROM pics WHERE user_id = ?",
        GetProfilePic: "SELECT path FROM pics WHERE user_id = ? AND isProfilePic = 1",
    },
    INSERT: {
        AddUser: 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        InsertUserTag: "INSERT INTO useTags (id_user, id_tag) VALUES (?, ?)",
        CreateTag: "INSERT INTO tags (tag, create_tag) VALUES (?, ?)",
        AddPic: 'INSERT INTO pics (user_id, path, isProfilePic) VALUES (?, ?, ?)',

    },
    UPDATE: {
        UpToken: 'UPDATE users SET vfToken = ? WHERE email = ?',
        ResetPassword: 'UPDATE users SET password = ? WHERE vfToken = ?',
        verif: 'UPDATE users SET verif = 1 WHERE email = ?',
        non_verif: 'UPDATE users SET verif = 0 WHERE email = ?',
        UpdateInfo: "UPDATE users SET lastname = ?, firstname = ?, gender = ?, Sexual_orientation = ?, date_birthday = ?, biography = ? WHERE id = ?",
        UpdateOnline: "UPDATE users SET Online = 1 ,lastSignIn = null WHERE id = ?",
        UpdateOffline: "UPDATE users SET Online = 0 ,lastSignIn = NOW() WHERE id = ?",
        UpdateStep: "UPDATE users SET step = ? WHERE id = ?",
        setProfilePic: 'UPDATE pics SET IsProfilePic = 1 WHERE id = ? && user_id = ?',
        resetProfilePic: 'UPDATE pics SET isProfilePic = 0 WHERE user_id = ?',
        setFirstProPic: 'UPDATE  pics SET isProfilePic = 1 WHERE user_id = ? ORDER BY id ASC LIMIT 1',

    },
    DELETE: {
        delPics: 'DELETE FROM `pics` WHERE id = ? && user_id = ?',
        DeleteUserTags: "DELETE FROM `useTags` WHERE id_user = ?",
    },
}

module.exports = queries;