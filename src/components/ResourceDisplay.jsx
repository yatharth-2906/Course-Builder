import styles from "./ResourceDisplay.module.css";
import styles1 from "./Header.module.css";
import { useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { CiMenuKebab } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { ImFilePdf } from "react-icons/im";
import { RiDownloadLine } from "react-icons/ri";

function ResourceDisplay(props) {
  const resources = props.Resources;

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const deleteResource = (item) => {
    let arr = resources.filter(function (res) {
      return res !== item;
    });
    props.setResources(arr);
  };

  const renameResource = (res) => {
    const new_resource = document.getElementById("resource_new_name").value;

    let arr = [...resources];
    arr[arr.indexOf(res)] = new_resource;

    props.setResources(arr);
    setShow2(false);
  };

  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource}>
          <div className={styles.item_container}>
            <ImFilePdf className={styles.icon} />
            <div className={styles.course_name}>
              <h6>{resource}</h6>
            </div>
            <Dropdown className={`${styles.course_menu}`}>
              <Dropdown.Toggle
                variant="none"
                drop="none"
                className={`${styles.dropdown}`}
              >
                <CiMenuKebab />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <FiEdit3 className={styles.icon_padding} />
                  <button className="btn btn-light" onClick={handleShow2}>
                    Rename
                  </button>
                  <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                      <Modal.Title>Rename File</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h6>File Name</h6>
                      <div className={styles1.module_name_container}>
                        <input
                          type="text"
                          name="resource_new_name"
                          id="resource_new_name"
                          className={styles1.module_name}
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
                        onClick={() => {
                          renameResource(resource);
                        }}
                        className="btn btn-primary"
                      >
                        Save Changes
                      </button>
                    </Modal.Footer>
                  </Modal>
                </Dropdown.Item>
                <Dropdown.Item>
                  <RiDownloadLine className={styles.icon_padding} />
                  <button
                    onClick={() => {
                      renameResource(resource);
                    }}
                    className="btn btn-light"
                  >
                    Download
                  </button>
                </Dropdown.Item>
                <Dropdown.Item className={styles.red_color}>
                  <RiDeleteBinLine className={styles.icon_padding} />
                  <button
                    onClick={() => {
                      deleteResource(resource);
                    }}
                    className={`${styles.delete_btn} btn btn-light`}
                  >
                    Delete
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ResourceDisplay;
