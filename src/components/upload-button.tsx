"use client";

import { UploadClient } from "@uploadcare/upload-client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface UploadButtonProps {
  onUploadComplete: (fileUrl: string) => void;
  children: React.ReactNode;
}

const uploadClient = new UploadClient({
  publicKey: "944ad5ac330ec5724929",
});

export default function UploadButton({
  onUploadComplete,
  children,
}: UploadButtonProps) {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const result = await uploadClient.uploadFile(file);
      if (result.cdnUrl) {
        onUploadComplete(result.cdnUrl);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast({
        title: "Error",
        description: "Failed to upload file. Please try again.",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      disabled={isUploading}
      className="relative"
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleUpload}
        accept="image/*"
      />
      {isUploading ? "Uploading..." : children}
    </Button>
  );
}