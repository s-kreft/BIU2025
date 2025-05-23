export type FilterData = {
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  dateFilter: string;
  setDateFilter: (date: string) => void;
};

const FilterPanel: React.FC<FilterData> = ({
  categoryFilter,
  setCategoryFilter,
  dateFilter,
  setDateFilter,
}) => {
  return (
    <div>
      <input
        type="date"
        className="input input-bordered w-full max-w-xs"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      />
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => setCategoryFilter("Jedzenie")}>Jedzenie</a>
          </li>
          <li>
            <a onClick={() => setCategoryFilter("Rachunki")}>Rachunki</a>
          </li>
          <li>
            <a onClick={() => setCategoryFilter("Rozrywka")}>Rozrywka</a>
          </li>
          <li>
            <a onClick={() => setCategoryFilter("Transport")}>Transport</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default FilterPanel;
