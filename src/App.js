import AppForm from './components/AppForm';

function App() {
  return (
    <div className="App w-full h-full bg-indigo-200">
      <div className="max-w-xl min-h-screen flex items-center justify-center px-2 md:px-4 xl:px-0 mx-auto">
        <AppForm />
      </div>
    </div>
  );
}

export default App;
