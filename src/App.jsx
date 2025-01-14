import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";

const App = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />

        <hr className="mt-4" />

        <TodoList />

        <hr className="mt-4" />

        <Footer />
      </div>
    </div>
  );
};

export default App;
