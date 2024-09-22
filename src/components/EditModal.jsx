import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

export function MessageDialog({ open, onClose, initialText, onSave }) {
  const [messageText, setMessageText] = useState(initialText);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setMessageText(newText);
  };

  const handleSave = () => {
    onSave(messageText); 
    onClose(); 
  };

  return (
    <Dialog className="bg-[#CDE8E5]" open={open} size="xs" handler={onClose}>
      <div className="flex items-center justify-between">
        <DialogHeader className="flex flex-col items-start">
          <Typography className="mb-1 text-black" variant="h4">
            Edit Todo
          </Typography>
        </DialogHeader>
      </div>
      <DialogBody>
        <div className="grid gap-6 ">
          <Textarea label="Edit Your Task" className="text-xl" value={messageText} onChange={handleTextChange} />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="text" color="gray" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-blue-900 text-white" onClick={handleSave}>
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
