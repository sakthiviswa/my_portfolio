import Image from "next/image";
const main = () => {
    return (
        <div className="  mx-50  my-0 text-white "> 
        <div className="flex flex-row  justify-between h-screen">

            <div className="flex flex-col mt-50 ">

                <p className=" text-3xl">Hello</p>
                <p className="text-4xl mt-5 text-purple-300 ">SAKTHINATHAN V</p>


                <h1 className=" text-7xl mt-8">Frontend developer and </h1>
                <h1 className=" text-7xl mt-4">UI designer</h1>
                <div className="flex flex-row justify-around gap-10 mt-10 mx-50">

                        <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20 transition duration-300 shadow-md">
                            Hire Me
                        </button>

                        <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20 transition duration-300 shadow-md">
                            View Resume
                        </button>

                </div>
            </div>

            <div className="flex flex-col  items-center ">

                
                <Image src="/main/sakthi.jpg" alt="sakthi" width={400} height={500}  className="mt-30 rounded-xl shadow-lg"/>
            </div>
        </div>
       


       
            
        </div>
    );
}   
export default main;