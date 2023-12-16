const InstagramQR = ({ setText, setChanged, setNewQR }) => {
  return (
    <>
      <label className="control-label">
        Enter Instagram Username:
        <div className="flex flex-row flex-nowrap">
          <p className="pt-2 text-qrmory-purple-400 font-bold text-lg">
            https://www.instagram.com/
          </p>
          <input
            type="text"
            className="control-input"
            onChange={(el) => {
              setText(`https://www.instagram.com/${el.target.value}`);
              setNewQR(false);
              setChanged(true);
            }}
          />
        </div>
      </label>
    </>
  );
};

export default InstagramQR;
