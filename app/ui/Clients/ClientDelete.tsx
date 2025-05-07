"use client";
import { deleteClientAction } from "@/app/lib/actions";
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
import { FaSpinner, FaTrash } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";

export default function ClientDelete({ id }: { id: string }) {
  const router = useRouter();
  const [message, formAction, isPending] = useActionState(
    deleteClientAction,
    undefined
  );

  // dialog open/close state
  const [open, setOpen] = useState(false);

  // handle action response
  useEffect(() => {
    if (message === "Client Deleted Successfully") {
      toast.success(message);
      // close dialog
      setOpen(false);
      // wait for toast to show before refreshing
      setTimeout(() => {
        router.refresh();
      }, 1500);
    } else if (message) {
      toast.error(message);
    }
  }, [message, router]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <ToastContainer />
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="text-red-600 hover:text-red-800"
          title="Delete"
        >
          {isPending ? <FaSpinner /> : <FaTrash />}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>Delete Client</DialogTitle>
            <input type="hidden" name="clientID" defaultValue={id} />
            <DialogDescription>
              Are you sure you want to delete this client? This action is
              permanent and cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              autoFocus
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="destructive">
              {isPending ? (
                <span className="flex items-center gap-2">
                  <FaSpinner className="animate-spin" /> Deleting...
                </span>
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
