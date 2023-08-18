export const ContactCard = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div>
      <li key={id}>
        <h2>{name}</h2>
        <span>{number}</span>
      </li>

      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};
