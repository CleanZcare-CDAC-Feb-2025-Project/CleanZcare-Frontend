const ListComponent = ({ items }) => {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="mb-1">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
