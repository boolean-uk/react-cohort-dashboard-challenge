import { Bars } from "react-loader-spinner";

function Loader() {
    return (
        <div className="loading-container">
            <Bars color="#000046" height={150} width={150} />
        </div>
    );
}

export default Loader;
