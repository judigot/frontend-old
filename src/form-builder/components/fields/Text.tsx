interface Props extends TextField {}

const Text = ({}: Props) => {
  return (
    <div>
      <span>{props.title}</span>
      <input type="number" maxLength={props.maxLength} />
    </div>
  );
};

export default Text;
