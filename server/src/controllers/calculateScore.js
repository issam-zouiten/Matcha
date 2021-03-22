
const DistanceScore = distance => {
    return Math.exp(distance * - 0.01)
}
const tagssScore = tags => {
  return   1 - Math.exp(tags * -1)
}

const MatchingFilter = (user2) => {
    const distancefilter = DistanceScore(user2.distance);
    const tagssfilter = tagssScore(user2.nbrTags);
    const popularityfilter = user2.rating;
    const Online = user2.Online;
    const MatchScore = (distancefilter * 3 + tagssfilter * 3 + popularityfilter * 3 + Online * 3) / (12);
    return MatchScore.toFixed(5);
    
}
module.exports = MatchingFilter