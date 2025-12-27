// src/components/dashboard/SummaryCard.jsx
const SummaryCard = ({ title, value, subtitle, color }) => {
  return (
    <div className={`summary-card ${color}`}>
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default SummaryCard;
