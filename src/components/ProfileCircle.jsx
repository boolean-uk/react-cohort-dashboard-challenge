import "../styles/ProfileCircle.css";

export default function ProfileCircle({ fullname, color }) {
  const fullnameSplit = fullname.split(" ");

  return (
    <div className="circle" style={{ backgroundColor: color }}>
      <p>
        {fullnameSplit[0][0]}
        {fullnameSplit[1][0]}
      </p>
    </div>
  );
}
