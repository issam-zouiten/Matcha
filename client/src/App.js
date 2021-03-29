import React, {useEffect}  from 'react';
import Routes from './Routes/Routes';
import Navbar from './containers/Navbar';
import Footer from './components/Footer';
import socket from './socketConn';
import {NewNotif, GetNotif, OpenNotifSuccess} from './actions/notifAction';
import './App.css'
function App(props) {
  // console.log(props);
  useEffect(() => {
    props.store.dispatch(GetNotif());
    const handleNotif = (data) => {
      props.store.dispatch(NewNotif(data));
    }
    const handleOpenNotif = () => {
      props.store.dispatch(GetNotif());
      props.store.dispatch(OpenNotifSuccess());
    }
    socket.on('new_notif', handleNotif);
    socket.on('openedNotif', handleOpenNotif);
  }, [props.store])
  const handlerFunc =  () =>  {
    // console.log('connected')
    props.store.dispatch({type: "REJOIN_ROOM"});
  }
  socket.on('connect', handlerFunc)
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}
export default App;