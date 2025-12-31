import JobList from "./components/Job/JobList";

const App = () => {
  return (
    <div className="flex flex-col gap-12.5">
      <div className="bg-header"></div>
      <JobList />
    </div>
  );
};

export default App;
