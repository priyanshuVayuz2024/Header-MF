import { Header } from "./components/Header";

function App({ open, setOpen }) {
  return (
    <>
      <Header
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default App;
