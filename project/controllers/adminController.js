import adminModel from "../models/adminModel.js";
import fs from "fs";


// creating Employee

export const employeeEntryController = async (req, res) => {
  try {
    const {
      adminName,
      description,
      charges,
      adminPhone,
      experience,
      education,
      adminEmail,
    } = req.fields;
    const { photo } = req.files;
    // validating every data which is entered on here

    switch (true) {
      case !adminName:
        return res.status(500).send({ error: "Name is required" });
      case !description:
        return res.status(500).send({ error: "Description is required" });
      case !charges:
        return res.status(500).send({ error: "Charges is required" });
      case !adminPhone:
        return res.status(500).send({ error: "Phone Number is Must" });
      case !experience:
        return res.status(500).send({ error: "Experience is required" });
      case !education:
        return res
          .status(500)
          .send({ error: "Education Backgroung of Employee is required" });
      case !adminEmail:
        return res.status(500).send({ error: "Email Of Employee is required" });

      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "Photo is required with size less than 1mb" });
    }

    const employee = new adminModel({ ...req.fields });

    if (photo) {
      employee.photo.data = fs.readFileSync(photo.path);
      employee.photo.contentType = photo.type;
    }

    // aha pe save kar dete hai @Satya_Prakash
    await employee.save();
    res.status(201).send({
      success: true,
      message: "Employee Detail has been saved successfully ",
      employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Submitting Data form",
    });
  }
};

// get all the employee

export const getAllEmployee = async (req, res) => {
  try {
    const employees = await adminModel
      .find({})
      .select("-photo")
      .limit(19) // here limit used to show the max no of employee we will be getting at a time
      .sort({ createdAt: -1 });// to sort the creation of employee
    res.status(200).send({
      success: true,
      totalCount: employees.length,
      message: "All Employee",
      employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting employee",
    });
  }
};

// here we will try to get all the product

export const getEmployeephoto = async (req, res) => {
  try {
    const employee = await adminModel.findById(req.params.pid).select("photo");
    if (employee.photo.data) {
      res.set("Content-Type", employee.photo.contentType);
      return res.status(200).send(employee.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Photo of the employee",
    });
  }
};

// here we will be deleting the employee
export const deleteEmployee = async (req, res) => {
  try {
    await adminModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Employee Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Deletion of the Employee",
    });
  }
};

// here we will update the employee
export const updateEmployee = async (req, res) => {
  try {
    const {
      adminName,
      description,
      charges,
      adminPhone,
      experience,
      education,
      adminEmail,
    } = req.fields;
    const { photo } = req.files;

    //validation using switch statement
    switch (true) {
      case !adminName:
        return res.status(500).send({ error: "Name is required" });
      case !description:
        return res.status(500).send({ error: "Description is required" });
      case !charges:
        return res.status(500).send({ error: "Charges is required" });
      case !adminPhone:
        return res.status(500).send({ error: "Phone No is required" });
      case !experience:
        return res.status(500).send({ error: "Experience is required" });
        // -- experience is used to fetch the profile id of LinkedIn
      case !education:
        return res.status(500).send({ error: "Education is required" });
      case !adminEmail:
        return res.status(500).send({ error: "Email is required" });

      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "Photo is required with size less than 1mb" });
    }
    const employee = await adminModel.findByIdAndUpdate(
      req.params.pid,
      {
        ...req.fields,
      },
      { new: true }
    );
    if (photo) {
      employee.photo.data = fs.readFileSync(photo.path);
      employee.photo.contentType = photo.type;
    }

    await employee.save();
    res.status(201).send({
      success: true,
      message: "Employee has been saved successfully ",
      employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Updation of the Employee details",
    });
  }
};


// to get the photo of the users

