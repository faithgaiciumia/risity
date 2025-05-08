"use client";
import { deleteClientAction, updateClient } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

export default function ClientEdit({
  id,
  clientName,
  clientEmail,
  clientCompanyName,
}: {
  id: string;
  clientName: string;
  clientEmail: string;
  clientCompanyName: string;
}) {
  const router = useRouter();
  const [message, formAction, isPending] = useActionState(updateClient, "");

  // dialog open/close state
  const [open, setOpen] = useState(false);

  // handle action response
  useEffect(() => {
    if (message === "Client updated successfully.") {
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
            <DialogTitle>Edit Client Info.</DialogTitle>
            <input type="hidden" name="clientID" defaultValue={id} />
          </DialogHeader>
          <div className="m-4">
            {/* client name */}
            <div>
              <div>
                <label
                  className={`mb-4 font-bold ${poppins.className} text-sm`}
                >
                  Client Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  required
                  name="clientName"
                  defaultValue={clientName}
                  placeholder="eg. Tom Baraka"
                  className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
                />
              </div>
            </div>
            {/* client email */}
            <div>
              <div>
                <label
                  className={`mb-4 font-bold ${poppins.className} text-sm`}
                >
                  Client Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  required
                  name="clientEmail"
                  defaultValue={clientEmail}
                  placeholder="eg. baraka@gmail.com"
                  className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
                />
              </div>
            </div>
            {/* client company */}
            <div>
              <div>
                <label
                  className={`mb-4 font-bold ${poppins.className} text-sm`}
                >
                  Client Company
                </label>
              </div>
              <div>
                <input
                  type="text"
                  required
                  defaultValue={clientCompanyName}
                  name="clientCompanyName"
                  placeholder="eg. Baraka Enterprises"
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
