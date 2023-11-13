import { useState } from "react";

// components
import InputElement from "../../../components/InputElement";
import UserCycle from "../../../components/UserCycle";

const CreatePostInput = () => {
    const [inputValue, setInputValue] = useState("");

    const submitInput = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };

    return (
        <form onSubmit={submitInput} className="createPostInput">
            <UserCycle name={{ firstName: "Nazar", lastName: "Tymiv" }} />

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
