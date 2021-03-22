const user = require('../models/user');
module.exports = {
    getTags : async function (id) {
        let data = [];
        const tags = await user.getUserTags(id);
        if(tags)
        {
            for (var j = 0; j < tags.length; j++) {
                data[j] = tags[j].value;
            }
        }
        return data;
    },
    calculateNbrTagsCommun : async function (user1,user2) {
        const tagsU1  = await user.getUserTags(user1.id);
        const tagsU2  = await user.getUserTags(user2.id);
        let nbrTagsComm = 0;
        if(tagsU1 === null || tagsU2 === null)
            return 0;
        for (var i = 0; i < tagsU1.length; i++) {
            for (var j = 0; j < tagsU2.length; j++) {
                if(tagsU1[i].value === tagsU2[j].value)
                    nbrTagsComm++;
            }
        }
        return nbrTagsComm;
    }
}