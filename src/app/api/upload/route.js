import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { v4 as uuidv4 } from 'uuid';

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const timestamp = Date.now();
  const uniqueId = uuidv4();
  const filename = `${timestamp}_${uniqueId}_${file.name.replaceAll(" ", "_")}`;
  console.log(filename);
  
  try {
    await writeFile(
      path.join(process.cwd(), "public/documents/" + filename),
      buffer
    );
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occurred ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
