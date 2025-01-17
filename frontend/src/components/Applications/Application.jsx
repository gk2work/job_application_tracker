import React, { useState, useEffect } from "react";
import "./Application.css";
import { DeleteIcon, EditIcon } from "../../assets";

const FORM_DATA = {
  jobTitle: "",
  company: "",
  status: "In Progress",
  applicationDate: "",
};

const Applications = () => {
  const [formData, setFormData] = useState(FORM_DATA);
  const [applicationData, setApplicationData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getStatusColor = (status) => {
    if (status === "In Progress") {
      return { textColor: "#d7c188", backgroundColor: "#fef9c3" };
    } else if (status === "Rejected") {
      return { textColor: "#e2adad", backgroundColor: "#fee3e3" };
     } else if (status === "Accepted") {

       return { textColor: "#91c2a2", backgroundColor: "#c4ead1" };

    }
  };

  const getApplicatonData = () => {
    return JSON.parse(localStorage.getItem("applicationData"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const data = applicationData.map((item, index) => {
        if (index === editingIndex) {
          return formData;
        }
        return item;
      });
      setApplicationData(data);
      setEditingIndex(null);
      localStorage.setItem("applicationData", JSON.stringify(data));
    } else {
      const resultValue = [formData,...applicationData??[]];
      setApplicationData(resultValue);
      localStorage.setItem("applicationData", JSON.stringify(resultValue));
    }
    setFormData(FORM_DATA);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(applicationData[index]);
  };

  const handleDelete = (index) => {
    const updatedData = applicationData.filter((_, i) => i !== index);
    setApplicationData(updatedData);
    localStorage.setItem("applicationData", JSON.stringify(updatedData));
  };

  useEffect(() => {
    const applicationValue = getApplicatonData();
    setApplicationData(applicationValue);
  }, []);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <h4 className="my-2 px-2">Job Applications</h4>

          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#jobApplicationModal"
          >
            + Add Application{" "}
          </button>
        </div>
        <div className="table-responsive">
          <table className="table"> 
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Status</th>
                <th>Application Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicationData?.map((application, index) => (
                <tr key={index}>
                  <td>{application.jobTitle}</td>
                  <td>{application.company}</td>
                  {/* <td>{application.status}</td> */}
                  <td>
                    <div
                      className="status-styling"
                      style={{
                         backgroundColor: getStatusColor(application.status)
                          .backgroundColor,
                         color: getStatusColor(application.status).textColor,

                      }}
                    >
                      {application.status}
                    </div>
                  </td>
                  <td>{application.applicationDate}</td>
                  <td className="d-flex">
                    <button
                      className="edit-btn me-2"
                      onClick={() => handleEdit(index)}
                      data-bs-toggle="modal"
                      data-bs-target="#jobApplicationModal"
                    >
                      <img height={20} src={EditIcon} alt="" />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      <img height={20} src={DeleteIcon} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobApplicationModal"
        tabIndex="-1"
        aria-labelledby="jobApplicationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="jobApplicationModalLabel">
                Job Application Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="jobTitle" className="col-form-label">
                    Job Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="company" className="col-form-label">
                    Company:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="col-form-label">
                    Status:
                  </label>
                  <select
                    className="form-select"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Accepted">Accepted</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="applicationDate" className="col-form-label">
                    Application Date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="applicationDate"
                    name="applicationDate"
                    value={formData.applicationDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Applications;
