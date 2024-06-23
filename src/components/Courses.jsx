import styles from "./Courses.module.css";
import styles1 from "./Header.module.css";
import { useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

function Courses(props) {
  const modules = props.Modules;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteModule = (item) => {
    let arr = modules.filter(function (mod) {
      return mod !== item;
    });
    props.setModules(arr);
  };

  const renameModule = (mod) => {
    const new_module = document.getElementById("module_new_name").value;

    let arr = [...modules];
    arr[arr.indexOf(mod)] = new_module;

    props.setModules(arr);
    setShow(false);
  };

  return (
    <ul>
      {modules.map((module) => (
        <li key={module}>
          <div className={styles.item_container}>
            <FaCaretDown className={styles.icon} />
            <div className={styles.course_name}>
              <h6>{module}</h6>
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
                  <button className="btn btn-light" onClick={handleShow}>
                    Edit module name
                  </button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Rename File</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h6>File Name</h6>
                      <div className={styles1.module_name_container}>
                        <input
                          type="text"
                          name="module_new_name"
                          id="module_new_name"
                          className={styles1.module_name}
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
                        onClick={() => {
                          renameModule(module);
                        }}
                        className="btn btn-primary"
                      >
                        Save Changes
                      </button>
                    </Modal.Footer>
                  </Modal>
                </Dropdown.Item>
                <Dropdown.Item className={styles.red_color}>
                  <RiDeleteBinLine className={styles.icon_padding} />
                  <button
                    onClick={() => {
                      deleteModule(module);
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

export default Courses;
