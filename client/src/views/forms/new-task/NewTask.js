import React from "react";
import { useState } from "react";

const NewTask = () => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");

  const onValueChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    console.log(val, name);

    setChecked({
      ...checked,
      [name]: val,
    });
    console.log(checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setChecked({ ...checked });
    console.log(checked);
  };

  // const onValueChange = (e) => {
  //   const val = e.target.value;

  const onTextChange = (e) => {
    const val = setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-md-12">
        <h2 style={{ textAlign: "center" }}>New Task</h2>
      </div>
      <hr />
      <br />

      <div className="form-check">
        <div className="box">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Legal Advice"}
          />
          <label className="form-check-label">Legal Advice</label>
        </div>
        <br />

        <div className="form-group col-md-12">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Legal Documentation"}
          />
          <label className="form-check-label">Legal Documentation</label>
          <br />
          <input
            type="text"
            name="Title of documentation"
            className="form-control"
            onChange={onValueChange}
            placeholder="Title of documentation"
          />
        </div>

        <div className="form-group col-md-12">
          <label className="form-check-label">Legal Representation</label>
          <input
            className="form-check-input"
            type="checkbox"
            value={"Legal Representation"}
          />
          <br />
          <input
            onChange={onValueChange}
            type="text"
            name="Legal Representation - Case title"
            className="form-control"
            placeholder="Case title"
          />
          <br />

          <input
            onChange={onValueChange}
            type="text"
            name="Legal Representation - Case number"
            className="form-control"
            placeholder="Case number"
          />
          <br />
          <input
            type="text"
            name="Legal Representation - parties"
            onChange={onValueChange}
            className="form-control"
            placeholder="Parties"
          />
          <br />
          <input
            type="text"
            name="task/s assisted"
            onChange={onValueChange}
            className="form-control"
            placeholder="Legal Representation - task/s assisted"
          />
        </div>

        <div className="form-group col-md-12">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Inquest Assistance"}
          />
          <label className="form-check-label">Inquest Assistance</label>
          <br />
          <input
            type="text"
            name="Inquest Assistance - Case title"
            onChange={onValueChange}
            className="form-control"
            placeholder="Case title"
          />
          <br />

          <input
            type="text"
            name="Inquest Assistance - Case Number"
            onChange={onValueChange}
            className="form-control"
            placeholder="Case number"
          />
          <br />
          <input
            type="text"
            name="Inquest Assistance - Parties"
            onChange={onValueChange}
            className="form-control"
            placeholder="Parties"
          />
        </div>

        <div className="form-group col-md-12">
          <label className="form-check-label">Meditation</label>
          <input
            className="form-check-input"
            type="checkbox"
            value="Meditation"
            checked={checked}
            onChange={() => {
              if (checked) {
                setText("");
              }
              setChecked(!checked);
            }}
          />
          <br />
          <input
            type="text"
            name="Meditation - parties"
            disabled={!checked}
            value={text}
            onChange={onTextChange}
            className="form-control"
            placeholder="Parties"
          />
        </div>

        <div className="form-group col-md-12">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Administered Oath"}
          />
          <label className="form-check-label">Administered Oath</label>
          <br />
          <input
            type="text"
            name="Administered Oath - title of docuement"
            onChange={onValueChange}
            className="form-control"
            placeholder="Title of document"
          />
        </div>

        <div className="form-group col-md-12">
          <input
            className="form-check-input"
            type="checkbox"
            value={"Others"}
          />
          <label className="form-check-label">Others</label>
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
export default NewTask;
