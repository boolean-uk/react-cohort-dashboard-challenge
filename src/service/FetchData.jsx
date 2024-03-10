const fetchData = async (url, setFunc) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setFunc(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
}

export default fetchData