import React from "react";
interface SalariesProps {
  user: {
    salaries: [
      salary: number,
      from_date: number,
    ]
  },

}
class Salaries extends React.Component<SalariesProps> { 
salary =0;
from_date = 0;

  render () {
        return <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Salary</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.salary}
        </tbody>
       
      </table>
    }
}

export default Salaries



