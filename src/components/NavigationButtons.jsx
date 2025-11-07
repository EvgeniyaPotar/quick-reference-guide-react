import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect, useContext } from "react";
import { topics } from "../utils/topics.jsx";
import { useNavigate } from "react-router";
import { ThemeContext } from "../context/ThemeContext.jsx";

const NavigationButtons = ({ title }) => {
  const [position, setPosition] = useState("end");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const getCurrentIndexPage = (title) => {
    return topics.findIndex((topic) => topic.title === title);
  };
  useEffect(() => {
    getCurrentIndexPage(title);
  }, [title]);

  const previousTopic = () => {
    navigate(topics[getCurrentIndexPage(title) - 1].path);
  };

  const nextTopic = () => {
    navigate(topics[getCurrentIndexPage(title) + 1].path);
  };

  const buttonColor = theme === "dark" ? "#fff" : "#333637";

  return (
    <div className="mt-5 flex flex-col lg:flex-row justify-around text-[#333637] dark:text-white">
      {getCurrentIndexPage(title) > 0 && (
        <Button
          type="text"
          size="large"
          onClick={previousTopic}
          icon={<LeftOutlined />}
          style={{ color: buttonColor }}
        >
          Предыдущая тема
        </Button>
      )}
      {getCurrentIndexPage(title) < topics.length - 1 && (
        <Button
          type="text"
          size="large"
          icon={<RightOutlined />}
          iconPosition={position}
          onClick={nextTopic}
          style={{ color: buttonColor }}
        >
          Следующая тема
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
