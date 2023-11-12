
function Home() {
  return (
    <>
      <main>
        <label>
          <input
            type="text"
            name="user"
            placeholder="what's on your mind?"
          ></input>
          
        </label>
        <input className="form__submit" type="submit" value="Post" />
    

      </main>
    </>
  );
}
export default Home;
