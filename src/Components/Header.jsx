/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import headerLogo from '/header-logo.svg'
import '../styles/Header.css'


export default function Header() {
    return (
        <div className="header">
            <img src={headerLogo} className='header-logo' alt="Header logo" />
        </div>
    );
}