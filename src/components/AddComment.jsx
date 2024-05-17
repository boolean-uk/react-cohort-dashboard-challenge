import Avatar from "./Avatar";

export default function AddComment() {
  return (
    <div className="flex items-center">
      <Avatar />
      <input
        type="text"
        className="border-2 rounded-md bg-[#e6ebf5] w-full h-full"
        placeholder="Add a comment..."
      />
    </div>
  );
}
