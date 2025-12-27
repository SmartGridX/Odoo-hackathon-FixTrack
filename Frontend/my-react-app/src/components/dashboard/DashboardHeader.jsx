// src/components/dashboard/DashboardHeader.jsx
const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <button className="new-btn">New</button>

      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
};

export default DashboardHeader;
