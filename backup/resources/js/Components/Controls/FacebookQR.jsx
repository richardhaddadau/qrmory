const FacebookQR = ({ setText, setChanged, setNewQR }) => {
  return (
    <>
      <label className="control-label">
        Enter Facebook Username:
        <div className="flex flex-row flex-nowrap">
          <p className="pt-2 text-qrmory-purple-400 font-bold text-lg">
            https://facebook.com/
          </p>
          <input
            type="text"
            className="control-input"
            onChange={(el) => {
              setText(`https://facebook.com/${el.target.value}`);
              setNewQR(false);
              setChanged(true);
            }}
          />
        </div>
      </label>
    </>
  );
};

export default FacebookQR;
