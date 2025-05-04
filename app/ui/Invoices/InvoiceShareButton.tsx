"use client";
import {
  FaCopy,
  FaFacebook,
  FaReddit,
  FaShare,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { workSans } from "../fonts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function InvoiceShareButton({
  isEditing,
  invoiceID,
}: {
  isEditing: boolean;
  invoiceID: string;
}) {
  const [copied, setCopied] = useState(false);
  const publicUrl = new URL(
    `/invoices/public/${invoiceID}`,
    process.env.NEXT_PUBLIC_SITE_URL
  ).toString();

  const handleCopyLink = () => {
    //copy the link to clipboard
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    //after 20 seconds set copied back to false, user can copy again
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          disabled={isEditing}
          className={`${
            workSans.className
          } flex items-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm ${
            isEditing ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
          }`}
        >
          <FaShare /> Share
        </DropdownMenuTrigger>
        <DropdownMenuContent className={workSans.className}>
          <DropdownMenuLabel>Share via</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault(); //prevent menu from closing onclick
              handleCopyLink();
            }}
          >
            <FaCopy className="mr-2" /> {copied ? "Link Copied!" : "Copy Link"}
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                publicUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2" /> Whatsapp
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                publicUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="mr-2" /> Twitter (X)
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                publicUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="mr-2" /> Facebook
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(
                publicUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit className="mr-2" /> Reddit
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
