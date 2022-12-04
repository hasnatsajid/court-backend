import React from "react";
import { useState } from "react";


const NewCase = () => {

 

  const [NewCaseInfo, setNewCaseInfo] = useState({
    
    court: "",
    title: "",
    ClientsAssisted: "",
    number: "",
    AssistedFor: "",
    AssistedBy: "",
    nature: ""
  });

  const dropDownChange = (event) => {
    const nature = event.target.value;
    console.log(nature)
    setNewCaseInfo({
      ...NewCaseInfo,
      nature
    });
  };

  
  const handleTitleInputChange = (event) => {
    event.persist();
    setNewCaseInfo((NewCaseInfo) => ({
      ...NewCaseInfo,
      title: event.target.value,
    }));
  };
  const handleClientsAssistedInputChange = (event) => {
    event.persist();
    setNewCaseInfo((NewCaseInfo) => ({
      ...NewCaseInfo,
      ClientsAssisted: event.target.value,
    }));
  };
  const handleNumberInputChange = (event) => {
    event.persist();
    setNewCaseInfo((NewCaseInfo) => ({
      ...NewCaseInfo,
      number: event.target.value,
    }));
  };
  const handleAssistedForInputChange = (event) => {
    event.persist();
    setNewCaseInfo((NewCaseInfo) => ({
      ...NewCaseInfo,
      AssistedFor: event.target.value,
    }));
  };
  const handleAssistedByInputChange = (event) => {
    event.persist();
    setNewCaseInfo((NewCaseInfo) => ({
      ...NewCaseInfo,
      AssistedBy: event.target.value,
    }));
  };
  const handleCourtInputChange = (event) => {
    event.persist();
    setNewCaseInfo((NewCaseInfo) => ({
      ...NewCaseInfo,
      court: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(NewCaseInfo);
    // setNewCaseInfo({ name: "", email: "", phonenumber: "",court: "" });
  };

  
  

  return (
    <form onSubmit={handleSubmit}>
        <div className="col-md-12">
          <h2 style={{ textAlign: "center" }}>New Case</h2>
        </div>
        <hr />
        <br />

        <div class="form-group col-md-12">
          <label>Nature of the case</label>
          <select  class="form-control" onChange={dropDownChange}>
            <option selected>Please select the case type...</option>
            <option value={NewCaseInfo.criminal} >Criminal</option>
            <option value={NewCaseInfo.civil} >Civil</option>
            <option value={NewCaseInfo.administrative} >Administrative</option>
          </select>
        </div>
       

        <div class="form-group col-md-12">
          <label>Court</label>
          <input
            type="text"
            class="form-control"
            value={NewCaseInfo.court}
            placeholder="Enter the court name"
            onChange={handleCourtInputChange}
          />
        </div>
        <div class="form-group col-md-12">
          <label>Case Title</label>
          <input
            type="text"
            class="form-control"
            value={NewCaseInfo.title}
            placeholder="Your case title"
            onChange={handleTitleInputChange}
          />
        </div>
        <div class="form-group col-md-12">
          <label>Clients Assisted</label>
          <input
            type="text"
            class="form-control"
            value={NewCaseInfo.ClientsAssisted}
            placeholder="Search clients"
            onChange={handleClientsAssistedInputChange}
          />
        </div>
        <div class="form-group col-md-12">
          <label>Case Number</label>
          <input
            type="text"
            class="form-control"
            value={NewCaseInfo.number}
            placeholder="Your case number"
            onChange={handleNumberInputChange}
          />
        </div>
        <div class="form-group col-md-12">
          <label>For</label>
          <input
            type="text"
            class="form-control"
            value={NewCaseInfo.AssistedFor}
            onChange={handleAssistedForInputChange}
          />
        </div>
        <div class="form-group col-md-12">
          <label>Assisted By</label>
          <input
            type="text"
            class="form-control"
            value={NewCaseInfo.AssistedBy}
            placeholder="Search lawyers"
            onChange={handleAssistedByInputChange}
          />
        </div>
        <br/>
        <button type="submit" class="btn btn-primary save-btn" >
        Save
      </button>

    </form>
  );
};
export default NewCase;
