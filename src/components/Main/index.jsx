import Card from "./Card";

export default function Main() {
    return(
        <main className="main">
            <Card  cardType={"CreatePost"}/>
            <Card  cardType={"Post"}/>
        </main>
    )
}