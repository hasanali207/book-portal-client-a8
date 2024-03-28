import banner from "../assets/banner.svg";
import { Link, useLoaderData } from "react-router-dom";
import Books from "../components/Books";
const Home = () => {
  const items = useLoaderData();

  return (
    <>
      <section className="  p-4 lg:p-0">
        <div className="flex p-20 bg-graybg rounded-2xl flex-col lg:flex-row h-full-screen items-center  gap-6 justify-between">
          <div className="p-4 lg:p-0">
            <h1 className="text-5xl font-bold text-text-primary">
              Books to freshe
            </h1>
            <h1 className="text-5xl font-bold mt-5 text-text-primary">
              up your bookshelf
            </h1>

            <Link to="/listbook">
              <button className="btn bg-green mt-8 text-xl text-white">
                View The List
              </button>
            </Link>
          </div>

          <img src={banner} className="max-w-sm rounded-lg " />
        </div>
      </section>

      <section className="mt-20">
        <h1 className="text-center text-text-primary  text-5xl font-bold">
          Books
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-4 lg:px-0 gap-6 mt-8">
          {items.map((item, index) => (
            <Books key={index} item={item}></Books>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
