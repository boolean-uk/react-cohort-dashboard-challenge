import { useState } from "react";
import postData from "../../../../js_functions/post";
import { useEffect } from "react";
import putData from "../../../../js_functions/put";

const initialForm = {
  title: "",
  content: "",
  contactId: undefined,
};

export default function PostForm({
  setReloadPostList,
  reloadPostList,
  reloadComments,
  setReloadComments,
  post,
  edit,
  liRef
}) {

  const [form, setForm] = useState(initialForm);
  const titleExtractedFromPost = form.content.slice(0, 20);
  //allows the form to be set to the value of the comment we want to edit
  useEffect(() => {

    post && post.title !== titleExtractedFromPost + "..."
      ? setForm(post)
      //handles cases where the title had been generated based on post content
      : post && setForm({ ...post, title: "" });
        //it wants 'titleExtractedFromPost in the dependencies. The issue with that is that is results in the value of the input being reset to post.content with each click, making modifications impossible. Which is why I ended up getting rid of it. 
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title) {
      form.title = titleExtractedFromPost + "...";
    }
    edit ? putData(`post/${post.id}`, form) : postData("post", form);
    setForm(initialForm);
    setReloadPostList(!reloadPostList);
    setReloadComments(!reloadComments);
    // the line of code below (44) was me trying to find ways to scroll down to the newly edited comment (seems pretty bad UX to have the user manually scroll back down to where they were after having edited something)- it's also why I had a go at trying to use HashLink for a bit. Couldn't seem to make it work - something to figure out later 
    // liRef.current.scrollIntoview({behavior: 'smooth'})
  };

  const handleChange = (e) => {
    edit
      ? setForm({ ...form, [e.target.name]: e.target.value })
      : setForm({ ...form, [e.target.name]: e.target.value, ["contactId"]: 1 });
  };

  return (
    <>
      <form>
        <input
          onChange={(e) => handleChange(e)}
          value={form.title}
          name="title"
          type="text"
          placeholder="What is it about?"
        />
        <textarea
          onChange={(e) => handleChange(e)}
          value={form.content}
          name="content"
          type="text"
          placeholder="Share your thoughts!"
        />
        <button onClick={(e) => handleSubmit(e)}>
          {edit && post ? "Edit" : "Post"}
        </button>
      </form>
    </>
  );
}
