interface Props extends TextField {}

const Text = () => {
  return (
    <div>
      <span>{props.title}</span>
      <input type="number" maxLength={props.maxLength} />
    </div>
  );
};

export default Text;
