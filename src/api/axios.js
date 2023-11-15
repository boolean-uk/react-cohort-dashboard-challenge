import axios from 'axios'


export const githubUsername = 'MOBEENMUHAMMAD'
export const baseUrl = `https://boolean-api-server.fly.dev/${githubUsername}`

 

export async function fetchPosts() {
  try {
    const response = await axios.get(`${baseUrl}/post`);
    const posts = response.data;

    const enrichedPosts = await Promise.all(
      posts.map(async (post) => {
        const userResponse = await axios.get(`${baseUrl}/contact/${post.contactId}`);
        const userData = userResponse.data;

        post.authorName = `${userData.firstName} ${userData.lastName}`;
        post.authorInitials = `${userData.firstName} ${userData.lastName}`
          .split(' ')
          .map((name) => name[0])
          .join('')
          .toUpperCase();

        return post;
      })
    );
    console.log(enrichedPosts);
    return enrichedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function fetchPostById(id) {
  try {
    const postResponse = await axios.get(`${baseUrl}/post/${id}`);

    const userId = postResponse.data.contactId;

    const userResponse = await axios.get(`${baseUrl}/contact/${userId}`);

    const postData = postResponse.data;
    const userData = userResponse.data;

    postData.authorName = `${userData.firstName} ${userData.lastName}`;
    postData.authorInitials = `${userData.firstName} ${userData.lastName}`
      .split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase();

    return postData;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}

export async function addPost(addedPost) {
  try {
    const response = await axios.post(`${baseUrl}/post`, addedPost, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
}

export async function editPost(id, editedPost) {
  try {
    const response = await axios.patch(`${baseUrl}/post/${id}`, editedPost, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing post:", error);
    throw error;
  }
}

export async function deletePost(id) {
  try {
    const response = await axios.delete(`${baseUrl}/post/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
}

export async function fetchUserById(id) {
  try {
    const response = await axios.get(`${baseUrl}/contact/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export async function fetchUsers() {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users `);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function editUser(id, editedUser) {
  try {
    const response = await axios.patch(`${baseUrl}/contact/${id}`, editedUser, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing user:", error);
    throw error;
  }
}

export async function fetchComments(id) {
  try {
    const response = await axios.get(`${baseUrl}/post/${id}/comment`);
    let commentIdCounter = 11;
    const authorIdMap = new Map();

    return response.data.map((comment) => {
      let authorId = authorIdMap.get(comment.email);
      if (!authorId) {
        authorId = `${commentIdCounter++}`;
        authorIdMap.set(comment.email, authorId);
      }

      const authorName = comment.email
        .split('@')[0]
        .split('.')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      const emailParts = comment.email.split('@');
      const authorInitials = emailParts[0]
        .split('.')
        .map((word) => word.charAt(0).toUpperCase())
        .join('');

      return {
        ...comment,
        authorName: authorName,
        authorInitials: authorInitials,
        userId: authorId,
      };
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

export async function addComment(id, addedComment) {
  try {
    const response = await axios.post(`${baseUrl}/post/${id}/comment`, addedComment, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
}

export async function editComment(commentId, editedComment) {
  try {
    const response = await axios.patch(`${baseUrl}/post/comment/${commentId}`, editedComment, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing comment:", error);
    throw error;
  }
}

export async function deleteComment(commentId,postId) {
  try {
    const response = await axios.delete(`${baseUrl}/post/${postId}/comment/${commentId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
}
