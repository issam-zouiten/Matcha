
const DistanceScore = distance => {
  return Math.exp(distance * - 0.01)
}
const tagsScore = tags => {
return   1 - Math.exp(tags * -1)
}

const MatchingFilter = (user2) => {
  const distancefilter = DistanceScore(user2.distance);
  
  const tagssfilter = tagsScore(user2.nbrTags);
  const popularityfilter = user2.rating;
  const Online = user2.online;
  const MatchScore = (distancefilter * 4 + tagssfilter * 3.5 + popularityfilter * 2.5 + Online * 2) / (12);
  return MatchScore.toFixed(5);
  
}
module.exports = MatchingFilter