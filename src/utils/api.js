export const fetchData = async (URL, id, setDataCallback) => {
  try {
    const response = await fetch(`${URL}/${id}`);

    if (!response.ok) {
      console.log(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    setDataCallback(data);
  } catch (error) {
    console.log("OBS!!! Something went wrong:", error.message);
  }
};
