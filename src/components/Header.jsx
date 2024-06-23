import styles from "./Header.module.css";
import { useState, useRef } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { IoIosLink } from "react-icons/io";
import { TfiUpload } from "react-icons/tfi";
import { HiOutlineMenu } from "react-icons/hi";
import { Input } from "@chakra-ui/react";

function Header(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const createModule = () => {
    const new_module = document.getElementById("module_name").value;
    // console.log(new_module);
    let temp = [...props.Modules, new_module];
    // console.log(temp);
    props.setModules(temp);
    setShow(false);
  };

  const addLink = () => {
    const url = document.getElementById("url").value;
    const url_name = document.getElementById("url_name").value;
    const obj = { url: url, url_name: url_name };
    // console.log(new_module);
    let temp = [...props.Links, obj];
    // console.log(temp);
    props.setLinks(temp);
    setShow1(false);
  };

  const createResource = () => {
    const new_resource = document.getElementById("resource_name").value;
    // console.log(new_module);
    let temp = [...props.Resources, new_resource];
    // console.log(temp);
    props.setResources(temp);
    setShow2(false);
  };

  const fileInputRef = useRef();

  const handleButtonClick = () => {
    var input = document.createElement("input");
    input.type = "file";
    input.click();

    input.onchange = (e) => {
      var file = e.target.files[0];
      // console.log(file);
      let temp = [...props.Resources, file.name];
      // console.log(temp);
      props.setResources(temp);
    };
    // if (fileInputRef.current) {
    //   fileInputRef.current.click();
    // }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  return (
    <div className={styles.header}>
      <h2 className={styles.extra_padding}>Course builder</h2>
      <Dropdown className={`${styles.extra_padding} dropdown`}>
        <Dropdown.Toggle variant="danger">+Add</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <HiOutlineMenu className={styles.icon_space} />
            <button
              variant="primary"
              onClick={handleShow}
              className="btn btn-light"
            >
              Create Module
            </button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create new module</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h6>Module Name</h6>
                <div className={styles.module_name_container}>
                  <input
                    type="text"
                    name="module_name"
                    id="module_name"
                    className={styles.module_name}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  variant="secondary"
                  onClick={handleClose}
                  className="btn btn-light"
                >
                  Cancel
                </button>
                <button
                  variant="primary"
                  onClick={createModule}
                  className="btn btn-primary"
                >
                  Create
                </button>
              </Modal.Footer>
            </Modal>
          </Dropdown.Item>
          <Dropdown.Item>
            <IoIosLink className={styles.icon_space} />
            <button
              variant="primary"
              onClick={handleShow1}
              className="btn btn-light"
            >
              Add a link
            </button>

            <Modal show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Add new link</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h6>URL</h6>
                <div className={styles.module_name_container}>
                  <input
                    type="text"
                    name="url"
                    id="url"
                    className={styles.module_name}
                  />
                </div>
                <br />
                <h6>Display Name</h6>
                <div className={styles.module_name_container}>
                  <input
                    type="text"
                    name="url_name"
                    id="url_name"
                    className={styles.module_name}
                  />
                </div>
                <br />
              </Modal.Body>
              <Modal.Footer>
                <button
                  variant="secondary"
                  onClick={handleClose}
                  className="btn btn-light"
                >
                  Cancel
                </button>
                <button
                  variant="primary"
                  onClick={addLink}
                  className="btn btn-primary"
                >
                  Add
                </button>
              </Modal.Footer>
            </Modal>
          </Dropdown.Item>
          <Dropdown.Item>
            <TfiUpload className={styles.icon_space} />
            <button
              variant="primary"
              onClick={handleButtonClick}
              className="btn btn-light"
            >
              Upload
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf|audio/*|video/*|image/*|"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title>Add new resource</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h6>Resource Name</h6>
                <div className={styles.module_name_container}>
                  <input
                    type="text"
                    name="resource_name"
                    id="resource_name"
                    className={styles.module_name}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  variant="secondary"
                  onClick={handleClose2}
                  className="btn btn-light"
                >
                  Cancel
                </button>
                <button
                  variant="primary"
                  onClick={createResource}
                  className="btn btn-primary"
                >
                  Create
                </button>
              </Modal.Footer>
            </Modal>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Header;
