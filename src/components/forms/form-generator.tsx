"use client";

import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { Input } from "@/components/ui/input";

export interface FormField<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: string;
  placeholder?: string;
}

interface FormGeneratorProps<T extends FieldValues> {
  fields: FormField<T>[];
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export default function FormGenerator<T extends FieldValues>({
  fields,
  register,
  errors,
}: FormGeneratorProps<T>) {
  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label
            htmlFor={field.name}
            className="text-sm font-medium text-gray-700"
          >
            {field.label}
          </label>
          <Input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name)}
            className={errors[field.name] ? "border-red-500" : ""}
          />
          {errors[field.name] && (
            <p className="text-sm text-red-500">
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}