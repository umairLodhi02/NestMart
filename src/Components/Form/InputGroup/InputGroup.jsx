import Dropdown from "../Dropdown/Dropdown";
import "./inputgroup.css";
const InputGroup = () => {
  const options = ["All Categories", "dfd", "sdsd"];
  return (
    <div className="w-100 input_group">
      <div className=" d-flex p-2 gap-4">
        <Dropdown options={options} hasInput={true} as={"options"} />
        <div className="divider"></div>
        <div className="input ml-2">
          <input
            type="text"
            placeholder="Search for items"
            className="w-100 outline-none"
          />
        </div>
      </div>
    </div>
  );
};
export default InputGroup;
