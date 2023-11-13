function Post() {
  return (
    <div className="commentContainer">
      <div className="commentSection">
        <div className="userInfoCon">
          <div className="intialsInCommentCon">
            <p>SF</p>
          </div>
          <div className="nameTitleCon">
            <div className="name">
              <p>
                <strong>Sam Fletcher</strong>
              </p>
            </div>
            <div className="title">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ab
            molestiae, excepturi repellendus possimus, aspernatur officiis eos
            porro aperiam suscipit aut fugiat? Voluptas recusandae quia sint,
            qui reiciendis placeat magnam!
          </p>
        </div>
      </div>

      <div className="addAComment">
        <div className="userInitialsComment">
          <p>AW</p>
        </div>
        <div className="commentInput">
          <form>
            <input
              className="inputAComment"
              placeholder="Add a comment..."
              type="text"
            />
          </form>
        </div>
        <div className="commentButton">
          <button>
            <img src="src/assets/send-svgrepo-com.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
