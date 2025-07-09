"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useEffect, useState, useTransition } from "react";
import { CloudUpload, Paperclip, Loader2, SquarePen } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/file-upload";
import { uploadFileCloudinary } from "@/utils/cloudinary";
import { addPhone, updatePhone } from "../actions";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import supabase from "@/utils/supabase";
import Image from "next/image";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().min(1, "Price is required"),
  quality: z.number().min(1, "Quality is required"),
  desc: z.string(),
  image: z.string().min(1, "Image is required"),
});

export default function PhoneForm({ id }: { id?: string }) {
  const router = useRouter();
  const [phone, setPhone] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[] | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchPhone = async () => {
      if (id) {
        const { data: phone, error } = await supabase
          .from("phone")
          .select("*")
          .eq("id", id)
          .single();
        setPhone(phone);
      }
    };
    fetchPhone();
  }, [id]);

  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      quality: 0,
      desc: "",
      image: "",
    },
  });

  useEffect(() => {
    if (phone) {
      form.reset(phone);
      // Don't reset files when editing - let the FileUploader show existing image
      // setFiles(null);
    }
  }, [phone, form]);

  const handleFileUpload = async (newFiles: File[] | null) => {
    setFiles(newFiles);

    if (newFiles && newFiles.length > 0) {
      setIsUploading(true);
      try {
        const uploadedUrl = await uploadFileCloudinary(newFiles[0]);
        if (uploadedUrl) {
          form.setValue("image", uploadedUrl);
          toast.success("Image uploaded successfully!");
        } else {
          toast.error("Failed to upload image. Please try again.");
        }
      } catch (error) {
        console.error("Upload error:", error);
        toast.error("Failed to upload image. Please try again.");
      } finally {
        setIsUploading(false);
      }
    } else {
      form.setValue("image", "");
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("price", values.price.toString());
        formData.append("quality", values.quality.toString());
        formData.append("desc", values.desc);
        formData.append("image", values.image);

        const result = await addPhone(formData);

        if (result.error) {
          toast.error(result.error);
        } else {
          toast.success("Phone added successfully!");
          setOpen(false);
        }
      } catch (error) {
        console.error("Form submission error", error);
        toast.error("Failed to submit the form. Please try again.");
      }
    });
  };

  const onUpdate = async (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("price", values.price.toString());
        formData.append("quality", values.quality.toString());
        formData.append("desc", values.desc);
        formData.append("image", values.image);

        const result = await updatePhone(formData, id as string);

        if (result.error) {
          toast.error(result.error);
        } else {
          toast.success("Phone updated successfully!");
          setOpen(false);
          router.refresh();
        }
      } catch (error) {
        console.error("Form submission error", error);
        toast.error("Failed to submit the form. Please try again.");
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {id ? (
        <DialogTrigger asChild>
          <p className="flex items-center px-2 py-1 cursor-pointer">
            <SquarePen className="mr-4 size-4" />
            Edit
          </p>
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button variant={"default"}>Add Phone</Button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{id ? "Edit phone" : "Add new phone"} </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={
              id ? form.handleSubmit(onUpdate) : form.handleSubmit(onSubmit)
            }
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" type="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={handleFileUpload}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          {isUploading ? (
                            <Loader2 className="text-gray-500 w-10 h-10 animate-spin" />
                          ) : phone?.image ? (
                            <div className="flex flex-col items-center">
                              <Image
                                src={phone.image}
                                alt="Current image"
                                width={100}
                                height={100}
                                className="w-20 h-20 object-cover rounded-lg mb-2"
                              />
                              <p className="text-sm text-gray-500">
                                Current image
                              </p>
                            </div>
                          ) : (
                            <CloudUpload className="text-gray-500 w-10 h-10" />
                          )}
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            {isUploading ? (
                              <span className="font-semibold">
                                Uploading...
                              </span>
                            ) : (
                              <>
                                <span className="font-semibold">
                                  Click to upload
                                </span>
                                &nbsp; or drag and drop
                              </>
                            )}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                              {isUploading && (
                                <Loader2 className="h-4 w-4 animate-spin ml-2" />
                              )}
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Price"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quality</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Quality"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
