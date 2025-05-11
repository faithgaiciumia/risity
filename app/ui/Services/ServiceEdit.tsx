"use client";
import { updateService } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import { poppins } from "../fonts";

export default function ServiceEdit({
  id,
  name,
  description,
  price,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
}) {
  const router = useRouter();
  const [message, formAction, isPending] = useActionState(
    updateService,
    undefined
  );

  // dialog open/close state
  const [open, setOpen] = useState(false);

  // handle action response
  useEffect(() => {
    if (message === "Service updated successfully.") {
      toast.success(message);
      // close dialog
      setOpen(false);
      router.refresh();
    } else if (message) {
      toast.error(message);
    }
  }, [message]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <ToastContainer />
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="text-blue-600 hover:text-blue-800"
          title="Edit"
        >
          {isPending ? <FaSpinner /> : <FaEdit />} 
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>Edit Service Info.</DialogTitle>
            <input type="hidden" name="serviceID" defaultValue={id} />
          </DialogHeader>
          <div className="m-4">
            {/* client name */}
            <div>
              <div>
                <label
                  className={`mb-4 font-bold ${poppins.className} text-sm`}
                >
                  Service Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  required
                  name="serviceName"
                  defaultValue={name}
                  placeholder="eg. Website Development"
                  className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
                />
              </div>
            </div>
            {/* service description */}
            <div>
              <div>
                <label
                  className={`mb-4 font-bold ${poppins.className} text-sm`}
                >
                  Service Description
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="serviceDescription"
                  defaultValue={description}
                  placeholder="eg. develop complete website"
                  className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
                />
              </div>
            </div>
            {/* service price */}
            <div>
              <div>
                <label
                  className={`mb-4 font-bold ${poppins.className} text-sm`}
                >
                  Price
                </label>
              </div>
              <div>
                <input
                  type="number"
                  required
                  defaultValue={price}
                  name="servicePrice"
                  placeholder="eg. 10000"
                  className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              autoFocus
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="outline"
              className="bg-blue-600 text-white hover:bg-blue-800 hover:text-white"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <FaSpinner className="animate-spin" /> Saving...
                </span>
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
