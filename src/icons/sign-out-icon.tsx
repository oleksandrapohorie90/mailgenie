const SignOutIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 16l4-4m0 0l-4-4m4 4H9" />
      <path d="M21 12a9 9 0 1 1-9-9" />
    </svg>
  );
};

export default SignOutIcon;

  