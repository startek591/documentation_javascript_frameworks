export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const descripton = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={descripton} />;
}
