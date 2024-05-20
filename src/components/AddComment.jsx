import Avatar from "./Avatar";

export default function AddComment() {
  const userId=1
  return (
    <div className="flex items-center">
      
      <Avatar userId={userId} />
      <input
        type="text"
        className="border-2 rounded-md bg-[#e6ebf5] w-full h-16 my-5"
        placeholder="Add a comment..."
      />
    </div>
  );
}
