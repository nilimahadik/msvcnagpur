// import React, { useEffect, useState } from 'react';
// import { Card, Button, Table, Container, Image, Row, Col } from 'react-bootstrap';
// import { useRouter } from 'next/router';
// import logo from "@/images/resources/llogo.png";
// import Link from "next/link";

// const ReceiptDetails = () => {
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   const [value, setValue] = useState([]);
//   // console.log(value);
//     const [amountInWords, setAmountInWords] = useState('');
// // console.log(amountInWords);
//   const router = useRouter();
//   const { paymentid } = router.query;

//   useEffect(() => {
//     if (paymentid) {
//       fetchReceiptData(paymentid).catch((error) => {
//         console.error("Error fetching data:", error);
//         alert("Failed to fetch data. Please try again later.");
//       });
//     }
//   }, [paymentid]);

//   useEffect(() => {
//     if (value.length > 0) { // Check for array length
//       const amount = value[0]?.amount;
//       const amountInWords = numberToWords(amount);
//       setAmountInWords(amountInWords);
//     }
//   }, [value]);

//   const fetchReceiptData = async (paymentid) => {
//     try {
//       const res = await fetch("/api/receipt", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(paymentid),
//       });
//       if (!res.ok) {
//         console.log("Failed to fetch data");
//       }
//       const data = await res.json();
//       // console.log(data.data);
//       setValue(data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   function numberToWords(number) {
//     const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//     const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//     const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

//     if (number === 0) return 'Zero';

//     function convertThreeDigits(num) {
//       if (num === 0) return '';

//       let words = '';

//       if (num >= 100) {
//         words += units[Math.floor(num / 100)] + ' Hundred ';
//         num %= 100;
//       }

//       if (num >= 20) {
//         words += tens[Math.floor(num / 10)] + ' ';
//         num %= 10;
//       }

//       if (num > 0) {
//         if (num >= 11 && num <= 19) {
//           words += teens[num % 10] + ' ';
//         } else {
//           words += units[num] + ' ';
//         }
//       }

//       return words;
//     }

//     let words = '';

//     if (number >= 10000000) {
//       words += convertThreeDigits(Math.floor(number / 10000000)) + 'Crore ';
//       number %= 10000000;
//     }

//     if (number >= 100000) {
//       words += convertThreeDigits(Math.floor(number / 100000)) + 'Lakh ';
//       number %= 100000;
//     }

//     if (number >= 1000) {
//       words += convertThreeDigits(Math.floor(number / 1000)) + 'Thousand ';
//       number %= 1000;
//     }

//     words += convertThreeDigits(number);

//     return words.trim();
//   }
//   const handlePrint = async () => {
//     await window.print(); // Wait for print to finish
//     setIsButtonDisabled(true);
//   };

//   return (
//     <>
//       <Container>
//         <Card className="border mt-1 " style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
//           <div className="invoice-from text-center mb-20" style={{ fontFamily: "Nunito" }}>
//             <Link href="/">

//               <Image src={logo.src} alt="" style={{ height: "120px" }} />

//             </Link>
//             <p style={{ fontSize: "30px", color: "orange" }}>
//               Swami Vivekanand Medical Mission
//             </p>
//             <p>Vivekananda Nagar,Muttil PO-Kalpetta North, Dist.-WAYANAD KERALA- 673122.</p>
//             <p>Registration Number CSR00018118 <span style={{ marginLeft: '20px' }}>PAN No: AADTS2468P</span></p>
//           </div>
//           <hr className='mt-1' style={{ backgroundColor: "black" }} />
//           <p className="text-center font-bold">DONATION RECEIPT</p>
//           <Card.Body className="text-left" style={{ paddingLeft: '80px', paddingRight: '80px', fontFamily: "Nunito" }}>

//             <div className="invoice-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <p><b>Receipt</b> : #{value?.[0]?.id}</p>
//               <p><b>Receipt Date</b>: {value?.[0]?.time?.slice(0, -14)}</p>
//             </div>
//             <div className="invoice-to mt-3">
//               <ul className="list-unstyled">
//                 <li><strong> To</strong> : {value?.[0]?.firstname + " " + value?.[0]?.lastname} </li>
             
//               </ul>
//             </div>
//             <div className="mt-1">
//               <p><b>Email Id : </b> {value?.[0]?.email}</p>
//               <p><b>PAN Number : </b>{value?.[0]?.pan}</p>
//               <p><b>Mobile Number : </b> +91 {value[0]?.phone}</p>
//               <p><b>Address : </b>{value[0]?.address}</p>
            
//             </div>
         
            
         
//               <Table bordered  >
//               <thead >
//                             <tr>
//                                 <th>Description</th>
//                                 <th className="text-center">Amount</th>
//                             </tr>
//                         </thead>
//                 <tbody>
//                   <tr>
//                     <td>Corpus Donation</td>
//                     <td className="text-center">₹{value[0]?.amount}</td>
//                   </tr>
//                 </tbody>
//               </Table>
            
        
//             <div>
//               <p><b>Amount in Words:</b> Indian Rupee {amountInWords} Only</p>
//             </div>
          
//             <div className="mt-2 p-3" style={{ backgroundColor: "#f8f9fa" }}>
//       <Container>
//         <Row>
//           <Col xs={12} sm={6}><p>Donation Towards:</p></Col>
//           <Col xs={12} sm={6}><p>Swami Vivekanand Medical Mission Wayanad Kerala</p></Col>
//         </Row>
//         <Row>
//           <Col xs={12} sm={6}><p>Donation Type:</p></Col>
//           <Col xs={12} sm={6}><p>(Card/UPI/Wallet/Net Banking)</p></Col>
//         </Row>
//         <Row>
//           <Col xs={12} sm={6}><p>Payment Mode:</p></Col>
//           <Col xs={12} sm={6}><p>Card</p></Col>
//         </Row>
//         <Row>
//           <Col xs={12} sm={6}><p>Reference:</p></Col>
//           <Col xs={12} sm={6}><p>{value?.payment_id}</p></Col>
//         </Row>
//       </Container>
//     </div>
//             <br />
//             <div className="text-right"  style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <p><u>Note : Subject to Realisation</u></p>
            
//               <p><b>(Authorised Signatory)</b></p>
//             </div>
           
//           </Card.Body>
//           <div className="text-center mt-2" style={{backgroundColor:"#f8f9fa"}}>
//             <p>Contributions to SWAMI VIVEKANANDA MEDICAL MISSION-WAYANAD are exempt from Income Tax Vide Unique Registration Number- AADTS2468PF20098 Dated 31-03-2022 From AY 2022-23 to AY 2026-2027 (UNDERSECTION 80G OF IT ACT 1961)</p>
           
//            </div>
//            <hr/>
//            <p className='text-center' style={{color:"gray"}}>This is a system generated receipt </p>
//         </Card>
//         <div className="invoice-footer mt-4 text-right " >
//               <Button style={{ backgroundColor: "orange", padding: "13px",border:"none",borderRadius:"10px" }} onClick={handlePrint} disabled={isButtonDisabled}>
//                 <i className="fa fa-print mr-1"></i> Print
//               </Button>
//             </div>
//             <br/>
//       </Container>
//     </>
//   );
// };

// export default ReceiptDetails;




import React, { useEffect, useState } from 'react';
import { Card, Button, Table, Container, Image, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import logo from "@/images/resources/llogo.png";
import Link from "next/link";

const ReceiptDetails = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [value, setValue] = useState([]);
  console.log(value);
    const [amountInWords, setAmountInWords] = useState('');
// console.log(amountInWords);
  const router = useRouter();
  const { paymentid } = router.query;

  useEffect(() => {
    if (paymentid) {
      fetchReceiptData(paymentid).catch((error) => {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please try again later.");
      });
    }
  }, [paymentid]);

  // useEffect(() => {
  //   if (value.length > 0) { // Check for array length
  //     const amount = value[0]?.amount;
  //     const amountInWords = numberToWords(amount);
  //     setAmountInWords(amountInWords);
  //   }
  // }, [value]);

  const fetchReceiptData = async (paymentid) => {
    try {
      const res = await fetch("/api/receipt", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentid),
      });
      if (!res.ok) {
        console.log("Failed to fetch data");
      }
      const data = await res.json();
      // console.log(data.data);
      setValue(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function numberToWords(number) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (number === 0) return 'Zero';

    function convertThreeDigits(num) {
      if (num === 0) return '';

      let words = '';

      if (num >= 100) {
        words += units[Math.floor(num / 100)] + ' Hundred ';
        num %= 100;
      }

      if (num >= 20) {
        words += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
      }

      if (num > 0) {
        if (num >= 11 && num <= 19) {
          words += teens[num % 10] + ' ';
        } else {
          words += units[num] + ' ';
        }
      }

      return words;
    }

    let words = '';

    if (number >= 10000000) {
      words += convertThreeDigits(Math.floor(number / 10000000)) + 'Crore ';
      number %= 10000000;
    }

    if (number >= 100000) {
      words += convertThreeDigits(Math.floor(number / 100000)) + 'Lakh ';
      number %= 100000;
    }

    if (number >= 1000) {
      words += convertThreeDigits(Math.floor(number / 1000)) + 'Thousand ';
      number %= 1000;
    }

    words += convertThreeDigits(number);

    return words.trim();
  }
  const handlePrint = async () => {
    await window.print(); // Wait for print to finish
    setIsButtonDisabled(true);
  };

  return (
    <>
    
{/*         

<div className="invoice-from text-center" style={{ fontFamily: "Nunito", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Link href="/">
    <Image src={logo.src} alt="" style={{ height: "120px", marginRight: "20px" }} />
  </Link>
  <div style={{ textAlign: "left" }}>
    <p style={{ fontSize: "30px", color: "orange" }}>Swami Vivekanand Medical Mission</p>
    <p>Vivekananda Nagar, Muttil PO-Kalpetta North, Dist.-WAYANAD KERALA- 673122.</p>
    <p>Registration Number CSR00018118 <span style={{ marginLeft: '20px' }}>PAN No: AADTS2468P</span></p>
  </div>
</div>

          <hr style={{ backgroundColor: "black" }} />
          <p className="text-center font-bold">DONATION RECEIPT</p>

         
          <div className="invoice-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
             <p><b>Receipt</b> : #{value?.[0]?.id}</p>
               <p><b>Receipt Date</b>: {value?.[0]?.time?.slice(0, -14)}</p>
          </div>
            <div className="invoice-to ">
              <ul className="list-unstyled">
                <li><strong> To</strong> : {value?.[0]?.firstname + " " + value?.[0]?.lastname} </li>
             
              </ul>
          
              <p><b>Email Id : </b> {value?.[0]?.email}</p>
              <p><b>PAN Number : </b>{value?.[0]?.pan}</p>
              <p><b>Mobile Number : </b> +91 {value[0]?.phone}</p>
              <p><b>Address : </b>{value[0]?.address}</p>
            
            </div>
         
            
         
              <Table bordered  >
              <thead >
                            <tr>
                                <th>Description</th>
                                <th className="text-center">Amount</th>
                            </tr>
                        </thead>
                <tbody>
                  <tr>
                    <td>Corpus Donation</td>
                    <td className="text-center">₹{value[0]?.amount}</td>
                  </tr>
                </tbody>
              </Table>
            
        
            <div>
              <p><b>Amount in Words:</b> Indian Rupee {amountInWords} Only</p>
            </div>
          
            <div className="mt-2 p-3" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row>
          <Col xs={12} sm={6}><p>Donation Towards:</p></Col>
          <Col xs={12} sm={6}><p>Swami Vivekanand Medical Mission Wayanad Kerala</p></Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}><p>Donation Type:</p></Col>
          <Col xs={12} sm={6}><p>(Card/UPI/Wallet/Net Banking)</p></Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}><p>Payment Mode:</p></Col>
          <Col xs={12} sm={6}><p>Card</p></Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}><p>Reference:</p></Col>
          <Col xs={12} sm={6}><p>{value?.payment_id}</p></Col>
        </Row>
      </Container>
    </div>
            <br />
            <div className="text-right"  style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p><u>Note : Subject to Realisation</u></p>
            
              <p><b>(Authorised Signatory)</b></p>
            </div>
           
       
          <div className="text-center mt-2" style={{backgroundColor:"#f8f9fa"}}>
            <p>Contributions to SWAMI VIVEKANANDA MEDICAL MISSION-WAYANAD are exempt from Income Tax Vide Unique Registration Number- AADTS2468PF20098 Dated 31-03-2022 From AY 2022-23 to AY 2026-2027 (UNDERSECTION 80G OF IT ACT 1961)</p>
           
           </div>
           <hr/>
           <p className='text-center' style={{color:"gray"}}>This is a system generated receipt </p>
        <div className="invoice-footer mt-4 text-right " >
              <Button style={{ backgroundColor: "orange", padding: "13px",border:"none",borderRadius:"10px" }} onClick={handlePrint} disabled={isButtonDisabled}>
                <i className="fa fa-print mr-1"></i> Print
              </Button>
            </div>
            <br/>
       */}
<div className="card">
  <div className="card-body">
    <div className="container mb-10 mt-3">
      <div className="row d-flex align-items-baseline">
        <div className="col-xl-9">
          <p style={{ color: "orange", fontSize: "20px" }}>Swami Vivekanada Medical Mission Wayanad Kerala</p>
        </div>
    
        {/* <div className="col-xl-3 float-end">
          <a data-mdb-ripple-init className="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark" onClick={handlePrint} disabled={isButtonDisabled}>
          <i className="fa fa-print mr-1"></i> Print
          </a>
          
        </div> */}
        <hr />
      </div>

      <div className="container">
        <div className="col-md-12">
          <div className="text-center">
            <p className="pt-0">Donation Receipt</p>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8">
            <ul className="list-unstyled">
             
              <li className="text-muted"><b style={{fontSize:'18px'}}>To: </b> <span >{value?.[0]?.firstname + " " + value?.[0]?.lastname}</span></li>
              <li className="text-muted"><b style={{fontSize:'18px'}}>Email: </b> <span >{value?.[0]?.email}</span></li>
              <li className="text-muted"><b style={{fontSize:'18px'}}>Address: </b> <span >{value?.[0]?.address}</span></li>
              <li className="text-muted"><b style={{fontSize:'18px'}}>Pan Number: </b> <span >{value?.[0]?.pan}</span></li>
              <li className="text-muted"><i className="fas fa-phone"></i>  +91 {value?.[0]?.phone}</li>
            </ul>
          </div>
          <div className="col-xl-4">
            {/* <p className="text-muted">Invoice</p> */}
            <ul className="list-unstyled">
              <li className="text-muted">
                {/* <i className="fas fa-circle" style={{ color: "orange" }}></i>  */}
                <b style={{fontSize:'18px'}}>Receipt ID:</b>#{value?.[0]?.id}</li>
              <li className="text-muted"><b style={{fontSize:'18px'}}>Receipt Date: </b>{value?.[0]?.time?.slice(0, -14)}</li>
              <li className="text-muted"> <b style={{fontSize:'18px'}}>Status:</b><span >{value?.[0]?.status}</span></li>
            </ul>
          </div>
        </div>

        <div className="row my-2 mx-1 justify-content-center">
          <table className="table table-striped table-borderless">
            <thead style={{ backgroundColor: "#84B0CA" }} className="text-white">
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Description</th>
                
                {/* <th scope="col">Unit Price</th> */}
                <th scope="col">Amount</th>
                <th scope="col">Amount in Words</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Corpus Donation</th>
                <td>{value?.[0]?.amount}</td>
                <td>Indian Rupee {amountInWords} Only</td>
                
              </tr>
            
            </tbody>
          </table>
          <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Donation Towards:</label>
    <div class="col-sm-10">
    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Swami Vivekanada Medical Mission"/>

   
</div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Donation Type:</label>
    <div class="col-sm-10">
    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="(Card/UPI/Wallet/Net Banking)"/>

    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Donation Mode:</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Razorpay"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Reference:</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
</form>
        </div>
        {/* <div className="row">
          <div className="col-xl-8">
            <p className="ms-3">Add additional notes and payment information</p>
          </div>
          <div className="col-xl-3">
            <ul className="list-unstyled">
              <li className="text-muted ms-3"><span className="text-black me-4">SubTotal</span>$1110</li>
              <li className="text-muted ms-3 mt-2"><span className="text-black me-4">Tax (15%)</span>$111</li>
            </ul>
          </div>
        </div> */}
        <hr />
        <div className="row">
          {/* <div className="col-xl-10">
            <p>Thank you for your purchase</p>
          </div> */}
          <div className="col-xl-2">
          <Button style={{ backgroundColor: "orange", padding: "13px",border:"none",borderRadius:"10px" }} onClick={handlePrint} disabled={isButtonDisabled}>
                <i className="fa fa-print mr-1"></i> Print
              </Button>       
                 </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ReceiptDetails;

