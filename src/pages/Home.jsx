
import banner from "../assets/banner.svg";
import { useLoaderData } from "react-router-dom";
import Books from "../components/Books";
const Home = () => {

    const items = useLoaderData()
        
  return (
    <>
      <section className="  bg-graybg rounded-2xl">
        <div className="flex py-20 flex-col lg:flex-row h-full-screen items-center  gap-6 justify-between">

        <div>
            <h1 className="text-5xl font-bold text-text-primary">Books to freshe</h1>
            <h1 className="text-5xl font-bold mt-5 text-text-primary">up your bookshelf</h1>
            
            <button className="btn bg-green mt-8 text-xl text-white">View The List</button>
          </div>

          <img
            src={banner}
            className="max-w-sm rounded-lg "
          />
          
        </div>
       
      </section>


      <section className="mt-20">
        <h1 className="text-center text-text-primary  text-5xl font-bold">Books</h1>

        <div className="grid grid-cols-3 gap-6 mt-8">
            {
                items.map((item, index) => <Books key={index} item={item}></Books>)
            }

            

</div>

      </section>
    </>
  );
};

export default Home;
