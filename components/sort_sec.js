
export default function SortSec({ChangeHandler}) {
    return (
        <div className="contentSort">
            <h3>sort by</h3>
            <select value={"a-z"} onChange={(e) => ChangeHandler("sort",e.target.value)}>
                <option value="a-z">a-z</option>
                <option value="top score">top score</option>
            </select>
        </div>
    );
}
  