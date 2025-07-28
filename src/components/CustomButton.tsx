export interface CustomButtomProps {
  text: string;
  onBtnClicked: () => void;
  minHeight?: string;
  minWidth?: string;
  padding?: string;
}

export default function CustomButton({
  text,
  onBtnClicked,
  minHeight: minHeight = "min-h-12",
  minWidth: minWidth = "min-w-max",
  padding: padding = "p-2",
}: CustomButtomProps) {
  return (
    <button
      className={`border-2 border-white rounded-full w-full ${padding} ${minWidth} ${minHeight} 
      cursor-pointer hover:scale-105 duration-200 text-nowrap`}
      onClick={onBtnClicked}
    >
      {text}
    </button>
  );
}
