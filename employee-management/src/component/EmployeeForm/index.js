import React, { useState } from 'react';
import "./index.css"

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    mobile: '',
    email: '',
    id: '',
    address: '',
    designation: '',
    joiningDate: '',
    gender: '',
    experiences: [],
  });

  const addExperience = () => {
    setEmployee((prevState) => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
        { companyName: '', designation: '', timePeriod: '' },
      ],
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...employee.experiences];
    updatedExperiences[index][field] = value;
    setEmployee({ ...employee, experiences: updatedExperiences });
  };

  return (
    <div className='main-container'>
      <h2>Employee Information</h2>
      <form className='form-container'>
       <div>
        <label  className='label'>Name:</label>
<input type="text" name="name" value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
</div>
<div>
<label className='label'>Mobile No:</label>
<input type="text" name="mobile" value={employee.mobile} onChange={(e) => setEmployee({ ...employee, mobile: e.target.value })} />
</div>
<div>
<label className='label'>Email:</label>
<input type="email" name="email" value={employee.email} onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />
</div>
<div>
<label className='label'>ID:</label>
<input type="text" name="id" value={employee.id} onChange={(e) => setEmployee({ ...employee, id: e.target.value })} />
</div>
<div>
<label className='label'>Address:</label>
<input type="text" name="address" value={employee.address} onChange={(e) => setEmployee({ ...employee, address: e.target.value })} />
</div>
<div>
<label className='label'>Designation:</label>
<input type="text" name="designation" value={employee.designation} onChange={(e) => setEmployee({ ...employee, designation: e.target.value })} />
</div>
<div>
<label className='label'>Joining Date:</label>
<input type="date" name="joiningDate" value={employee.joiningDate} onChange={(e) => setEmployee({ ...employee, joiningDate: e.target.value })} />
</div>
<div>
<label className='label'>Gender:</label>
<select className='select ' name="gender" value={employee.gender} onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
</div>
      </form>

      <h2>Work Experiences</h2>
      <table className='table'>
        <thead>
          <tr>
            <th className='th'>Company Name</th>
            <th className='th'  >Designation</th>
            <th className='th'>Time Period</th>
            <th className='th'>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.experiences.map((exp, index) => (
            <tr key={index}>
              <td className='td'>
                <input
                  type="text"
                  value={exp.companyName}
                  onChange={(e) =>
                    handleExperienceChange(index, 'companyName', e.target.value)
                  }
                />
              </td>
              <td className='td'>
                <input
                  type="text"
                  value={exp.designation}
                  onChange={(e) =>
                    handleExperienceChange(index, 'designation', e.target.value)
                  }
                />
              </td>
              <td className='td' >
                <input
                  type="text"
                  value={exp.timePeriod}
                  onChange={(e) =>
                    handleExperienceChange(index, 'timePeriod', e.target.value)
                  }
                />
              </td>
              <td className='td'>
                <button className='button.delete-button' type="button">Delete</button>
                <button className='button.edit-button' type="button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='button' type="button" onClick={addExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default EmployeeForm;
