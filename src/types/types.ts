export type UserType = {
    id: number;
    firstName: string;
    lastName: string
    favouriteColour: string;
}

export type PostType = {
    id: number;
    contactId: number;
    title: string;
    content: string;
}

export type PostComment = {
    id: number;
    postId: number;
    contactId: number;
    content: string;
}

