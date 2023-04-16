import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEmployee = () => {
    const [adminName, setName] = useState('')
    const [adminEmail, setEmail] = useState('')
    const [charges, setCharges] = useState('')
    const [description, setDescription] = useState('')
    const [adminPhone, setPhone] = useState()
    const [education, setEducation] = useState('')
    const [photo, setPhoto] = useState()
    const [experience, setExperience] = useState('')
    const navigate = useNavigate()
    const [auth, setAuth] = useAuth()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();
    formData.append('adminName', adminName)
    formData.append('adminEmail', adminEmail)
    formData.append('description', description)
    formData.append('charges',charges)
    formData.append('adminPhone',adminPhone)
    formData.append('education',education)
    formData.append('experience', experience)
    formData.append("photo", photo)
    const res = await axios.post("/v1/admin/employee-data", formData).then((res)=>{console.log(res.data)})
    if(res.data.success){
      navigate('/dashboard')
    }
    } catch (error) {
      console.log(error)
    }
    

    /*
    adminName,
      description,
      charges,
      adminPhone,
      experience,
      education,
      adminEmail,
    
    */

  }
  return (
    <div style={{display: "flex", flexDirection:"column",justifyContent:"center", alignItems:"center" }}>
      <h2>Hey {auth?.user?.name.toUpperCase()}, Please fill out the The Data of Employee carefully</h2>
      <form onSubmit={handleSubmit} style={{minWidth: "40rem"}}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2  col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input type="text" value={adminName} onChange={(e)=> setName(e.target.value)} className="form-control" id="inputEmail3" placeholder="Name..." />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              value={adminEmail} onChange={(e)=> setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="inputPassword3"
              placeholder="Enter employee Email here"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Base charge(in $)
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              value={charges} onChange={(e)=> setCharges(e.target.value)}
              className="form-control"
              id="inputPassword1"
              placeholder="Enter employee number"
            />
          </div>
        </div>
        <div className="row mb-3 ">
          <label htmlFor="inputPassword1" className="col-sm-2 p-2 col-form-label">
            Phone No.
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              value={adminPhone} onChange={(e)=> setPhone(e.target.value)}
              className="form-control"
              id="inputPassword1"
              placeholder="Phone Number..."
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">
            Education
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={education} onChange={(e)=> setEducation(e.target.value)}
              className="form-control"
              id="inputPassord4"
              placeholder="Educational background.."
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword5" className="col-sm-2 col-form-label">
            LinkedIn Url
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={experience} onChange={(e)=> setExperience(e.target.value)}
              className="form-control"
              id="inputPassord5"
              placeholder="Educational background.."
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={description} onChange={(e)=> setDescription(e.target.value)}
              className="form-control"
              id="inputPasword3"
              placeholder="Please mention employee service fields..."
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword6" className="col-sm-2 col-form-label">
            Photo
          </label>
          <div className="col-sm-10">
            <input
              type="file"
              onChange={(e)=> setPhoto(e.target.files[0])}
              className="form-control"
              id="inputPasswor"
              placeholder="Educational background.."
            />
          </div>
        </div>
        <button type="submit" className="btn btn-danger">
          Add User
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
