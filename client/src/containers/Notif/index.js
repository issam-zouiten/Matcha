import React, {useEffect} from 'react'
import {connect} from "react-redux";
import Notif from '../../components/Notif';
import {delNotif, GetNotif} from '../../actions/notifAction';

const NotifCont = (props) => {
    const {notifList, delNotif, notif, GetNotif}  = props;

    useEffect(() => {
        GetNotif();
    }, []);
    
    const deleteNotif= (notifId) => {
        const notif = {
         notifId : notifId,
        }
        delNotif(notif);
        GetNotif();
    }
  
    return (
        <div>
            <Notif notif={notif} notifList={notifList} deleteNotif = {deleteNotif} />
        </div>
    )
}
const mapStateToProps = (state) => (
{
    "user": state.user,
    "notifList": state.notif.notifications,
    "notif" : state.notif
});
const mapDispatchToProps = {
    delNotif : delNotif,
    GetNotif : GetNotif,
};

export default connect(mapStateToProps,mapDispatchToProps)(NotifCont);