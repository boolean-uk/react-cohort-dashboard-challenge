import "./Body.css";
import Feed from "./Feed";
import WritePost from "./WritePost";
export default function Body() {
  return (
    <>
      <div className="main-body">
        <WritePost />
        <Feed />
      </div>
    </>
  );
}
