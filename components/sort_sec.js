// Just a generic Navbar, part of the default layout

import { ChangeHandler } from "../utilities";

// so it appears on all pages that use the default layout
export default function SortSec({sort_func}) {
    return (
        <div className="content">
            <h3>sort by</h3>
            <select value={"a-z"} onChange={(e) => ChangeHandler(sort_func,"sort",e)}>
                <option value="a-z">a-z</option>
                <option value="top score">top score</option>
            </select>
        </div>
    );
}
  