import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import { AxiosPost } from "../../../Common/Axios";
import Loader from "../../../Common/Loader";
import swal from "../../../Common/SwalAlert";
import { useHistory } from "react-router-dom";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ClearIcon from "@material-ui/icons/Clear";
import Icon from "@material-ui/core/Icon";
import DragAndDrop from "../../../Common/DragAndDrop";
import CancelIcon from "@material-ui/icons/Cancel";

const list = [
  {
    name: "event_name",
    Display: "Event Name",
  },
  {
    name: "event_link",
    Display: "Event Link",
  },
  {
    name: "event_venue",
    Display: "Event Venue",
  },
];
function CreateEvent() {
  let history = useHistory();
  const [data, setData] = useState({
    event_name: "",
    event_link: "",
    event_date: new Date(),
    event_time: "10:00",
    event_venue: "",
  });
  const [loader, setLoader] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [files, setFiles] = useState();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formdata = new FormData();
    for (let key in data) {
      console.log(key, data[key]);
      formdata.append(`${key}`, data[key]);
    }
    formdata.append("event_date", data.event_date.toISOString().split("T")[0]);
    if (files) formdata.append("image", files);
    formdata.append("test", "test val");
    console.log(formdata);

    setLoader(true);
    function handleSuccess(res) {
      console.log(res);
      setLoader(false);
      swal("Successfully Added", undefined, "success");
      history.push("/admin");
      history.push("/admin/Events");
    }
    function handleError(err) {
      console.log(err);
      setLoader(false);
      swal("Something Went Wrong! Try Again", undefined, "error");
    }
    AxiosPost("/api/v1/event-list", formdata, handleSuccess, handleError);
  }

  function handleFileCheck(NewFiles, setSuccess) {
    if (NewFiles)
      if (NewFiles.length === 1) {
        let file = NewFiles[0];
        console.log(file.type.slice(0, 5));

        if (file.type.slice(0, 5) !== "image") {
          swal("File should be image", "Try again", "warning");
          return;
        }
        setFiles(file);
        setSuccess(true);
      } else if (NewFiles.length > 1) {
        swal("Please Select One File", "Try again", "warning");
      }
    console.log([...NewFiles]);
    console.log(NewFiles.length);
    //if(NewFiles && NewFiles.length>0){
    //setFiles([...NewFiles])
    //}
  }
  return (
    <div className="mt-3">
      {showForm && (
        <Loader active={loader}>
          <div>
            <form onSubmit={handleSubmit}>
              {list.map((item, index) => (
                <TextField
                  required
                  id="standard-full-width"
                  label={item.Display}
                  variant={"outlined"}
                  style={{ margin: 8 }}
                  placeholder={`Enter ${item.Display}`}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size={"medium"}
                  name={item.name}
                  key={index}
                  onChange={handleChange}
                  value={data[item.name]}
                />
              ))}
              <Row className="mx-1">
                <Col>
                  <label className="text-secondary mr-1"> Event Date:</label>
                  <DatePicker
                    onChange={(val) => setData({ ...data, event_date: val })}
                    value={data.event_date}
                    clearIcon={null}
                  />
                </Col>
                <Col>
                  <label className="text-secondary mr-1"> Event Time:</label>
                  <TimePicker
                    locale="en-US"
                    clearIcon={null}
                    onChange={(val) => setData({ ...data, event_time: val })}
                    value={data.event_time}
                    required
                    placeholder="time"
                  />
                </Col>
              </Row>
              <Row className="justify-content-center my-3">
                <Col sm="10">
                  <DragAndDrop handleFileCheck={handleFileCheck} files={files}/>
                </Col>
                {
                  files &&
                <Col sm="10" className="text-center text-dark">
                  <span>{ files.name}</span>
                  <span onClick={()=>setFiles()}>
                    <CancelIcon />
                  </span>
                </Col>
                }
              </Row>
              <Row className="justify-content-end mt-2">
                <Button
                  className="d-block mr-2"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Add Event
                </Button>
              </Row>
            </form>
          </div>
        </Loader>
      )}

      <Row className=" mt-3">
        <Col className="col-auto">
          <Button
            className="d-block mr-2"
            variant="contained"
            color={!showForm ? "primary" : "secondary"}
            type="submit"
            //endIcon={!showForm?<AddBoxIcon/>:<ClearIcon/>}
            onClick={() => setShowForm(!showForm)}
          >
            {!showForm ? "Create Event" : "Cancel"}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CreateEvent;
