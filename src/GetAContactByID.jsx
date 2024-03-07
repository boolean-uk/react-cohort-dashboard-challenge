function GetAContactByID(id) {
  fetch(`https://boolean-api-server.fly.dev/MackanPalm/contact/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      console.log("Contact", data);
      return data;
    })
    .catch((error) => {
      console.error("Error fetching contact data: ", error);
    });
}
export default GetAContactByID;
