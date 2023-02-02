import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [register, setRegister] = useState("")
  const [course, setCourse] = useState("cse")
  const [phonenumber, setPhonenumber] = useState("")
  const [section, setSection] = useState("")
  const [rollnumber,setRollnumber]=useState("")
  const [username, setUsername] = useState("")
  const [nameError, setnameError] = useState("")
  const [emailError, setemailError] = useState("")
  const [registerError, setRegisterError] = useState("")
  const [phoneNumberError, setphoneNumberError] = useState("")
  const [sectionError, setSectionError] = useState("")
  const [rollnumberError,setRollnumberError]=useState("")
  const [courseError, setCourseError] = useState("")
  const [emptyError,setEmptyerror] = useState("")
  const resetErrorDefault =()=>{
    setnameError("")
    setphoneNumberError("")
    setSectionError("")
    setemailError("")
    setRollnumberError("")
    setRegisterError("")
    setCourseError("")
    setEmptyerror("")
  }
  const validate =()=>{
    if(
      name === "" || email === "" || course === "" || phonenumber==="" ||section===""||register===""||rollnumber==="" ){
         setEmptyerror("All fields are Mandatory")
         setUsername("")
         return false
     }
     if(!name.match(/^[A-Za-z0-9- ]+$/)){
          setnameError("Name is not Alphanumertic")
          setUsername("")
          return false
     }
     if (!email.includes("@")){
      setemailError("Email must contain @")
      setUsername("")
      return false
     }
     if(!register.match(/^[0-9]+$/)){
      setRegisterError("Registration number must contain only numbers")
      setUsername("")
      return false
     }
     if(!course.match(/ece|cse|bio/i)){
      setCourseError("Please select a course")
      setUsername("")
      return false
     }
     if(section.length > 6){
      setSectionError("Provide Correct section")
      setUsername("")
      return false
     }
     if(!rollnumber.match(/^[0-9]+$/)){
      setRollnumberError("Roll number must contain only numbers")
      setUsername("")
      return false
     }
     if(!phonenumber.match(/^[0-9]+$/)){
      setphoneNumberError("Phone number should contain only digits")
      setUsername("")
      return false
     }
  }
 const handleSubmit =(e)=>{
  e.preventDefault()
  resetErrorDefault()
 const isValid = validate()
  if (isValid){
    setName(" ")
    setEmail("")
    setRegister("")
    setCourse("")
    setPhonenumber("")
    setRollnumber("")
    setSection("")
    resetErrorDefault()
  }
  setUsername(name)
 }


  return (
    <div className="border">
      <h1>Student Registration Form</h1>
      <h3>By Aparna Dwivedi</h3>
      <form onSubmit={handleSubmit} className="text">
        Name: 
        <input className="text1" type="text" placeholder='Name' value={name} onChange = {(e)=>{setName(e.target.value)}}/> <br />
        <span>{nameError}</span><br/>
        Email:
        <input  className="text1" type="text" placeholder='Email' value={email} onChange = {(e)=>{setEmail(e.target.value)}}/><br/>
        <span>{emailError}</span><br/>
        Registration No.:
        <input  className="text1" type="text" placeholder='Registration Number' value={register} onChange = {(e)=>{setRegister(e.target.value)}}/><br/>
        <span>{registerError}</span><br/>
        Course:
        <select className="text1" name="course" value={course} onChange = {(e)=>{setCourse(e.target.value)}}>
          <option value="select course">Select Course</option>
          <option value="cse">B.Tech (CSE)</option>
          <option value="ece">B.Tech (ECE)</option>
          <option value="bio">B.Tech (Biotechnology)</option>
        </select><br />
        {courseError} <br/>
        Section:
        <input className="text1" type="section" placeholder='Section' value={section} onChange = {(e)=>{setSection(e.target.value)}}/><br/>
        <span>{sectionError}</span><br/>
        Roll No.:
        <input className="text1" type="text" placeholder='Roll Number' value={rollnumber} onChange = {(e)=>{setRollnumber(e.target.value)}}/><br/>
        <span>{rollnumberError}</span><br/>
        Phone No.:
        <input className="text1" type="text" placeholder='Phone Number' value={phonenumber} onChange = {(e)=>{setPhonenumber(e.target.value)}}/><br/>
        <span>{phoneNumberError}</span><br/>
        <span>{emptyError}</span><br />
        <input className='button' type="submit" value="Submit" /><br />
      </form>
      <div>
        <h2>{username ? "Hello " + username +", You are successfully Registered!!" : ""}</h2>
      </div>
    </div>
  );
}

export default App;