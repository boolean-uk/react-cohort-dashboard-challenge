export default function UserName({firstName, lastName, contact}) {
  return <h2 className="user-name text-lg font-bold">
    {firstName} {lastName}
  </h2>
}