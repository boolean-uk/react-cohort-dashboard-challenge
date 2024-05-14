export default function Avatar(props) {
  const { children } = props;
  const initial =
    children?.firstName[0].toUpperCase() + children?.lastName[0].toUpperCase();

  return (
    <div
      className="avatar"
      style={{ backgroundColor: children?.favouriteColour }}
    >
      {initial}
    </div>
  );
}
