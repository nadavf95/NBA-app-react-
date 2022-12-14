

export default function FilterSec({ChangeHandler}) {
    return (
        <div className="contentFIlter">
            <h3>coast</h3>
            <select  onChange={(e) => ChangeHandler("filter",e.target.value)}>
                <option value="none">none</option>
                <option value="East">East</option>
                <option value="West">West</option>
            </select>
        </div>  
    );
}