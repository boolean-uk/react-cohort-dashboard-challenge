import { useEffect } from "react";
function Main(props) {
  const { showComments, setShowComments } = props;
  useEffect(()=>console.log('this is home',showComments ), [showComments]);
  return (
    <main>
      {showComments.map((data, index) => (
        <p key={index}>{data.content}</p>
      ))}
    </main>
  );
}
export default Main;
