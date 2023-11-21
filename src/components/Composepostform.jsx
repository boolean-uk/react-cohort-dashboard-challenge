import { useState } from "react";
function ComposePostForm() {
  return (
    <>
      <form id="firstform">
        <input
          name="user"
          type="text"
          placeholder="What's on your mind?"
          value=""
        ></input>
      </form>
      <input className="form__submit" type="submit" value="post" />
    </>
  );
}
export default ComposePostForm;
