import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export function DeleteModal({ open, onClose, onDelete }) {
  return (
    <Dialog className="bg-[#CDE8E5]" open={open} size="xs" handler={onClose}>
      <div className="flex items-center justify-between">
        <DialogHeader className="flex flex-col items-start">
          <Typography className="mb-1 text-black" variant="h4">
            Delete Todo
          </Typography>
        </DialogHeader>
      </div>
      <DialogBody>
        <Typography className="text-xl">
          Are you sure you want to delete this todo?
        </Typography>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="text" color="gray" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-red-600 text-white" onClick={onDelete}>
          Delete
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
