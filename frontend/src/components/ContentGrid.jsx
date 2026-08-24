export default function ContentGrid({ items }) {
  return <div className="content-grid">
    {items.map((item) => (
      <article className="content-card" key={item.title}>
        <img src={item.image} alt={item.title} />
        <div className="content-card-body">
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      </article>
    ))}
  </div>
}
