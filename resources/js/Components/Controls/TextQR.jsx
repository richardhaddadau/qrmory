const TextQR = ({ setText, setChanged }) => {
  return (
    <>
      <label className="control-label">
        Enter Text Message:
        <input
          type="text"
          className="control-input"
          onChange={(el) => {
            setText(el.target.value);
            setChanged(true);
          }}
        />
      </label>
    </>
  );
};

export default TextQR;
