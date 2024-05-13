import AddComment from "./AddComment";
import Author from "./Author";

export default function Post() {
    return (
        <article>
            <Author />

            <p>Até agora, gostando muito dessa rede social</p>

            <AddComment />
        </article>
    )
}