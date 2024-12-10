import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <ul id="employeeList">
      <EmployeeListItem
        src="https://via.placeholder.com/50"
        employeeName="Zoro"
        position="Swordsman"
      />
      <EmployeeListItem
        src="https://via.placeholder.com/50"
        namemployeeNamee="Nami"
        position="Navigator"
      />
      <EmployeeListItem
        src="https://via.placeholder.com/50"
        employeeName="Sanji"
        position="Chef"
      />
      <EmployeeListItem
        src="https://via.placeholder.com/50"
        employeeName="Chopper"
        position="Doctor"
      />
      <EmployeeListItem
        src="https://via.placeholder.com/50"
        employeeName="GOD Usopp"
        position="Sniper"
      />
    </ul>
  );
}
export default EmployeeList;
