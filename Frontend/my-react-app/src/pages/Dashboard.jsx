
import DashboardTabs from "../components/dashboard/DashboardTabs";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import SummaryCards from "../components/dashboard/SummaryCards";
import RequestsTable from "../components/dashboard/RequestsTable";

 

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <DashboardTabs />
        <DashboardHeader />
        <SummaryCards />
        <RequestsTable />
      </div>
    </div>
  );
}

