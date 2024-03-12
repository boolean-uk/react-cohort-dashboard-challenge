import { URLS } from "./URLS";

export const postCommentRequest = (postId: number, content: string, contactId: number) => {
  const apiRequest = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        postId,
        content,
        contactId
      })
  }
  return fetch(`${URLS.POSTS}/${postId}/comment`, apiRequest);
}

export const postPostRequest = (title: string, content: string, contactId: number) => {
    const apiRequest = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            content,
            contactId
        })
    }
    return fetch(`${URLS.POSTS}`, apiRequest);
}
