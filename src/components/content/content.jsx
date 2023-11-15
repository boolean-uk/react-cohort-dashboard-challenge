import CreatePost from "./subcomponents/createPost";

import TestPost from "./subcomponents/post"

const testContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
const testDesc = "this is a test description"

function Content() {
    return (
        <>
        <main className="content">
            <CreatePost/>
            <div className="post-container">
                <TestPost
                name="Sam Fletcher"
                UID={2}
                desc={testDesc}
                postContent={testContent}
                />
                <TestPost
                name="Dolor Labortis"
                UID={3}
                desc={testDesc}
                postContent={testContent}
                />
            </div>
        </main>
        </>
    )
}

export default Content;