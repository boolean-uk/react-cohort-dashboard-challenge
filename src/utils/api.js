export const fetchData = async (URL, ids, setDataCallback) => {
  try {
    const responses = await Promise.all(ids.map((id) => fetch(`${URL}/${id}`)));

    const data = await Promise.all(
      responses.map((response) => response.json())
    );
    setDataCallback(data);
  } catch (error) {
    console.log("OBS!!! Something went wrong:", error.message);
  }
};
