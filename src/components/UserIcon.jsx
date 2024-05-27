export default function UserIcon ({userInfo}) {

    // console.log(userInfo)
    return (
        <div className="pContainer">
            <div className="profileCircle">
               <p>{userInfo.firstName[0]+userInfo.lastName[0]}</p>
               {/* <p>Fix</p> */}
            </div>
        </div>


    )
}