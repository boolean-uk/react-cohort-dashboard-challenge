import { useState } from "react";

// components
import InputElement from "../../../components/InputElement";
import UserCycle from "../../../components/UserCycle";

const CreatePostInput = ({ user }) => {
    const [inputValue, setInputValue] = useState("");

    const submitInput = (e) => {
        e.preventDefault();
        console.log(inputValue);
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

            <InputElement
                placeholder="What's on your mind?"
                value={inputValue}
                setValue={setInputValue}
            />

            <button className="createPostInput__button">Post</button>
        </form>
    );
};

export default CreatePostInput;
