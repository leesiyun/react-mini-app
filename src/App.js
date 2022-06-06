const Food = ({ favorite }) => {
  return <h1>i love {favorite}</h1>;
};

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgiopsal" />
      <Food favorite="chukumi" />
    </div>
  );
};

export default App;
