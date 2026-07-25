"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="🔍 Search hotel, owner, city or email..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#13233A] border border-[#223754] text-white outline-none focus:border-yellow-400"
      />
    </div>
  );
}