import { useState } from "react";

// components
import InputElement from "../../../components/InputElement";
import UserCycle from "../../../components/UserCycle";

// api
import { createNewPost } from "../../../utilities/api";

const CreatePostInput = ({ user, getPosts }) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputValue, setInputValue] = useState("");

    const submitInput = (e) => {
        e.preventDefault();
        createNewPost({
            contactId: user.id,
            title: inputTitle,
            content: inputValue,
        }).then(() => getPosts());

        setInputTitle("");
        setInputValue("");
    };

    return (
        <form onSubmit={submitInput} className="createPostInput">
            {Object.keys(user).length && (
                <UserCycle
                    name={{
                        firstName: user.firstName,
                        lastName: user.lastName,
                    }}
                />
            )}

            <div className="createPostInput__inputs">
                <InputElement
                    placeholder="What's your title?"
                    value={inputTitle}
                    setValue={setInputTitle}
                />

                <InputElement
                    placeholder="What's on your mind?"
                    value={inputValue}
                    setValue={setInputValue}
                />
            </div>

            <button className="createPostInput__button">Post</button>
        </form>
    );
};

export default CreatePostInput;
