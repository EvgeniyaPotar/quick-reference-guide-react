import { WarningFilled, InfoCircleFilled } from "@ant-design/icons";

const icons = {
  warning: <WarningFilled className="text-xl" />,
  info: <InfoCircleFilled className="text-xl" />,
};

const styles = {
  warning:
    "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-red-800 dark:text-yellow-300",
  info: "border-black-500 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300",
};

const Box = ({ type = "info", title = "", children }) => {
  const style = styles[type];
  const displayIcon = icons[type];

  return (
    <div
      className={`box flex gap-3 p-4 my-4 shadow-md  rounded-lg overflow-auto ${style}`}
    >
      <div className="flex-shrink-0">{displayIcon}</div>
      <div className="flex-1">
        {title && <div className="font-medium mb-2 text-lg">{title}</div>}
        <div className="text-gray-800 dark:text-gray-200">{children}</div>
      </div>
    </div>
  );
};

export default Box;
