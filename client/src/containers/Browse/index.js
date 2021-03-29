import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Browser from "../../components/Browser";
import {getTags} from '../../actions/InfosAction';
import { getUsers , sortUsers, likeUser, dislikeUser,blockUser,reportUser, viewProfileUser} from "../../actions/userAction";
import { resetStateUsers } from "../../actions/resetStateAction";
import MyModal from "../../components/commun/modal";
import ViewPro from "../../components/Browser/sneakpeak";
const Browse = (props) => {
  const {users, getUsers, getTags, route, sortUsers, likeUser, dislikeUser, reportUser, blockUser, viewProfileUser ,selectTags} = props;
  const [indice, setIndice] = useState(0);
  const [sort, setSort] = useState(false);
  const [rating, setValueRating] = useState([0, 0]);
  const [suggestion, setSuggestion] = useState(true);
  const [age, setValueAge] = useState([18, 18]);
  const [loc, setValueLoc] = useState([0, 0]);
  const [methode, setMethode] = useState(null);
  const [nbrTags, setValueNbrTags] = useState([0, 0]);
  // // const route = router.location.pathname;
  const [tags, setValuetags] = useState(null);
  const [state, setState] = useState({
    open: false,
    user: null,
    images: null,
    tags: null,
  });
  let arrayTags = [];
    tags && tags.forEach(item => {
        arrayTags.push(item.value);
    });
  const filtre = {
    tags : arrayTags,
    nbrTags: nbrTags,
    rating: rating,
    age: age,
    loc: loc,
    router: route,
  };
  useEffect(() => {
    getTags();
    setValueRating([0,0]);
    setValueAge([18, 18]);
    setValueLoc([0, 0]);
    setValueNbrTags([0, 0]);
    setValuetags(null);
    setIndice(0);
    getUsers(null, 0);
}, [getUsers,getTags]);

  const handleChangeRating = (e, newValue) => {
    setValueRating(newValue);
    return newValue;
  };
  const handleChangeAge = (e, newValue) => {
    setValueAge(newValue);
    return newValue;
  };
  const handleChangeLoc = (e, newValue) => {
    setValueLoc(newValue);
    return newValue;
  };
  const handleChangeNbrTags = (e, newValue) => {
    setValueNbrTags(newValue);
    return newValue;
  };
  const handleSubmit = () => {
    if(arrayTags.length === 0 && nbrTags[0] === 0 && nbrTags[1] === 0 && rating[0] === 0
      && rating[1] === 0 && loc[0] === 0 && loc[1] === 0 && age[0] === 18  && age[1] === 18)
      {
            resetStateUsers();
            getUsers(null,0);
            return ;
        }
    setSuggestion(false);
    setSort(false);
    setIndice(0);
    getUsers(filtre,0);
};
const handle = (methode) => {
  setIndice(0);
  setSort(true);
  setSuggestion(false);
  setMethode(methode);
  sortUsers(methode,route,0);
};
const handleBlock = (blocked_user_id) => {
  blockUser(blocked_user_id);
  setState({
      open: false,
  });
};
const handleDislike= (dislike_user_id) =>{
  dislikeUser(dislike_user_id);
  setState({
      open: false,
  });
};
const handleLike = (liked_user_id) => {
  likeUser(liked_user_id);
  setState({
      open: false,
  });
};
const handleReport = (reported_user_id) => {
  reportUser(reported_user_id);
  setState({
      open: false,
  });
};
const handleChangeTags = (newValue) => {
  setValuetags(newValue);
  return newValue;
};
window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      
      if(sort === true)
          sortUsers(methode,'Browser',indice+1);
      else if(suggestion === true)
          getUsers(filtre,indice+1)    
      setIndice(indice + 1);
  }
};
const handleViewProfile = (user,images,tags) => {
  viewProfileUser(user.id);
  setState({
      open: true,
      user: user,
      images: images,
      tags: tags,
  });
};
const handleClose = () => {
  setState({
      open: false,
  });
};
  return(
    <div>
            <Browser users={users} selectTags={selectTags} handleChangeRating={handleChangeRating} handleChangeAge={handleChangeAge} handleChangeLoc={handleChangeLoc} handleDislike={handleDislike}
          handleChangeNbrTags={handleChangeNbrTags} handle={handle} handleLike={handleLike} rating={rating} loc={loc}  age={age} nbrTags={nbrTags} handleSubmit={handleSubmit}
          handleBlock={handleBlock} handleReport={handleReport} handleViewProfile={handleViewProfile} handleChangeTags={handleChangeTags}/>
          {state.open && <MyModal isOpen={state.open}  handleClose={handleClose}>
          <ViewPro    handleBlock={handleBlock} handleLike={handleLike} handleReport={handleReport}
                        handleDislike={handleDislike} user={state.user} images={state.images} tags={state.tags}
                        />
        </MyModal>}
   </div>
  )
  // users={users} handleChangeRating={handleChangeRating}
  // handleChangeAge={handleChangeAge} handleChangeLoc={handleChangeLoc} handleChangeNbrTags={handleChangeNbrTags} rating={rating}
  // handleChangeTags={handleChangeTags} loc={loc} nbrTags={nbrTags} age={age} handleSubmit={handleSubmit} />;
};
const mapStateToProps = (state) => ({
  user: state.user,
  users: state.users,
  selectTags: state.addInfo.selectTags,
  // router: state.router,
});
const mapDispatchToProps = {
  "getTags": getTags,
  "getUsers" : getUsers,
  "sortUsers" : sortUsers,
  "likeUser" : likeUser,
  "dislikeUser" : dislikeUser,
  "reportUser" : reportUser,
  "viewProfileUser" : viewProfileUser,
  "blockUser" : blockUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Browse);