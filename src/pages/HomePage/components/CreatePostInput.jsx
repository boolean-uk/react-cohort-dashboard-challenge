import { useContext, useState } from "react";

// components
import InputElement from "../../../components/InputElement";
import UserCycle from "../../../components/UserCycle";

// api
import { createNewPost } from "../../../utilities/api";

// context
import { MainContext } from "../../../App";

const CreatePostInput = () => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputValue, setInputValue] = useState("");

    // context
    const { user, getPosts } = useContext(MainContext);

    const submitInput = (e) => {
        e.preventDefault();

        if (inputTitle.length > 0 && inputValue.length > 0) {
            createNewPost({
                contactId: user.id,
                title: inputTitle,
                content: inputValue,
            }).then(() => getPosts());

            setInputTitle("");
            setInputValue("");
        }
    };

    return (
        <form onSubmit={submitInput} className="createPostInput">
            {Object.keys(user).length && (
                <UserCycle
                    name={{
                        firstName: user.firstName,
                        lastName: user.lastName,
                    }}
                    userId={user.id}
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
