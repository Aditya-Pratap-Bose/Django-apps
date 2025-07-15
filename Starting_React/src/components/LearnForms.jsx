import { useState } from "react";

const LearnForms = () => {
    // const [firstName, setfirstName] = useState('')
    // const [lastName, setlastName] = useState('')

    // const handleFirstName = (e)=>{
    //     setfirstName(e.target.value)
    // }
    // const handleLastName = (e)=>{
    //     setlastName(e.target.value)
    // }

    const [formData, setformData] = useState('')


  return (
    <>
      {/* <form action="">
        First name: <input type="text" name="firstName" onChange={handleFirstName} value={firstName} />
        <br />
        <br />
        Last name: <input type="text" name="lastName" onChange={handleLastName} value={lastName} />
      </form> */}
      <form action="">
        First name: <input type="text" name="firstName" onChange={handleFirstName} value={firstName} />
        <br />
        <br />
        Last name: <input type="text" name="lastName" onChange={handleLastName} value={lastName} />
      </form>
    </>
  );
};

export default LearnForms;
