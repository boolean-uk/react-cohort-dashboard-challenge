export default function avatarColor() {

    let r;
    let g;
    let b;
    for (let i = 0; i <= 256 && i >= 80; i++) {
        return r[i]
    }
    for (let j = 0; j <= 256 && j >= 80; j++) {
        return g[j]
    }
    for (let o = 0; o <= 256 && o >= 80; o++) {
        return b[o]
    }

    const generateRandomColor = () => {
        const red = Math.floor(Math.random() * r);
        const green = Math.floor(Math.random() * g);
        const blue = Math.floor(Math.random() * b);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    
    return (
        <p className="logged-user" onChange={generateRandomColor}>ML</p>
    )

}