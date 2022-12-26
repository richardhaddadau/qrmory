const TextQR = ({ setText, setChanged, setNewQR }) => {
  return (
    <>
      <label className="control-label">
        Enter Text Message:
        <input
          type="text"
          className="control-input"
          onChange={(el) => {
            setText(el.target.value);
            setNewQR(false);
            setChanged(true);
          }}
        />
      </label>
    </>
  );
};

export default TextQR;
