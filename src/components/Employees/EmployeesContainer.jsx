import { useState } from "react"
// in the future we will get our data in a different way from the database...
import { employeesArray } from "../../data/employees-array"
import EmployeeCard from "./EmployeeCard"

function EmployeeContainer() {
    const [employees, setEmployees] = useState( employeesArray )

    const mappedEmployees = employees.map(emp => <EmployeeCard key={emp.id} employee={emp} />)

    return (
    <div className="cards-container">

        { mappedEmployees }

    </div>
  )
}

export default EmployeeContainer