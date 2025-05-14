import { Header } from "./components/Header";

function App({ open, setOpen, navigate, location, Link }) {
  return (
    <>
      <Header
        open={open}
        setOpen={setOpen}
        locationParent={location}
        Link={Link}
        navigate={navigate}
      />
    </>
  );
}

export default App;
