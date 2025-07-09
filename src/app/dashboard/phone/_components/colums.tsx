"use client";

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { MoreHorizontal, Phone, SquarePen, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import supabase from "@/utils/supabase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PhoneForm from "./form";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Phone = {
  id: string;
  name: string;
  image: string;
  price: string;
  desc: string;
  created_at: Date;
  updated_at: Date;
};

export const columns: ColumnDef<Phone>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={row.original.image}
        alt={row.original.name}
        width={600}
        height={600}
        className="w-[8rem] h-[8rem] rounded-lg object-cover"
      />
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "desc",
    header: "Description",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const phone = row.original;
      const [open, setOpen] = useState(false);
      const router = useRouter();

      const handleDelete = async () => {
        const { error } = await supabase
          .from("phone")
          .delete()
          .eq("id", phone.id);

        if (error) {
          console.error(error);
        } else {
          toast.success("Phone deleted successfully");
          router.refresh();
        }
        setOpen(false); // Đóng dialog sau khi xong
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(phone.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <PhoneForm id={phone.id} />
              <DropdownMenuItem onClick={() => setOpen(true)}>
                <Trash2 className="text-rose-500 mr-2 size-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      );
    },
  },
];
