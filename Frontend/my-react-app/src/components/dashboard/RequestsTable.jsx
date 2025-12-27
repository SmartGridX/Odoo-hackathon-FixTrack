// src/components/dashboard/RequestsTable.jsx
const data = [
  {
    subject: "Test activity",
    employee: "Mitchell Admin",
    technician: "Aka Foster",
    category: "Computer",
    stage: "New Request",
    company: "My Company",
  },
];

const RequestsTable = () => {
  return (
    <table className="requests-table">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Employee</th>
          <th>Technician</th>
          <th>Category</th>
          <th>Stage</th>
          <th>Company</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.subject}</td>
            <td>{row.employee}</td>
            <td>{row.technician}</td>
            <td>{row.category}</td>
            <td>{row.stage}</td>
            <td>{row.company}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RequestsTable;
