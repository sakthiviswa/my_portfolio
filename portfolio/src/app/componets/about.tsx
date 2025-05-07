import Image from "next/image";
const about = () => {
    return(
        <div className="flex    h-screen  mx-70 my-0 text-white">
            <div className="flex flex-row mt-10">
                <div className="flex flex-col   "> 
                     <Image src="/main/sakthi.jpg" alt="sakthi" width={1000} height={1000} className="mt-30 rounded-xl shadow-lg" />
                </div>

                <div className="flex flex-col  ml-50 mt-30">

                    <h1 className="text-white text-5xl font-semibold">About</h1>
                    <p className="text-gray-600  text-md pl-10 mt-3">Sakthinathan V is an aspiring software engineer and a 2nd-year B.E. Computer Science student at Sri Krishna College of Technology. He is skilled in Python, Java, React.js,
                         and Android development, with experience in building both web and mobile applications.</p>
                    <div className="flex flex-col mt-10 gap-10 text-md">
                        <div className="flex flex-row gap-6">
                            <p>Name:</p>
                            <p className="text-gray-600">Sakthinathan V</p>
                        </div>
                        <div className="flex flex-row gap-6">
                            <p>Date of Birth:</p>
                            <p className="text-gray-600">31.10.2005</p>
                        </div>
                        <div className="flex flex-row gap-6">
                            <p>Email:</p>
                            <p className="text-gray-600">sakthinathan3110@gmail.com</p>
                        </div>
                        <div className="flex flex-row gap-6">
                            <p>Github:</p>
                            <p className="text-gray-600">Sakthiviswa</p>
                        </div>
                        <div className="flex flex-row gap-6">
                            <p>Ph+:</p>
                            <p className="text-gray-600">+91 7373567056</p>
                        </div>
                        

                    </div>
                </div>

            </div>
        </div>
    );
}
export default about;