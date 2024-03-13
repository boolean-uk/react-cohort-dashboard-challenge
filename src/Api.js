export function getAContactByID(id, setFunction) {
  fetch(`https://boolean-api-server.fly.dev/MackanPalm/contact/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      console.log("Contact", data);
      setFunction(data);
    })
    .catch((error) => {
      console.error("Error fetching contact data: ", error);
    });
}

export function getAllPosts(setPostsData, setLoading, setError) {
  fetch(`https://boolean-api-server.fly.dev/MackanPalm/post`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      console.log(data);
      setPostsData(data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
}

export function getAllComments(
  id,
  setCommentsList,
  setCommentsError,
  setLoadingComments
) {
  fetch(`https://boolean-api-server.fly.dev/MackanPalm/post/${id}/comment`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      console.log("comments", data);
      setCommentsList(data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setCommentsError(error);
    })
    .finally(() => {
      setLoadingComments(false);
    });
}

export function makeNewPostToAPI(postRequestOption, setPostsData, postsData) {
  fetch("https://boolean-api-server.fly.dev/MackanPalm/post", postRequestOption)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      setPostsData([...postsData, data]);
    })
    .catch((err) => {
      console.log(err);
      //add something for the user to see
    });
}

export function postNewCommentToAPI(
  id,
  postRequestOption,
  setCommentsList,
  commentsList
) {
  fetch(
    `https://boolean-api-server.fly.dev/MackanPalm/post/${id}/comment`,
    postRequestOption
  )
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      }
      throw responce;
    })
    .then((data) => {
      setCommentsList([...commentsList, data]);
    })
    .catch((err) => {
      console.log(err);
      //add something for the user to see
    });
}

export function getAPostByID(postId, setCurrentPost) {
  fetch(`https://boolean-api-server.fly.dev/MackanPalm/post/${postId}`)
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      }
      throw responce;
    })
    .then((data) => {
      setCurrentPost(data);
    })
    .catch((err) => {
      console.log(err);
      //add something for the user to see
    });
}

export default { getAContactByID, getAllComments };
