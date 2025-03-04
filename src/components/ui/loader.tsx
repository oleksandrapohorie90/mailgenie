"use client";

import { ReactNode } from "react";

type LoaderProps = {
  loading: boolean;
  children: ReactNode;
};

const Loader = ({ loading, children }: LoaderProps) => {
  return loading ? (
    <div className="flex items-center justify-center h-full">
      <span className="animate-spin border-4 border-gray-300 border-t-indigo-600 rounded-full w-6 h-6"></span>
    </div>
  ) : (
    children
  );
};

export default Loader;
