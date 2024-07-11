import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Ashu");
  const [email, setEmail] = useState("ash@mail.com");
  const [text, setText] = useState("Hiiii");

  const onsubmit = (event) => {
    event.preventDefault();
    console.log(event);

    setName(event.target[3].value);
    setEmail(event.target[4].value);
    setText(event.target[5].value);
  };
  return (
    <>
      <div className={`${styles.container} container`}>
        <form onSubmit={onsubmit} className={`${styles.left}`}>
          <div className={`${styles.output}`}>{`${name} ${email} ${text}`}</div>

          <div className={`${styles.top_button}`}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
            <Button text="VIA CALL" icon={<IoIosCall />} />
          </div>

          <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdMessage />} />

          <div className={`${styles.formContainer}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className={`${styles.formContainer}`}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className={`${styles.formContainer}`}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" id="text" />
          </div>

          <Button text="SUBMIT" />
        </form>
        <div className={`${styles.right}`}>
          <img src="/images/customer.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
