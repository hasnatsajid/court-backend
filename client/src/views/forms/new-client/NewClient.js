import React from "react";
import { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [client, setClient] = useState({});
  const [options, setOptions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setClient({ ...client, options });
    console.log(client);
  };

  const onValueChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    console.log(val, name);

    setClient({
      ...client,
      [name]: val,
    });
    console.log(client);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      if (!options.includes(value)) {
        setOptions([...options, value]);
      }
    } else {
      const newOptions = options.filter((el) => el !== value);
      setOptions([...newOptions]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <h2 style={{ textAlign: "center" }}>New Client</h2>
        </div>
        <hr />
        <br />
        <div className="form-group col-md-6">
          <label>Name</label>
          <input
            className="form-control"
            // value={NewClientInfo.name}
            placeholder="Enter your name"
            name="name"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Address</label>
          <input
            type="Address"
            className="form-control"
            // value={NewClientInfo.address}
            name="address"
            placeholder="Enter your Address"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            // value={NewClientInfo.age}
            placeholder="Enter your age"
            name="age"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            // value={NewClientInfo.number}
            placeholder="Enter your contact number"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Gender</label>
          <select
            id="inputGender"
            className="form-control"
            name="gender"
            value="male"
            onChange={onValueChange}
          >
            <option>Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Civil Status</label>
          <input
            type="text"
            className="form-control"
            name="status"
            placeholder="whats your civil status i.e: Married, Divorced"
            onChange={onValueChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label>Monthly Income</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your income"
            name="income"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Religion</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your religion"
            name="religion"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Educational Attainment</label>
          <input
            type="text"
            className="form-control"
            placeholder="i.e: Your bachelor or master degree"
            name="education"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Nationality</label>
          <input
            type="text"
            className="form-control"
            name="nationality"
            placeholder="what's your nationality"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Spouse</label>
          <input
            type="text"
            className="form-control"
            placeholder="if any"
            name="spouse"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Address of Spouse</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="spouse_address"
            onChange={onValueChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label>Language / Dialect</label>
          <input
            type="text"
            className="form-control"
            placeholder="what's your language"
            name="language"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Phone Number of Spouse</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your spouse's phone number"
            name="spouse_phone"
            onChange={onValueChange}
          />
        </div>
      </div>
      <br />

      <div className="form-check">
        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value="CICL"
            // checked={NewClientInfo.cicl}
            onChange={handleChange}
          />
          <label htmlFor="">CICL</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Women"}
            // checked={NewClientInfo.women}
            onChange={handleChange}
          />
          <label htmlFor="">Women</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Victim of VAWC"}
            // checked={NewClientInfo.victimOfVAWC}
            onChange={handleChange}
          />
          <label htmlFor="">Victim of VAWC</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"PNP"}
            // checked={NewClientInfo.pnp}
            onChange={handleChange}
          />
          <label htmlFor="">PNP</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Drug Related"}
            // checked={NewClientInfo.drugRelated}
            onChange={handleChange}
          />
          <label htmlFor="">Drug related</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"OFW - land-based"}
            // checked={NewClientInfo.OfwLandBased}
            onChange={handleChange}
          />
          <label htmlFor="">OFW - land-based</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"OFW - sea-based"}
            // checked={NewClientInfo.OfwSeaBased}
            onChange={handleChange}
          />
          <label htmlFor="">OFW - sea-based</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Senior Citizen"}
            // checked={NewClientInfo.seniorCitizen}
            onChange={handleChange}
          />
          <label htmlFor="">Senior Citizen</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Refugee/Evacuee"}
            // checked={NewClientInfo.refugee}
            onChange={handleChange}
          />
          <label htmlFor="">Refugee/Evacuee</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Agrarian Tenant"}
            // checked={NewClientInfo.agrarianTenant}
            onChange={handleChange}
          />
          <label htmlFor="">Agrarian Tenant</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Victim of Terrorism"}
            // checked={NewClientInfo.victimOfTerrorism}
            onChange={handleChange}
          />
          <label htmlFor="">Victim of Terrorism</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Victim of Torture"}
            // checked={NewClientInfo.victimOfTorture}
            onChange={handleChange}
          />
          <label htmlFor="">Victim of Torture</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value="Victim of Trafficking"
            // checked={NewClientInfo.victimOfTrafficking}
            onChange={handleChange}
          />
          <label htmlFor="">Victim of Trafficking</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value="Foreigner"
            // checked={NewClientInfo.foreigner}
            onChange={handleChange}
          />
          <label htmlFor="">Foreigner</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value="Urban poor"
            // checked={NewClientInfo.urbanPoor}
            onChange={handleChange}
          />
          <label htmlFor="">Urban poor</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value="Rural poor"
            // checked={NewClientInfo.ruralPoor}
            onChange={handleChange}
          />
          <label htmlFor="">Rural poor</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Indigenous people"}
            // checked={NewClientInfo.indigenousPeople}
            onChange={handleChange}
          />
          <label htmlFor="">Indigenous people</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value="PWD"
            // checked={NewClientInfo.pwd}
            onChange={handleChange}
          />
          <label htmlFor="">PWD</label>
        </div>

        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value="File a petition for REHAB"
            // checked={NewClientInfo.petitionForRehab}
            onChange={handleChange}
          />
          <label htmlFor="">File a petition for REHAB</label>
        </div>
      </div>

      <br />

      <button type="submit" className="btn btn-primary save-btn">
        Save
      </button>
      <button className="btn btn-success task-btn">New task</button>
    </form>
  );
};
export default NewClient;
