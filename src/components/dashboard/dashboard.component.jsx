import React from 'react'
import NavComponent from '../nav/nav.component'
import HeaderComponent from '../header/header.component'
import { Link, Route, Routes } from 'react-router-dom';

import './dashboard.css'
import FeedComponent from '../feed/feed.component'
import ProfileComponent from '../profile/profile.component';
import PostviewComponent from '../post/postview.component';

const DashboardComponent = () => {
  return (
    <>
        <div className="page-wrapper">
            <NavComponent/>
            <HeaderComponent/>
            

            <Routes>
                <Route path="/" element = {<FeedComponent/>} />
                <Route path="/profile" element = {<ProfileComponent/>} />
                <Route path="/post/:id" element = {<PostviewComponent/>}/>
            </Routes>

        </div>
    </>
  )
}

export default DashboardComponent
