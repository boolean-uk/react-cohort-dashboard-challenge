import { Route, Routes } from "react-router-dom";
import PostsDashboard from "./PostsDashboard";

export default function MainComponent({ loggedInUser }) {
    return (
        <main>
            <Routes >

                <Route path="/" element={<PostsDashboard loggedInUser={loggedInUser}/>}/>

            </Routes>
        </main>
    )
}