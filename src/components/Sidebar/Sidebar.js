import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Avatar, Input } from '@material-ui/core';
import LetsChat from '../assets/letschat.png';
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={LetsChat}/>
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <SearchIcon />
                    <Input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;