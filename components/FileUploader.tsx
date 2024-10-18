"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { toast } from "sonner";
import React from "react";

interface Props {
  onChange: (url?: string) => void;
  endPoint: keyof typeof ourFileRouter;
}

const FileUploader: React.FC<Props> = ({ onChange, endPoint }:Props) => {
  return (
    <UploadDropzone
      className="w-full bg-white"
      endpoint={endPoint}
      onClientUploadComplete={(res) => onChange(res?.[0]?.url)}
      onUploadError={(error: Error) => {
        toast(`${error.message}`, {
          className: "bg-rose-500 text-white", // Corrected property name
        });
      }}
    />
  );
};

export default FileUploader;
