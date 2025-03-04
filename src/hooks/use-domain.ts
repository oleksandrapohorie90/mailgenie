"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddDomainSchema } from "@/schemas/settings.schema"; 
import { UploadClient } from "@uploadcare/upload-client";
import { onIntegrateDomain } from "@/actions/settings";
import { useToast } from "@/hooks/use-toast";

//this is where your imagine will upload
const upload = new UploadClient({
  publicKey: process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string,
});

export const useDomain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ name: string; icon: string; campaignId?: string }>({
    resolver: zodResolver(AddDomainSchema),
  });

  const pathname = usePathname();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [isDomain, setIsDomain] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    setIsDomain(pathname.split("/").pop());
  }, [pathname]);

  const onAddDomain = handleSubmit(async (values: FieldValues) => {
    setLoading(true);

    try {
      // Ensure an icon is provided
      if (!values.icon || values.icon.length === 0) {
        toast({ title: "Error", description: "Please upload an icon" });
        setLoading(false);
        return;
      }

      // Upload the icon
      const uploaded = await upload.uploadFile(values.icon[0]); // Assuming `values.icon` is a FileList

      // Arslan has this function living in settings/index.rs ?
      const domain = await onIntegrateDomain(values.domain, uploaded.uuid, values.icon[0].name);

      if (domain) {
        toast({
          title: domain.status === 200 ? "Success" : "Error",
          description: domain.message,
        });

        if (domain.status === 200) {
          reset();
          router.refresh();
        }
      }
    } catch (error) {
      console.error("Error adding domain:", error);
      toast({ title: "Error", description: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  });

  return { register, onAddDomain, errors, loading, isDomain };
};

// import { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { FieldValues, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { AddDomainSchema } from "@/schemas/settings.schema"; 
// import { UploadClient } from "@uploadcare/upload-client";
// import { onIntegrateDomain } from "@/actions/domain"; 
// import { useToast } from "@/hooks/use-toast";


// const upload = new UploadClient({
//   publicKey: process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string
// });

// export const useDomain = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm<FieldValues>({
//     resolver: zodResolver(AddDomainSchema), // Validate form with Zod
//   });

//   const pathname = usePathname();
//   const { toast } = useToast();
//   const [loading, setLoading] = useState<boolean>(false);
//   const [isDomain, setIsDomain] = useState<string | undefined>(undefined);
//   const router = useRouter();

//   useEffect(() => {
//     setIsDomain(pathname.split("/").pop()); // Extract domain from URL
//   }, [pathname]);

//   const onAddDomain = handleSubmit(async (values: FieldValues) => {
//     setLoading(true);

//     try {
//       // Upload the domain icon
//       const uploadResponse = await upload.uploadFile(values.icon);
//       const uploadedIconUrl = uploadResponse.cdnUrl;

//       // Call the server action to add the domain
//       const response = await onIntegrateDomain(values.domain, uploadedIconUrl);

//       toast({ title: response.status === 200 ? "Success" : "Error", description: response.message });

//       if (response.status === 200) {
//         reset(); // Reset form after success
//         router.refresh(); // Refresh the UI
//       }
//     } catch (error) {
//       console.error(error);
//       toast({ title: "Error", description: "Something went wrong" });
//     } finally {
//       setLoading(false);
//     }
//   });

//   return { register, onAddDomain, errors, loading, isDomain };
// };
