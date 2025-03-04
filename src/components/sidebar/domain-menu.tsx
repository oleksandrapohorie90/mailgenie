"use client";

import { useDomain } from "@/hooks/use-domain";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import UploadButton from "@/components/upload-button";
import FormGenerator from "@/components/forms/form-generator";
import { useToast } from "@/hooks/use-toast";
import Loader from "@/components/ui/loader"; 
import AppDrawer from "@/components/ui/app-drawer";

type Props = {
  min?: boolean;
  domains: { id: string; name: string; icon: string | null }[] | null | undefined;
};

const DomainMenu = ({ domains, min }: Props) => {
  const { register, onAddDomain, loading, errors, isDomain } = useDomain();

  return (
    <div className={cn("flex flex-col gap-3", min ? "mt-6" : "mt-3")}>
      {/* Header */}
      <div className="flex justify-between w-full items-center">
        {!min && <p className="text-xs text-gray-500">DOMAINS</p>}

        {/* AppDrawer for Adding a New Domain */}
        <AppDrawer
          description="Add a domain where you want to integrate your chatbot. This can be your existing website or a new site you're planning to build."
          title="Add your business Domain"
          trigger={
            <PlusCircle className="cursor-pointer text-ironside" size={25} />
          }
        >
          <Loader loading={loading}>
            <form className="mt-3 w-6/12 flex flex-col gap-3" onSubmit={onAddDomain}>
              {/* Domain Name Input */}
              <FormGenerator
                inputType="input"
                register={register}
                name="domain"
                errors={errors}
                placeholder="mydomain.com"
                type="text"
              />

              {/* Upload Button for Icon */}
              <UploadButton 
              register={register} 
              label="Upload Icon" 
              errors={errors} />

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Add Domain
              </Button>
            </form>
          </Loader>
        </AppDrawer>
      </div>

      {/* Render List of Domains */}
      <div className="flex flex-col gap-1 text-ironside font-medium">
        {domains &&
          domains.map((domain) => (
            <Link
              href={`/settings/${domain.name.split(".")[0]}`}
              key={domain.id}
              className={cn(
                "flex gap-3 hover:bg-white rounded-full transition duration-300",
                !min ? "p-2" : "py-2",
                domain.name.split(".")[0] === isDomain && "bg-white"
              )}
            >
              {/* Domain Icon */}
              {domain.icon && (
                <Image
                  src={`https://ucarecdn.com/${domain.icon}/`}
                  alt="logo"
                  width={20}
                  height={20}
                />
              )}

              {/* Domain Name */}
              {!min && <p className="text-sm">{domain.name}</p>}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DomainMenu;
