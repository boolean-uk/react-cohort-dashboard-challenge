import ProfileImage from "../../../../ProfileImage"

export default function Comment(){
    return(
        <li className='comment'>
                    <ProfileImage />
                    <article>
                        <h5>Name Lastname</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Molestias consequatur, repudiandae quam
                            similique quasi temporibus ducimus at nisi nam
                            numquam. Totam enim iste eaque adipisci? Fugit
                            similique odio reprehenderit vel.
                        </p>
                    </article>
                </li>
    )
}