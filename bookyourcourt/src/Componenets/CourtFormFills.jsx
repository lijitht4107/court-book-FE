import React, { useState } from "react";
import "../Commen/css/CourtFormFills.css";
import AxiosInstance from "../Config/AxiosInstance";

function CourtFormFills() {
  const [formValue, setFormValue] = useState({
    courtName: "",
    location: "",
    type: "",
    address: "",
  });
  const [courtPicture, setCourtPicture] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const addFileData = (e) => {
    setCourtPicture(e.target.files[0]);
    e.target?.files[0]? setSelectedImage(URL?.createObjectURL(e.target.files[0]) ?? null): setSelectedImage(null);
 
  };
  const addCourtData = () => {
    let fileData = new FormData();
    fileData.append('image', courtPicture);

    AxiosInstance.post("/admin/addNewcourt",fileData,{ params:formValue},{headers:{"Content-Type": "multipart/form-data"}}).then((response)=> {

    })
  };

  return (
    <>
      <div className="p-5">
        <div className="container fluid border border-secondary rounded  pt-5 pb-5">
          <h3 className="courtheading">Court Adding Form</h3>
          <hr className="breakline" />
          <div className="row g-3  needs-validation">
            <div className="col-md-5">
              <div className="form-outline" data-mdb-input-init>
                <input
                  name="courtName"
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  value={formValue.courtName}
                  onChange={onChange}
                  required
                />
                <label htmlFor="validationCustom01" className="form-label">
                  <b>Court name</b>
                </label>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-outline" data-mdb-input-init>
                <input
                  name="location"
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  value={formValue.location}
                  onChange={onChange}
                  required
                />
                <label htmlFor="validationCustom02" className="form-label">
                  <b>Location</b>
                </label>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-outline" data-mdb-input-init>
                <input
                  name="type"
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  value={formValue.type}
                  onChange={onChange}
                  required
                />
                <label htmlFor="validationCustom02" className="form-label">
                  <b>Type</b>
                </label>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-outline" data-mdb-input-init>
                <textarea
                  name="address"
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  value={formValue.address}
                  onChange={onChange}
                  required
                />
                <label
                  htmlFor="validationCustom03"
                  className="form-label form-floating"
                >
                  <b>Address</b>
                </label>
                <div className="invalid-feedback">
                  Please provide a valid address.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group form-outline" data-mdb-input-init>
                <input
                  name="courtpic"
                  type="file"
                  value={addFileData.courtpic}
                  className="form-control"
                  id="validationCustomUsername"
                  placeholder="picture"
                  aria-describedby="inputGroupPrepend"
                  onChange={addFileData}
                  required
                />

                <div className="invalid-feedback">choose a file</div>
              </div>
            </div>

            {selectedImage && (<img src={selectedImage} alt="court-picture" className="image col-md-2"/>)}

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12">
              <button
                onClick={addCourtData}
                className="btn btn-primary"
                type="submit"
                data-mdb-ripple-init
              >
                Submit form
              </button>
              <button
                className="btn btn-primary mx-3"
                type="submit"
                data-mdb-ripple-init
              >
                Reset form
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourtFormFills;
