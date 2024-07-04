import { NextResponse } from 'next/server';
import connectToDatabase from 'src/app/config/db';

export async function POST(req) {
  const time = new Date();


  try {
    const body = await req.json();
    // console.log("body", body);
    const {
      provisionalRegistrationNo,
      name,
      fathersName,
      mothersName,
      lastName,
      dateOfBirth,
      email,
      mobileNumber,
      gender,
      category,
      nationality,
      stateOfResidence,
      aadharCardNo,
      sector,
      degree,
      dateOfPassing,
      universityName,
      collegeName,
      mobileNo,
      alternateMobileNo,
      emailId,
      alternateEmailId,
      isForeign,
      permanentAddress,
      permanentState,
      permanentDistrict,
      permanentTaluka,
      permanentVillage,
      permanentPincode,
      workingAddress,
      workingState,
      workingDistrict,
      workingTaluka,
      workingVillage,
      workingPincode,
      oath,
    } = body;

    // Get a connection from the pool
    const connection = await connectToDatabase();
    await connection.beginTransaction();

    try {
      const sqlInsert = "INSERT INTO registration  (provisionalRegistrationNo, name, fathersName, mothersName, lastName, dateOfBirth, email, mobileNumber, gender, category, nationality, stateOfResidence, aadharCardNo, sector, degree, dateOfPassing, universityName, collegeName, mobileNo, alternateMobileNo, emailId, alternateEmailId, isForeign, permanentAddress, permanentState, permanentDistrict, permanentTaluka, permanentVillage, permanentPincode, workingAddress, workingState, workingDistrict, workingTaluka, workingVillage, workingPincode, oath) VALUES ?";
      const values = [[provisionalRegistrationNo, name, fathersName, mothersName, lastName, dateOfBirth, email, mobileNumber, gender, category, nationality, stateOfResidence, aadharCardNo, sector, degree, dateOfPassing, universityName, collegeName, mobileNo, alternateMobileNo, emailId, alternateEmailId, isForeign, permanentAddress, permanentState, permanentDistrict, permanentTaluka, permanentVillage, permanentPincode, workingAddress, workingState, workingDistrict, workingTaluka, workingVillage, workingPincode, oath]];
      //  console.log("values", values);
      const [insertResult] = await connection.query(sqlInsert, [values]);
      // console.log("insert result",insertResult);
      const sqlSelect = "SELECT id FROM registration WHERE id = ?";
      const selectValues = [insertResult.insertId];
      const [selectResult] = await connection.query(sqlSelect, selectValues);
      // console.log("select: " + selectResults.join());
      await connection.commit();

      return NextResponse.json(
        { status: 'success', data: selectResult[0] } // Assuming only one row is returned

      );
    } catch (error) {
      await connection.rollback();
      throw error; // Re-throw the error for handling in the catch block below
    } finally {
      connection.release(); // Release the connection back to the pool
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }

    );
  }
}

