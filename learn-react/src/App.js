// import Gallery from "./1_component/Gallery";
// import { Profile } from "./2_import_and_export/Gallery";
// import TodoList from "./3_writing_markups/Todo";
// import Avatar from "./4_javascript_with_curly_braces/Avatar";
// import TodoList from "./4_javascript_with_curly_braces/TodoList";
// import Avatar from "./5_passing_props_to_components/Avatar";
// import Clock from "./5_passing_props_to_components/Clock";
// import PackingList from "./6_conditional_rendering/PackingList";
// import List from "./7_rendering-lists/List";
import { Recipe } from "./8_pure-components/Recipe";
import TeaSet from "./8_pure-components/TeaSet";

// function Card({ children }) {
//   return <div className="card">{children}</div>;
// }

// function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />
//     </Card>
//   );
// }
function App() {
  return (
    <>
      {/* <Gallery />; */}
      {/* <Profile /> */}
      {/* <hr /> */}
      {/* <TodoList /> */}
      {/* <hr /> */}
      {/* <Avatar /> */}
      {/* <hr /> */}
      {/* <TodoList /> */}
      {/* <Profile /> */}
      {/* <PackingList /> */}
      {/* <List /> */}
      <section>
        <h1>Spiced Chai Recipe</h1>
        <h2>For two</h2>
        <Recipe drinkers={2} />
        <h2>For a gathering</h2>
        <Recipe drinkers={4} />
      </section>
      <TeaSet />
    </>
  );
}

export default App;
