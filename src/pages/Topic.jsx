import NavigationButtons from "../components/NavigationButtons.jsx";

function Topic({ children, title }) {
  return (
    <div className="topic flex flex-col gap-10 w-full p-5 lg:p-10 leading-8">
      <div className="mdx-content">{children}</div>
      <NavigationButtons title={title} />
    </div>
  );
}
export default Topic;
