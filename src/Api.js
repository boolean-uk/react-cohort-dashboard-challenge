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

export default function getAllComments(
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
