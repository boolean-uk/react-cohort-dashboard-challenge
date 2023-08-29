import { useContext } from "react";
import DataContext from "../../DataContext";

function RequiredPostFieldWarning() {
    const { requiredFieldError } = useContext(DataContext);
    return <>{requiredFieldError && <p class="error">Required field</p>}</>;
}

export default RequiredPostFieldWarning;
