function EmployeeListItem({ src, employeeName, position }) {
  return (
    <li className="employee-item">
      <img src={src} alt={`${employeeName}'s Profile Pic`} />
      <div class="info">
        <h3 class="name">{employeeName}</h3>
        <h3 class="profession">{position}</h3>
      </div>
    </li>
  );
}
export default EmployeeListItem;
