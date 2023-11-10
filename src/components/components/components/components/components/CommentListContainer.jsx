import CommentContainer from "./components/CommentContainer"

export default function CommentListContainer() {
    return(
        <>
            <section>
                {/* make this functional if doing extensions */}
                <p>See previous comments</p>
                <ul>
                    <CommentContainer />
                </ul> 
            </section> 
        </>
    )
}