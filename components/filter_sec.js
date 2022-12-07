
export default function filter_sec({ children }) {
    return (
        <div class="content">
            <h3>coast</h3>
            <select id="data-filter">
                <option value="none">none</option>
                <option value="East">East</option>
                <option value="West">West</option>
            </select>
        </div>  
    );
}