export interface CustomButtomProps {
  text: string;
  onBtnClicked: () => void;
}

export default function CustomButton({
  text,
  onBtnClicked,
}: CustomButtomProps) {
  return (
    <button
      className="border-2 border-white rounded-full p-2 w-full min-w-max min-h-12 cursor-pointer hover:scale-105 duration-200 text-nowrap"
      onClick={onBtnClicked}
    >
      {text}
    </button>
  );
}
