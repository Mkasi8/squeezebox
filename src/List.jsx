import Card from "./card";
import data from "./data";

const List = () => {
  return (
    <>
      <main>
        <div className="container">
          <h1>Questions</h1>
          {data.map((person) => {
            return <Card key={person.id} {...person} />;
          })}
        </div>
      </main>
    </>
  );
};

export default List;
