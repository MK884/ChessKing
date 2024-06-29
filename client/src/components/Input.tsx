import { InputProps } from "./props";

export const Input = ({ placeholder, type, style, onchange }: InputProps) => {
  return (
    <>
      <input
        type={type ? type : 'text'}
        className={`p-3 w-auto rounded-lg bg-[#374151] text-white ${style}`}
        placeholder={placeholder ? placeholder : "Enter text"}
        onChange={onchange}
      />
    </>
  );
};
