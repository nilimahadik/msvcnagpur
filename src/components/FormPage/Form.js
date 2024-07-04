
import React, { useState,useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Modal,
  Box,
  Typography,
  Select,
  CircularProgress,
  Button,
} from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f7faf9',
  border: '1px solid #990000',
  boxShadow: 24,
  p: 4,
};

const Form = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [provisionalRegistrationNo, setProvisionalRegistrationNo] = useState('Yes');
// console.log(provisionalRegistrationNo);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    provisionalRegistrationNo: '',
    name: 'test1',
    fathersName: 'test2',
    mothersName: 'test3',
    lastName: 'test4',
    dateOfBirth: '03072000',
    email: 'test@gmail.com',
    mobileNumber: '9876543212',
    gender: 'female',
    category: 'OPEN',
    nationality: 'indian',
    stateOfResidence: 'maharastra',
    aadharCardNo: '234343456767',
    sector: 'private',
    degree: 'bsc',
    dateOfPassing: '23/07/2345',
    universityName: 'rtmnu',
    collegeName: 'rtmnu',
    mobileNo: '9876543212',
    alternateMobileNo: '6521345231',
    emailId: 'test2@gmail.com',
    alternateEmailId: 'test3@gmail.com',
    isForeign: false,
    permanentAddress: 'nagpur',
    permanentState: 'maharashtra',
    permanentDistrict: 'nagpur',
    permanentTaluka: 'nagpur',
    permanentVillage: 'nagpur',
    permanentPincode: '442202',
    workingAddress: 'nagpur',
    workingState: 'maharashtra',
    workingDistrict: 'nagpur',
    workingTaluka: 'nagpur',
    workingVillage: 'nagpur',
    workingPincode: '442202',
    oath: false,
  });

console.log(formData);
useEffect(() => {
  if (provisionalRegistrationNo === 'Yes') {
    setModalOpen(true); // Open modal if the default value is "Yes"
  }
}, [provisionalRegistrationNo]);

  const handleModal = (event) => {
    setProvisionalRegistrationNo(event.target.value);
    if (event.target.value === 'Yes') {
      setModalOpen(true); // Open modal when 'Yes' is selected
    } else {
      setModalOpen(false); // Close modal otherwise
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Function to close the modal
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit form data
      await axios.post('/api/save', formData);
      alert('Form submitted successfully');

      // Reset form data
      setFormData({
        provisionalRegistrationNo: '',
        name: '',
        fathersName: '',
        mothersName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        mobileNumber: '',
        gender: '',
        category: '',
        nationality: '',
        stateOfResidence: '',
        aadharCardNo: '',
        sector: '',
        degree: '',
        dateOfPassing: '',
        universityName: '',
        collegeName: '',
        mobileNo: '',
        alternateMobileNo: '',
        emailId: '',
        alternateEmailId: '',
        isForeign: false,
        permanentAddress: '',
        permanentState: '',
        permanentDistrict: '',
        permanentTaluka: '',
        permanentVillage: '',
        permanentPincode: '',
        workingAddress: '',
        workingState: '',
        workingDistrict: '',
        workingTaluka: '',
        workingVillage: '',
        workingPincode: '',
        oath: false,
      });

      // Optionally reset file state
      setFile(null);
    } catch (error) {
      alert('Error submitting form: ' + error.message);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/upload", formData);
      setMessage(res.data.Message);
    } catch (error) {
      setMessage("Failed to upload file: " + error.message);
    }
  };

  return (
    <div className="container1 border border-gray-300" style={{ padding: "20px", marginBottom: "20px" }}>
      <form onSubmit={handleSubmit}>
        <header>FORM - A - 1</header>
        <hr />
        <div className="form first">
          {/* <FormControl>
            <FormLabel id="taxBenefit">
              <b>Do you have Provisional registration no?</b>
            </FormLabel>
            <RadioGroup
              aria-labelledby="taxBenefit"
              defaultValue="No"
              name="provisionalRegistrationNo"
              onChange={handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl> */}
            <FormControl component="fieldset">
        <label  component="legend" id="taxBenefit">
          Do you have Provisional registration no?
        </label>
        <RadioGroup
          aria-labelledby="taxBenefit"
          defaultValue="Yes"
          name="provisionalRegistrationNo"
          value={provisionalRegistrationNo}
          onChange={handleModal}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

     
      <Modal
  open={modalOpen}
  onClose={handleCloseModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <div className="input-field">
                <label>Provisional Registration No</label>
                <input style={{width:"100%"}} type="text" name="Provisional Registration No" placeholder="Enter Provisional Registration No" onChange={handleChange} required />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <Button onClick={handleCloseModal}>OK</Button>
          </div>

  </Box>
</Modal>
          <hr />
          <div className="details personal">
            <span className="title">Personal Information</span>
            <p className="address">Full Name</p>
            <div className="fields">

              <div className="input-field">
                <label htmlFor="name">Name of candidate</label>
                <input type="text" id="name" name="name" placeholder="Enter candidate's name" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label htmlFor="fathersName">Father's Name</label>
                <input type="text" id="fathersName" name="fathersName" placeholder="Enter father's name" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label htmlFor="mothersName">Mother's Name</label>
                <input type="text" id="mothersName" name="mothersName" placeholder="Enter mother's name" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter last name" onChange={handleChange} required />
              </div>



            </div>
            <h6 style={{ color: "red", marginTop: "1px" }}>
              Full Name (as per appeared on Degree Certificate) with Father Name & Last Name
            </h6>
            <br />
            <div className="fields">

              <div className="input-field">
                <label>Date of Birth</label>
                <input type="date" name="dateOfBirth" onChange={handleChange} required />
              </div>

              <div className="input-field">
                <label>Gender</label>
                <select name="gender" onChange={handleChange} required>
                  <option disabled selected>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="input-field">
                <label>Category</label>
                <select name="category" onChange={handleChange} required>
                  <option disabled selected>Select category</option>
                  <option>SC</option>
                  <option>ST</option>
                  <option>OBC</option>
                  <option>SBC</option>
                  <option>VJ</option>
                  <option>NT</option>
                  <option>OPEN</option>
                </select>
              </div>
              <div className="input-field">
                <label>Nationality</label>
                <input type="text" name="nationality" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label>State of residence</label>
                <input type="text" name="stateOfResidence" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label>Aadhar Card No.</label>
                <input type="text" name="aadharCardNo" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label>Sector</label>
                <select name="sector" onChange={handleChange} required>
                  <option disabled selected>Select sector</option>
                  <option>Private</option>
                  <option>Government</option>
                  <option>Self Employment</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="details ID">
            <span className="title">Educational Qualification</span>
            <div className="fields">
              <div className="input-field">
                <label>Degree</label>
                <select name="degree" onChange={handleChange} required>
                  <option disabled selected>Select Degree</option>
                  <option>B.V.Sc</option>
                  <option>B.V.Sc & A.H.</option>
                  <option>M.V.Sc</option>
                  <option>M.V.Sc & A.H.</option>
                  <option>Ph.D.</option>
                  <option>M.R.C.V.S.</option>
                </select>
              </div>
              <div className="input-field">
                <label>Date of Passing</label>
                <input type="date" name="dateOfPassing" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label>University Name</label>
                <input type="text" name="universityName" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label>College Name</label>
                <input type="text" name="collegeName" onChange={handleChange} required />
              </div>
            </div>
          </div>
          <hr />
          <div className="details address">
            <span className="title">Contact Details </span>
            <div className="fields">
              <div className="input-field">
                <label>Mobile No.</label>
                <input type="text" name="mobileNo" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label>Alternate Mobile No.</label>
                <input type="text" name="alternateMobileNo" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label>Email Id</label>
                <input type="email" name="emailId" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label>Alternate Email Id</label>
                <input type="email" name="alternateEmailId" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label>Is the candidate from another country?</label>
                <select name="isForeign" onChange={handleChange} required>
                  <option disabled selected>Select</option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="details address">
            <div className="fields">
              <div className="input-field">
                <label>Permanent Address</label>
                <input type="text" name="permanentAddress" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label> State</label>
                <input type="text" name="permanentState" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label> District</label>
                <input type="text" name="permanentDistrict" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label> Taluka</label>
                <input type="text" name="permanentTaluka" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label> Village</label>
                <input type="text" name="permanentVillage" onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label> Pincode</label>
                <input type="text" name="permanentPincode" onChange={handleChange} required />
              </div>
              <div className="address">
                <input type="checkbox" name="same" onChange={handleChange} required />
                {""} <label> Is Working Address same as Permanent Address?</label>
              </div>
              <div className="fields">
                <div className="input-field">
                  <label>Working Address</label>
                  <input type="text" name="workingAddress" onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <label> State</label>
                  <input type="text" name="workingState" onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <label> District</label>
                  <input type="text" name="workingDistrict" onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <label> Taluka</label>
                  <input type="text" name="workingTaluka" onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <label> Village</label>
                  <input type="text" name="workingVillage" onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <label> Pincode</label>
                  <input type="text" name="workingPincode" onChange={handleChange} required />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="details family">
            <span className="title">Document Details</span>
            <div className="fields">
              <div className="input-field">
                <label>Upload Photo</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="input-field">
                <label>Signature Of Applicant</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="input-field">
                <label>Degree Certificate</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="input-field">
                <label>Transcript</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="input-field">
                <label>Aadhar Card</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="input-field">
                <label>Identity Proof</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="input-field">
                <label>Proof of DOB</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="input-field">
                <label>Proof of State Domicile Certificate</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="input-field">
                <label>Upload Affidavit of Magistrate</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="input-field">
                <label>Upload FIR</label>
                <input type="file" onChange={handleFileChange} />
              </div>
            </div>
            <div>
              <button type="button" onClick={handleUpload}>Upload</button>
            </div>
            <div className="details oath">
              <input type="checkbox" name="oath" onChange={handleChange} required />
              {""} <label> I agree Oath and declaration</label>
            </div>
            <div className="buttons">
              <div className="backBtn">
                <i className="uil uil-navigator"></i>
                <span className="btnText" onClick={handleSubmit}>Continue to fees details</span>
              </div>
              <div className="backBtn">
                <i className="uil uil-navigator"></i>
                <span className="btnText">Cancel</span>
              </div>

            </div>
          </div>
        </div>
      </form>
      <h6 style={{ color: "red", marginTop: "10px" }}>
        Note : For original documents verification a person should submit original certificates for verification within 15 days of online registration in Council's office personally or by post for new registration
      </h6>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;

