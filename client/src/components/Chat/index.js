import React, { useState } from 'react';
import './chat.css';
import MyFlash from '../commun/flash'
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

const Conversations = (props) => {
    const { handleSelectConversation, selected, conversations } = props;
    return (
        <div id="sidepanel">
            <div id="contacts">
                <ul>
                    {selected && conversations.map(item => (
                        <li onClick={() => handleSelectConversation(item.id)} key={item.id} className={selected.id === item.id ? "contact active" : "contact"}>
                            <div className="wrap">
                                <span className={item.online === 1 ? "contact-status online" : "contact-status offline"}></span>
                                <img src={`http://localhost:3001/${item.path}`} alt={item.lastname} />
                                <div className="meta">
                                    <p className="name">{item.firstname} {item.lastname}</p>
                                </div>
                            </div>
                        </li>

                    ))
                    }
                </ul>
                <hr />
            </div>
        </div>
    );
}

const ConvTitle = (props) => {
    const { selected } = props;
    return (
        <div className="contact-profile">
            <img src={`http://localhost:3001/${selected.path}`} alt={selected.lastname} />
            <p>{selected.firstname} {selected.lastname}</p>
        </div>
    );
}

const Messages = (props) => {
    const { selected } = props;
    return (
        <div className="messages">
            <ul>
                {selected.messages && selected.messages.length > 0 && selected.messages.map(item => (
                    <li key={Math.random()} className={item.isMyMessage ? "sent" : "replies"}>
                        <img src={`http://localhost:3001/${item.path}`} alt={item.image} />
                        <p>{item.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const SendMessage = (props) => {
    const { handleSendMessage, selected, dis } = props;
    const [message, setMessage] = useState("");
    const handleChange = e => setMessage(e.target.value);
    const handleSubmit = form => {
        form.preventDefault();
        if (message.length > 255) setMessage("");
        else if (message) {
            handleSendMessage(selected.id, message);
            let cont = document.querySelector('.messages');
            const height = cont.scrollHeight;
            cont.scrollTo(0, height);
            setMessage("");
        }
        document.querySelector('.message-input input').value = null;
    }
    return (
        <div className="message-input">
            <div className="wrap">
                <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center' }}>
                    <input onChange={handleChange} className="text-msg" type="text" placeholder="Write your message..." disabled={dis} />
                    <IconButton type="submit" className="submit" ><SendIcon/></IconButton>
                </form>
            </div>
        </div>
    );
}

const Content = (props) => {
    const { handleSendMessage, selected, dis } = props;
    return (
        <div className="content">
            {Object.keys(selected).length > 0 ? (
                <>
                    <ConvTitle selected={selected} />
                    <Messages selected={selected} />
                    <SendMessage dis={dis} handleSendMessage={handleSendMessage} selected={selected} />
                </>) :
                <p id="selectCon">Select a conversation</p>
            }
        </div>
    );
}

const Chat = (props) => {
    const { handleSelectConversation, err, handleSendMessage, selected, conversations } = props;
    let disable = false;
    if (err)
        disable = true;
    return (
        <div id="frame">
            {err && <MyFlash variant="error" msg={[err]} />}
            {conversations.length > 0 ? (
                <>
                    <Conversations handleSelectConversation={handleSelectConversation} selected={selected} conversations={conversations} />
                    <Content dis={disable} handleSendMessage={handleSendMessage} selected={selected} conversations={conversations} />
                </>) :
                <p id="noMatches">No matches</p>
            }
        </div>
    );
}

export default Chat;