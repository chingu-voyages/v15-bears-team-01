import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
  position: Yup.string()
    .min(3, "Position must be at least 3 characters.")
    .max(50, "Position name has too many characters.")
    .required("Job position required!"),
  company: Yup.string()
    .min(3, "Company name must be at least 3 characters.")
    .max(50, "Company name has too many characters.")
    .required("Company name required!"),
  status: Yup.string().required("Job status must be Green, Red, or Yellow."),
  date_applied: Yup.date("Application date must be a valid date.").required(
    "Date of application required!"
  ),
  point_of_contact: Yup.string(),
  poc_email: Yup.string().email("Please enter a valid e-mail address."),
  poc_phone: Yup.string(),
  location: Yup.string(),
  notes: Yup.string().max(255, "Too many characters.")
});

export const formFields = [
  {
    name: "position",
    labelInnerText: "Job Position",
    initialValue: "",
    type: "input"
  },
  {
    name: "company",
    labelInnerText: "Company",
    initialValue: "",
    type: "input"
  },
  {
    name: "location",
    labelInnerText: "Location",
    initialValue: "",
    type: "input"
  },
  {
    name: "date_applied",
    labelInnerText: "Date Applied",
    initialValue: new Date(),
    type: "date"
  },
  {
    name: "status",
    labelInnerText: "Application Status",
    initialValue: "Red",
    type: "select",
    options: ["Red", "Yellow", "Green"]
  },
  {
    name: "point_of_contact",
    labelInnerText: "Point of Contact Name",
    initialValue: "",
    type: "input"
  },
  {
    name: "poc_email",
    labelInnerText: "Point of Contact Email",
    initialValue: "",
    type: "input"
  },
  {
    name: "poc_phone",
    labelInnerText: "Point of Contact Phone",
    initialValue: "",
    type: "input"
  },
  {
    name: "notes",
    labelInnerText: "Notes",
    initialValue: "",
    type: "textarea"
  }
];
