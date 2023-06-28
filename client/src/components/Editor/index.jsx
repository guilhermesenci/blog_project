import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { ident: "-1" }, { ident: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
};

// eslint-disable-next-line react/prop-types
const Editor = ({ value, onChange }) => {
  return (
    <ReactQuill
      theme={"snow"}
      value={value}
      onChange={onChange}
      modules={modules}
    />
  );
};

export default Editor;
