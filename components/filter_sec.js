

export default function FilterSec({ChangeHandler}) {
    return (
        <div className="contentFIlter">
            <h2>coast:</h2>
            <select  onChange={(e) => ChangeHandler("filter",e.target.value)}>
                <option value="none">none</option>
                <option value="East">East</option>
                <option value="West">West</option>
            </select>
        </div>  
    );
}