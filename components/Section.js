export default function Section({
  id,
  index,
  title,
  children,
}) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        <span>{index}</span>

        <h2>{title}</h2>
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}
