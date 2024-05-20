export default function avatarColor() {

    const generateRandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    
    return (
        <p className="logged-user" onChange={generateRandomColor}>ML</p>
    )

}