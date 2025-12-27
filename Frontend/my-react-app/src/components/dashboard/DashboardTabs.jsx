const tabs = [
  "Maintenance",
  "Dashboard",
  "Maintenance Calendar",
  "Equipment",
  "Reporting",
  "Teams",
];

const DashboardTabs = () => {
  return (
    <div className="dashboard-tabs">
      {tabs.map((tab) => (
        <button key={tab} className="tab-btn">
          {tab}
        </button>
      ))}
    </div>
  );
};

export default DashboardTabs;
