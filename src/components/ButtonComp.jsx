import classNames from "classnames";

// eslint-disable-next-line react/prop-types
const ButtonComp = ({ childern, onClick, isActive }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames("mr-4 font-semibold uppercase text-neutral-300", {
          "text-black": isActive,
        })}
      >
        {childern}
      </button>
    </>
  );
};

export default ButtonComp;
