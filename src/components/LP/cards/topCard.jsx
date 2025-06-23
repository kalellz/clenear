import "./Cards.scss";
export default function TopCard({ title, desc, img }) {
  return (
    <div className="top-card">
      <h1>{title}</h1>
      <img src={img} />
      <p>{desc}</p>
    </div>
  );
}
