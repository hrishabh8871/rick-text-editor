import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import "./styles.css";
import MyStatefulEditor from "./rte_test";

export default function App() {
  const [val, setVal] = useState("");
  const [message, setMessage] = useState("");
  const onChange = (value) => {
    console.log(value);
    setVal(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(message);
  };

  return (
    <div className="">
      {/* <MyStatefulEditor markup="" onChange={onChange} /> */}
      <RichTextEditor getValue={(value) => setVal(value)} />
      <p>{val}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: val }} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          type="text"
          name={"message"}
          placeholder="Write a message"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source"]
};

export const RichTextEditor = ({ initialValue, getValue }) => {
  const editor = useRef(null);

  return (
    <>
      <JoditEditor
        ref={editor}
        value={initialValue}
        // config={config}
        tabIndex={1}
        //   onBlur={(newContent) => getValue(newContent)}
        onChange={(newContent) => {
          getValue(newContent);
          // console.log(newContent);
        }}
        // onChange={(event, editor) => {
        //   // onChange(data);
        // }}
      />
    </>
  );
};
