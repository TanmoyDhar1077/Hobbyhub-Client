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
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar></Navbar>
      <main className="min-h-[calc(100vh-415px)]">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
