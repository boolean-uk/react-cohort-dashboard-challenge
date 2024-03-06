import React from 'react';
import { Link } from 'react-router-dom';

function ContactListItem({ post }) {
  return (
    
      
        {post.title} {post.content}
    
  );
}

export default ContactListItem;

