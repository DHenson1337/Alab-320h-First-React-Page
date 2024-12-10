function EmployeeListItem({ src, employeeName, position }) {
  return (
    <li>
      <img src={src} alt={`${employeeName}'s Profile Pic`} />
      <h3>{employeeName}</h3>
      <h4>{position}</h4>
    </li>
  );
}
export default EmployeeListItem;
