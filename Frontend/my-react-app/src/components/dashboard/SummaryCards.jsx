// src/components/dashboard/SummaryCards.jsx
import SummaryCard from "./SummaryCard";

const SummaryCards = () => {
  return (
    <div className="summary-cards">
      <SummaryCard
        title="Critical Equipment"
        value="5 Units"
        subtitle="Health < 30%"
        color="red"
      />

      <SummaryCard
        title="Technician Load"
        value="85% Utilized"
        subtitle="Assign Carefully"
        color="blue"
      />

      <SummaryCard
        title="Open Requests"
        value="12 Pending"
        subtitle="3 Overdue"
        color="green"
      />
    </div>
  );
};

export default SummaryCards;
