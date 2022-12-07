// Just a generic Navbar, part of the default layout

import { render } from "react-dom"

// so it appears on all pages that use the default layout
export default function Sort_sec() {
    return (
        <div class="content">
            <h3>sort by</h3>
            <select id="data-sort">
                <option value="a-z">a-z</option>
                <option value="top score">top score</option>
            </select>
        </div>
    );
}
  