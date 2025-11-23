export default function Habilidades({ habilidades }) {
  return (
    <section>
      <h3>Habilidades</h3>
      <ul>
        {habilidades.map((hab, index) => (
          <li key={index}>{hab}</li>
        ))}
      </ul>
    </section>
  );
}
