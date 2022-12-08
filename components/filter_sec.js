
import { ChangeHandler } from "../utilities";

export default function FilterSec({filter_func}) {
    return (
        <div className="content">
            <h3>coast</h3>
            <select value={"none"} onChange={(e) => ChangeHandler(filter_func,"filter",e)}>
                <option value="none">none</option>
                <option value="East">East</option>
                <option value="West">West</option>
            </select>
        </div>  
    );
}