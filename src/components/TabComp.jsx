import ButtonComp from "./ButtonComp";
import BUTTON_CONTENT from "./constanst/button";

// eslint-disable-next-line react/prop-types
const TabComp = ({ change, setchange }) => {
  return (
    <>
      <div className="my-3">
        {BUTTON_CONTENT.map((text, index) => (
          <ButtonComp
            childern={text}
            key={index}
            onClick={() => setchange(index)}
            isActive={change === index}
          />
        ))}
      </div>
      <div>
        <h4>{BUTTON_CONTENT[change]} content</h4>
      </div>
    </>
  );
};

export default TabComp;
