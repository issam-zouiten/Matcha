const queries = {
    SELECT: {
        GetUsers:"SELECT DATE_FORMAT(users.lastSignIn, ' %b %d %Y at %T') as lastSignIn, \
        id,firstname, lastname, username, gender, Sexual_orientation, biography, age,date_birthday,rating,Online,latitude,longitude FROM users\
        WHERE id != ? AND \
        id NOT IN  (SELECT blocked_id FROM blockList  WHERE blocker_id = ?) AND \
        id NOT IN  (SELECT blocker_id FROM blockList  WHERE blocked_id = ?) AND \
        id NOT IN  (SELECT reported_id FROM reportList  WHERE reporter_id = ?) \
        AND verif = 1 \
        AND step = 3 \
        ORDER BY rating DESC",
        GetAllUsers: "SELECT  DATE_FORMAT(users.lastSignIn, ' %b %d %Y at %T') as lastSignIn, \
        id,firstname, username, lastname, gender, Sexual_orientation, biography, age,date_birthday,rating,Online,latitude,longitude \
        FROM users WHERE verif = 1 AND step = 3",
        GetUserByEmail: "SELECT users.* FROM users WHERE users.email = ?",
        GetUserById: "SELECT users.*,DATE_FORMAT(users.date_birthday,'%Y-%m-%d') as transDate FROM users \
        WHERE users.id = ?",
        GetUserByUsername: "SELECT users.*,DATE_FORMAT(users.date_birthday,'%Y-%m-%d') as transDate FROM users \
                    WHERE users.username = ?",
        GetUserByToken: "SELECT * FROM users WHERE vfToken = ?",
        GetTagId: "SELECT tag_id FROM tags WHERE tag = ?",
        GetTags: "SELECT tags.* FROM tags",
        CheckTag: "SELECT COUNT(tag) as n FROM tags WHERE tag IN (?)",
        TagCreatedNbr: "SELECT COUNT(tag) as n FROM tags WHERE create_tag = ? ",
        GetPics: "SELECT * FROM pics WHERE user_id = ?",
        getUserLikes: "SELECT liker_id,liked_id FROM likesList WHERE liker_id=? OR liked_id=?",
        GetProfilePic: "SELECT path FROM pics WHERE user_id = ? AND isProfilePic = 1",
        GetUserTag: "SELECT tag FROM tags INNER JOIN useTags ON tags.tag_id = useTags.id_tag \
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
        getBlockUser: "SELECT id,firstname,lastname FROM users WHERE  id  IN (SELECT blocked_id FROM blockList WHERE blocker_id = ?)",
        getLikedBy: "SELECT id,firstname,lastname FROM users WHERE  id  IN (SELECT liker_id FROM likesList WHERE liked_id = ?)",
        getLikeUser: "SELECT id,firstname,lastname FROM users WHERE  id  IN (SELECT liked_id FROM likesList WHERE liker_id = ?)",
        getViewProfileList: "SELECT id,firstname,lastname FROM users WHERE  id  IN (SELECT viewer FROM viewProfileList WHERE viewed = ?) \
        AND id NOT IN (SELECT blocked_id FROM blockList WHERE blocker_id = ?)\
        AND id NOT IN (SELECT blocker_id FROM blockList WHERE blocked_id = ?)",
        checkLike: "SELECT * FROM likesList WHERE (liker_id = ? AND liked_id = ?)",
        checkBlock: "SELECT * FROM blockList WHERE (blocker_id = ? OR blocked_id = ?) AND (blocker_id = ? OR blocked_id = ?)",
        getNotif: "SELECT users.id, users.username, content, notifications.id, seen FROM notifications,users \
                WHERE notifications.receiver = ? AND users.id = notifications.by ORDER BY notifications.id DESC",
   },
    INSERT: {
        AddUser: 'INSERT INTO users (firstname, lastname, username, email, password) VALUES (?, ?, ?, ?, ?)',
        InsertUserTag: "INSERT INTO useTags (id_user, id_tag) VALUES (?, ?)",
        CreateTag: "INSERT INTO tags (tag, create_tag) VALUES (?, ?)",
        blockUser : "INSERT INTO blockList (blocker_id, blocked_id,date) VALUES (?, ?, NOW())",
        AddPic: 'INSERT INTO pics (user_id, path, isProfilePic) VALUES (?, ?, ?)',
        likeUser :'INSERT INTO likesList (liker_id, liked_id, date) VALUES (?, ?, NOW())',
        insertNotif: "INSERT INTO notifications (`by`, receiver, content, seen) VALUES (?, ?, ?, ?)",
        insertMessage: "INSERT INTO messages (sender, receiver, message) VALUES (?, ?, ?)",
        reportUser: "INSERT INTO reportList (reporter_id, reported_id,date) VALUES (?, ?, NOW())",
        viewProfileUser :   "INSERT INTO viewProfileList (viewer, viewed, date) VALUES (?,?,NOW())",

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
        updateRating: 'UPDATE users SET rating = rating + ?  WHERE id = ? AND rating <= 5',
        openNotif: 'UPDATE notifications SET seen = 1 WHERE receiver = ?',

    },
    DELETE: {
        delPics: 'DELETE FROM `pics` WHERE id = ? && user_id = ?',
        DeleteUserTags: "DELETE FROM `useTags` WHERE id_user = ?",
        deblockUser: "DELETE FROM blockList WHERE blocker_id = ? AND blocked_id = ?",
        delNotif: "DELETE FROM `notifications` WHERE id = ?",
        dislikeUser: "DELETE FROM likesList WHERE liker_id = ? AND liked_id = ?",
    },
}

module.exports = queries;