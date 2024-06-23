import styles from "./Links.module.css";
import styles1 from "./Header.module.css";
import { useState, useRef } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { FaLink } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

function LinksDisplay(props) {
  const links = props.Links;

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleEditShow1 = (link) => {
    // link = link.link;
    setShow1(true);
    console.log(link);
    console.log(document.getElementById(`${link.url_name}`));
    // ref1.value = link.url;
    // ref2.value = link.url_name;
  };

  const deleteLink = (link) => {
    let arr = links.filter(function (item) {
      return item !== link;
    });
    props.setLinks(arr);
  };

  const renameLink = (link) => {
    const new_url = ref1.value;
    const new_name = ref2.value;

    // console.log(new_url, new_url_name);

    let arr = [...links];
    // console.log(arr.indexOf(link));

    arr[arr.indexOf(link)].url = new_url;
    arr[arr.indexOf(link)].url_name = new_name;

    props.setLinks(arr);
    setShow1(false);
    console.log(arr);
  };

  return (
    <ul>
      {links.map((link) => (
        <li key={link.url_name}>
          <div className={styles.item_container}>
            <FaLink className={styles.icon} />
            <div className={styles.course_name}>
              <h6>
                <a href={link.url}>{link.url_name}</a>
              </h6>
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
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      handleEditShow1(link);
                    }}
                  >
                    Edit
                  </button>
                  <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit link</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h6>URL</h6>
                      <div className={styles1.module_name_container}>
                        <input
                          type="text"
                          id={link.url}
                          defaultValue={link.url}
                          className={styles1.module_name}
                        />
                      </div>
                      <br />
                      <h6>Display Name</h6>
                      <div className={styles1.module_name_container}>
                        <input
                          type="text"
                          id={link.url_name}
                          defaultValue={link.url_name}
                          className={styles1.module_name}
                        />
                      </div>
                      <br />
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        variant="secondary"
                        onClick={handleClose1}
                        className="btn btn-light"
                      >
                        Cancel
                      </button>
                      <button
                        variant="primary"
                        onClick={() => {
                          renameLink(link);
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
                      deleteLink(link);
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
export default LinksDisplay;
