export type Post = {
    id: Number;
    contactId: Number;
    title: string;
    content: string;
};

export type Comment = {
    id: Number;
    postId: Number;
    contactId: Number;
    content: string;
};

export type Contact = {
    id: Number;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    jobTitle: string;
    street: string;
    city: string;
    latitude: Number;
    longitude: Number;
    favouriteColour: string;
    profileImage: string;
}

export type UserContextType = {
    user: Contact | undefined;
    setUser: React.Dispatch<React.SetStateAction<Contact | undefined>>;
    users: Array<Contact>;
    setUsers: React.Dispatch<React.SetStateAction<Contact[]>>;
}

export type PostsContextType = {
    posts: Array<Post>
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}