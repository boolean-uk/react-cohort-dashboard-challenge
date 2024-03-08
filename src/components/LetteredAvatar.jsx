import React from "react";


export default function LetteredAvatar ({ contact }) {

    console.log('LetteredAvatar Name: ', contact)

    if (!contact || !contact.firstName || !contact.lastName) return null;

    const name = `${contact.firstName} ${contact.lastName}`;

    const initials = getInitials(name);
    const color = generateBackground(name, contact);

    const customStyle = {
        display: "flex",
        height: "50px",
        width: "50px",
        borderRadius: "100px",
        color: "white",
        background: color,
        margin: "auto"
    }

    return (
        <div style={customStyle}>
            <span> {initials} </span>
        </div>
    );
}

function getInitials(name) {
    return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
}

function generateBackground(name, contact) {
    let hash = 0;
    let i;

    for (i = 0; i < name.length; i += 1) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    // let color = '#';
    // for (i = 0; i < 3; i += 1) {
    //     const value = (hash >> (i * 8)) & 0xff;
    //     color += `00${value.toString(16)}`.slice(-2);
    // }
    const color = contact.favouriteColour

    return color;
}