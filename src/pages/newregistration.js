import React from "react";
// import DonationForm from "@/components/FormPage/Form";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Form from "@/components/FormPage/Form";



const NewRegistration = () => {
  return (
    <>
    <Layout pageTitle="New Registration">
      <PageHeader pageTitle="New Registration" />
      {/* <br/>
      <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/> */}
      <Form />
    
      
    </Layout>
    </>
  );
};

export default NewRegistration;
