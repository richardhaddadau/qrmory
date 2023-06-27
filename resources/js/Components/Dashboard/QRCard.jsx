import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { FaPencil, FaFloppyDisk, FaXmark, FaTrash } from "react-icons/fa6";
import { Skeleton } from "@mui/material";
import useForm from "../../Helpers/useForm";

const QRCard = ({
  title = "Untitled",
  type = "QR Type",
  cardIndex,
  unsavedChanges,
}) => {
  // States
  const [openEdit, setOpenEdit] = useState(false);
  const [changed, setChanged] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  // TODO: Edit Fields will be different depending on the type of QR Code it is
  const { editFieldsValue, setEditFieldsValue } = useForm({});

  const handleSave = () => {
    setOpenEdit(false);
    unsavedChanges(cardIndex, false);
  };

  const loadEdit = () => {
    // TODO: Load card data
    setEditLoading(true);
    setOpenEdit(true);

    setTimeout(() => {
      setEditLoading(false);
    }, 1500);
  };

  const onHandleChange = (event) => {
    setEditFieldsValue(event.target.name, event.target.value);
  };

  const toggleAlert = () => {
    setOpenAlert(!openAlert);
  };

  return (
    <>
      <article className="p-4 w-full rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="pb-2 flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start">
            <h2 className="-mb-1 text-left text-lg font-medium">{title}</h2>
            <h3 className="text-stone-500">{type}</h3>
          </div>
          {editLoading ? (
            <CircularProgress size={22} color={"inherit"} />
          ) : openEdit ? (
            <div className="flex flex-row flex-nowrap gap-4">
              <FaXmark
                className="cursor-pointer text-stone-400 hover:text-red-700 transition-all duration-300"
                title="Cancel Editing"
                size={22}
                onClick={() => {
                  changed ? setOpenAlert(true) : setOpenEdit(false);
                }}
              />
              <FaFloppyDisk
                className="cursor-pointer text-stone-400 hover:text-qrmory-purple-500 transition-all duration-300"
                title="Save Changes"
                size={22}
                onClick={() => {
                  // TODO: Save Changes
                  setChanged(false);
                  setOpenEdit(false);
                  handleSave();
                }}
              />
            </div>
          ) : (
            <FaPencil
              className="cursor-pointer text-stone-400 hover:text-qrmory-purple-500 transition-all duration-300"
              title="Edit Code"
              size={20}
              onClick={loadEdit}
            />
          )}
        </div>
        <div className="mt-1 mb-4 text-left text-sm italic transition-all duration-300">
          {/* TODO: Load card compressed link */}
          <a
            href="https://qrmory.com/visit/asdasd"
            className="py-1 hover:pl-1 pr-2 hover:bg-qrmory-purple-500 hover:text-white transition-all duration-300"
          >
            https://qrmory.com/visit/asdasd
          </a>
        </div>
        <div
          className={
            "pl-2.5 pr-3 py-4 flex flex-row items-center justify-between bg-qrmory-purple-500 border-t-1" +
            " text-white" +
            (openEdit
              ? " block transition-all duration-300"
              : " hidden transition-all duration-300")
          }
        >
          {editLoading ? (
            <div className="-mt-3 flex flex-col w-full">
              <Skeleton
                sx={{ bgcolor: "#8444A6" }}
                height={60}
                width={"100%"}
              />
              <Skeleton sx={{ bgcolor: "#8444A6" }} height={20} width={100} />
            </div>
          ) : (
            <div className="flex flex-col w-full text-left">
              {/* TODO: Load card data */}
              <input
                type="text"
                value="Sample"
                className="bg-qrmory-purple-400 border-qrmory-purple-400 shadow-lg"
                onChange={onHandleChange}
              />
              <span className="pt-1 text-sm italic text-qrmory-purple-300">
                Enter a website
              </span>
            </div>
          )}
        </div>
        <div className="pt-2 flex flex-row items-center justify-between border-t-1">
          <div className="italic text-stone-400 text-sm">
            Created on 01 March, 2022
          </div>
          <div
            className="cursor-pointer text-stone-400 hover:text-red-700 transition-all duration-300"
            title="Delete Code"
          >
            <FaTrash size={20} />
          </div>
        </div>
      </article>

      <Dialog
        open={openAlert}
        onClose={toggleAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have unsaved changes. Would you like to keep editing or discard
            the changes you've made?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleAlert}>Discard Changes</Button>
          <Button onClick={toggleAlert} autoFocus>
            Keep Editing
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default QRCard;
