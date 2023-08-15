const Bookmark = ({ title, content }) => {

  return (
    <div className="bg-blue3 text-black rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2 overflow-y-auto p-2">
      <ul className="text-off-white1 m-0 left-0 border-solid border-teal-600 relative list-none">
        <li className=" font-black text-lg underline underline-offset-4 decoration-2 decoration-off-white1">{title}</li>
        {content.map(({ name, url }, key) => (
          <li key={key} ><a href={url}>{name}</a></li>
        ))}
      </ul>
    </div>
  );
}
export default Bookmark;