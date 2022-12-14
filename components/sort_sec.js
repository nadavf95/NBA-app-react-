
export default function SortSec({ChangeHandler}) {
    return (
        <div className="contentSort">
            <h2>sort by:</h2>
            <select onChange={(e) => ChangeHandler("sort",e.target.value)}>
                <option value="a-z">a-z</option>
                <option value="top score">top score</option>
            </select>
        </div>
    );
}
  