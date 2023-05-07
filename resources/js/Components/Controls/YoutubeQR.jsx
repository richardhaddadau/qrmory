const YoutubeQR = ({ setText, setChanged, setNewQR }) => {
    return (
        <>
            <label className="control-label">
                Enter YouTube Link:
                <div className="flex flex-col xl:flex-row flex-nowrap">
                    <input
                        id="youtube-input"
                        type="text"
                        className={
                            "control-input"
                        }
                        onChange={(el) => {
                            if (el.target.value) {
                                setText(el.target.value);
                            } else {
                                setText("");
                            }

                            setChanged(true);
                        }}
                    />
                </div>
            </label>
        </>
    );
};

export default YoutubeQR;
