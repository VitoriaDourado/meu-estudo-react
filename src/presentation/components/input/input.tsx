import React from "react";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  return (
    <div>
      <input
        className="bg-slate-200 border-2 border-pink-950 rounded-md mb-4 px-4 py-2 w-80"
        {...props}
      />
    </div>
  );
};

export default Input;
