// import becomeVolunteerList from "@/data/becomeVolunteerList";
// import image from "@/images/resources/become-a-volunteer.jpg";
// import React from "react";
// import { Col, Container, Image, Row } from "react-bootstrap";
// import VolunteerForm from "./VolunteerForm";
// import {
//   FormControl,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   FormControlLabel,

// } from '@mui/material';

// const BecomeVolunteerPage = () => {
//   return (
//     <section className="become-volunteer-page">
//       <Container>
        // <div className="section-title text-center">
        //   <span className="section-title__tagline">Register Now</span>
          
        // </div>
//        <p>hello</p>

      
//       </Container>
//     </section>
//   );
// };

// export default BecomeVolunteerPage;


import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
CircularProgress,
  Button,
} from '@mui/material';
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";

const BecomeVolunteerPage = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [donationAmount, setDonationAmount] = useState('');
 const [loading, setIsLoading] = useState(false); 
  const { amount } = router.query;
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    // Load Razorpay SDK script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);



  const handleForm = (data) => {
      setIsLoading(true);
    makePayment(data)
      .then(() => {
        // setIsLoading(false);
        // Handle success if needed
      })
      .catch(error => {
        // setIsLoading(false);
        // Handle error if needed
        console.error("Error making payment:", error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading state when done
      });
  };



  useEffect(() => {
    const { amount } = router.query;
    if (amount) {
      setDonationAmount(amount);
      setFormData(prevData => ({ ...prevData, donationAmount: amount }));
    }
  }, [router.query]);
  const [formData, setFormData] = useState({
    // firstName: '',
    // lastName: '',
    // email: '',
    // address: '',
    // indianCitizen: '',
    // taxBenefit: '',
    // country: '',
    // state: '',
    // city: '',
    // phone: '',
    // pan: '',
    // pincode: '',
    // donationAmount: donationAmount,
    // status: false,


    firstName: 'test1',
    lastName: 'test2',
    email: 'test@gmail.com',
    address: 'nagpur',
    indianCitizen: 'yes',
    taxBenefit: 'yes',
    country: 'India',
    state: 'Maharashtra',
    city: 'nagpur',
    phone: '9876543212',
    pan: '123',
    pincode: '234',
    donationAmount: donationAmount,
    status: false,

  });
  // console.log(formData.firstName);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none', // Remove the border
      boxShadow: 'none', // Remove any box shadow
      borderBottom: '1px solid #ccc',
      color: 'grey', // Set placeholder color to grey
      fontSize: '15px' // Set placeholder font size to 12px
    }),
  };


  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["firstName", "lastName", "address", "email", "phone"];
    const isFormValid = requiredFields.every((field) => formData[field].trim() !== '');
    if (!isFormValid) {
      alert("Please fill in all required fields");
      console.error('Please fill in all required fields');
      return;
    }
    setFormData((prevData) => ({ ...prevData }));

    formData.donationAmount = donationAmount;
				   
    setIsLoading(true);
	
    fetch("/api/save", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        // console.log("res", res.ok)
        if (res.ok) {
          const data = await res.json();
      
          handleForm(data); // Pass the response data to handleForm
        } else {
          setIsLoading(false);
          throw new Error('Try Again');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        alert("Try Again");
      });
  };


  const updateStatusInBackend = async (status, payment_id, id) => {
    // console.log(status, payment_id);
    try {
      const response = await fetch('/api/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: status, payment_id: payment_id, id: id }),
      });
      // console.log(response);
      const data = await response.json();
      // console.log('Status update response:', data);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  const makePayment = async (data) => {
    // console.log(data.data.amount);
    const amount = data.data.amount;
    // console.log(amount);
    const key = process.env.NEXT_PUBLIC_RAZORPAY_API_KEY;

    try {
      // Send a POST request to the backend to create a Razorpay order
      const response = await fetch("/api/razorpay", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }), // Send amount in the body
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const { order } = await response.json();

      // Construct options for Razorpay payment
      const options = {
        key,
        name: "Swami Vivekanand Medical Mission",
        currency: order.currency,
        amount: order.amount,
        order_id: order.id,
        description: "Understanding RazorPay Integration",
        handler: async function (response) {
          try {
            // Verify payment with your backend
            const verifyResponse = await fetch("/api/paymentverify", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();
            // console.log("Payment verification response:", verifyData);

            if (verifyData.message === "success") {
              console.log("Payment verified successfully");
              // Update status in the frontend

              setFormData(prevData => ({ ...prevData, status: true }));
              updateStatusInBackend(true, response.razorpay_payment_id, data.data.id);
              // Redirect or perform any action upon successful payment verification
              router.push("/paymentsuccess?paymentid=" + response.razorpay_payment_id);
            } else {
              console.error("Payment verification failed");
              // Handle payment verification failure
              alert("Payment verification failed. Please try again.");
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            // Handle error during payment verification
            alert("Error verifying payment. Please try again.");
          }
        },
      };

      // Create Razorpay payment object
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error making payment:", error);
      // Handle error during payment initiation
      alert("Error making payment. Please try again.");
    }
  };
      
  if (!razorpayLoaded) {
    return <p>Loading...</p>; // Render loading indicator until Razorpay SDK is loaded
  }
  
  
  
  return (
    <>

     <div class="container1 border border-gray-300 " style={{padding:"20px",marginBottom:"20px"}} >
    
        <form  >
        <header>FORM - A - 1</header>
        <hr/>
        <div class="form first">
        <FormControl>
                <FormLabel id="taxBenefit">
                  <b>Do you have Provisional registration no?</b>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="taxBenefit"
                  defaultValue="female"
                  name="taxBenefit"
                  onChange={handleChange}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
           
        <hr/>
           
                <div class="details personal">
                    <span class="title"> Personal Information</span>
                    <div class="fields">
                      
                        <div class="input-field">
                            <label>Name of candidate</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Father's Name</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Mother's Name</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Last Name</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="Enter birth date" required/>
                        </div>
                        <div class="input-field">
                            <label>Email</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="number" required/>
                        </div>
                        <div class="input-field">
                            <label>Gender</label>
                            <select required>
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <label>Category</label>
                            <select required>
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
                        <div class="input-field">
                            <label>Nationality</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>State of residence</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Aadhar Card No.	</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Sector</label>
                            <select required>
                                <option disabled selected>Select sector</option>
                                <option>Private</option>
                                <option>Government</option>
                                <option>Self Employment</option>
                               
                            </select>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="details ID">
                    <span class="title">Educational Qualification</span>
                            <div class="fields">
                        <div class="input-field">
                        <label>Degree</label>
                            <select required>
                                <option disabled selected>Select Degree</option>
                                <option>Private</option>
                                <option>Government</option>
                                <option>Self Employment</option>
                               
                            </select>
                        </div>
                   
                        <div class="input-field">
                            <label>Date of passing</label>
                            <input type="date" placeholder="Enter Date of passing" required/>
                        </div>
                          
                       
                        <div class="input-field">
                            <label>University Name</label>
                            <input type="text" placeholder="Enter University Name" required/>
                        </div>
                        <div class="input-field">
                            <label>College Name</label>
                            <input type="text" placeholder="Enter College Name" required/>
                        </div>
                      
                    </div>
                    <hr/>
                <div class="details address">
                    <span class="title">Contact Details</span>
                  
                    <div class="fields">
                        <div class="input-field">
                            <label>Mobile No.</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Alternate Mobile No.</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Email id</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Alternate EmailId</label>
                            <input type="text"  required/>
                        </div>
                   <div>
                        <input type="checkbox"/>
                        <label> Is Candidate belongs to county other than India?</label>
                        </div>
                    </div>
                    <div class="fields">
                        <div class="input-field">
                            <label>Permanent Address</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>State</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>District</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Taluka</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Village</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Pincode</label>
                            <input type="text"  required/>
                        </div>
                       
                    </div>
                    <div  class="input-field">
                        <input type="checkbox"/>
                        <label> Is Working Address same as Permanent Address?</label>
                        </div>
                    <div class="fields">
                        <div class="input-field">
                            <label>Working Address</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>State</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>District</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Taluka</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Village</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-field">
                            <label>Pincode</label>
                            <input type="text"  required/>
                        </div>
                       
                    </div>
                </div>
                <hr/>
                <div class="details family">
                    <span class="title">Document Details</span>
                    <div class="fields">
                        <div class="input-field">  
                        <label>Upload Photo</label>                     
                           <input type="file" id="myfile" name="myfile"/>
                           
                        </div>
                        <div class="input-field">
                        <label>Signature Of Applicant</label>                     
                        <input type="file" id="myfile" name="myfile"/>
                        </div>
                        <div class="input-field">
                        <label>Degree Certificate	</label>                     
                        <input type="file" id="myfile" name="myfile"/>
                        </div>
                        <div class="input-field">
                        <label>Transcript</label>                     
                        <input type="file" id="myfile" name="myfile"/>
                        </div>
                        <div class="input-field">
                        <label>Aadhar Card</label>                     
                        <input type="file" id="myfile" name="myfile"/>
                        </div>
                        <div class="input-field">
                        <label>Identity Proof</label>                     
                        <input type="file" id="myfile" name="myfile"/>

                        </div>
                        <div class="input-field">
                        <label>Proof of DOB</label>                     
                        <input type="file" id="myfile" name="myfile"/>
                        
                        </div>
                        <div class="input-field">
                        <label>Proof of State Domicile Certificate</label>                     
                        <input type="file" id="myfile" name="myfile"/>
                        
                        </div>
                        <div class="input-field">
                        <label>Upload Affidavit of Magistrate</label>                     
                        <input type="file" id="myfile" name="myfile"/>
                        
                        </div>
                        <div class="input-field">
                        <label>Upload FIR</label>                     
                        <input type="file" id="myfile" name="myfile"/>
                        
                        </div>
                       
                    </div>
                  
                        <input type="checkbox"/>
                       {""} <label> I agree Oath and declaration</label>
                        
                    
                </div> 
        
                   
                </div> 
                <div class="buttons">
                        
                        <div class="backBtn">
                            <i class="uil uil-navigator"></i>
                            <span class="btnText">Continue to fees details</span>
                        </div>
                      <div class="backBtn">
                            <i class="uil uil-navigator"></i>
                            <span class="btnText">Cancel</span>
                        </div>
                         
                       
                    </div>
            </div>
            
           
        </form>
        <h6 style={{color:"red",marginTop:"10px"}}>Note : For original documents verification a person should submit original certificates for verification within 15 days of online registration in Council's office personally or by post for new registration</h6>
       
    </div>
   
    </>
  );
}
export default BecomeVolunteerPage;



