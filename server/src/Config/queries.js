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
        getUserLikes: "SELECT liker_id,liked_id FROM likesList WHERE liker_id=? OR liked_id=?",
        GetProfilePic: "SELECT path FROM pics WHERE user_id = ? AND isProfilePic = 1",
        GetUserInter: "SELECT tag FROM tags INNER JOIN useTags ON tags.tag_id = useTags.id_tag \
                    WHERE useTags.id_user = ?",
        CheckEditUsername: "SELECT username from users where username = ? AND id != ?",
        CheckEditEmail: "SELECT email from users where email = ? AND id != ?",
        getMessages: "SELECT messages.sender,pics.path, messages.message FROM pics,messages \
        WHERE pics.user_id = messages.sender \
        AND pics.isProfilePic = 1 \
        AND (messages.sender = ? OR messages.receiver = ?) \
        AND (messages.sender = ? OR messages.receiver = ?) ORDER BY messages.id ASC",
        getMatchs: "SELECT users.id,users.firstname,users.lastname,pics.path,users.online FROM users,pics \
        WHERE users.id = pics.user_id  AND pics.isProfilePic = 1 AND pics.user_id IN (?)",
        checkBlock: "SELECT * FROM blockList WHERE (blocker_id = ? OR blocked_id = ?) AND (blocker_id = ? OR blocked_id = ?)",


    },
    INSERT: {
        AddUser: 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        InsertUserTag: "INSERT INTO useTags (id_user, id_tag) VALUES (?, ?)",
        CreateTag: "INSERT INTO tags (tag, create_tag) VALUES (?, ?)",
        AddPic: 'INSERT INTO pics (user_id, path, isProfilePic) VALUES (?, ?, ?)',
        insertNotif: "INSERT INTO notifications (`by`, receiver, content, seen) VALUES (?, ?, ?, ?)",
        insertMessage: "INSERT INTO messages (sender, receiver, message) VALUES (?, ?, ?)",

    },
    UPDATE: {
        UpToken: 'UPDATE users SET vfToken = ? WHERE email = ?',
        ResetPassword: 'UPDATE users SET password = ? WHERE vfToken = ?',
        UpdatePassword: "UPDATE users SET password = ? WHERE id = ?",
        notverfid: 'UPDATE users SET verif = 0 WHERE email = ?',
        verif: 'UPDATE users SET verif = 1 WHERE email = ?',
        non_verif: 'UPDATE users SET verif = 0 WHERE email = ?',
        UpdateInfo: "UPDATE users SET lastname = ?, firstname = ?, gender = ?, Sexual_orientation = ?, date_birthday = ?, age = ?, biography = ? WHERE id = ?",
        UpdateOnline: "UPDATE users SET Online = 1 ,lastSignIn = null WHERE id = ?",
        UpdateOffline: "UPDATE users SET Online = 0 ,lastSignIn = NOW() WHERE id = ?",
        UpdateStep: "UPDATE users SET step = ? WHERE id = ?",
        setProfilePic: 'UPDATE pics SET isProfilePic = 1 WHERE id = ? && user_id = ?',
        resetProfilePic: 'UPDATE pics SET isProfilePic = 0 WHERE user_id = ?',
        setFirstProPic: 'UPDATE  pics SET isProfilePic = 1 WHERE user_id = ? ORDER BY id ASC LIMIT 1',
        UpdateLocation: "UPDATE users SET latitude = ? , longitude = ? WHERE id = ?",
        UpdateProfile: "UPDATE users SET firstname = ?, lastname = ?, username = ?, email = ?, gender = ?, date_birthday = ?, age = ?, Sexual_orientation = ?, biography = ? \
        WHERE id = ?",

    },
    DELETE: {
        delPics: 'DELETE FROM `pics` WHERE id = ? && user_id = ?',
        DeleteUserTags: "DELETE FROM `useTags` WHERE id_user = ?",
    },
}

module.exports = queries;