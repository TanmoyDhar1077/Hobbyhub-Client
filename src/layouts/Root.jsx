import { use } from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../components/Spinner";

const Root = () => {
  const { loading } = use(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-[calc(100vh-415px)]">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
