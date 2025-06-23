
import Header from "./components/Header";
import PhoneInput from "./components/PhoneInput";
import FullWidthSlider from "./components/FullWidthSlider";

export default function Home() {


  return (
    <div className="w-[100%] items-center justify-items-center min-h-screen ">
      <Header />

      <div className="relative h-screen  min-h-[701px] w-full">
        <FullWidthSlider />
        <div className="absolute inset-0 bg-black/30 z-1 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-bold font-anek  lg:text-[44px] md:text-[33px] sm:text-[22px] leading-[135%]  tracking-normal text-center  max-w-[687px]  lg:mt-[250px] md:mt-[200px] max-xs:mt-[300px]">
            Personalized matchmaking ,
            handpicked Rishta’s just for YOU!
          </h1>
          <p className="font-normal font-tiro italic  lg:text-[20px] md:text-[15px] sm:text-[12px] leading-[100%] tracking-normal text-center lg:mb-7 md:mb-7 hidden md:block  max-w-[650px]">
            2000+ people have found their partners on Prime Rishta
          </p>

          <div className="bg-black-90 w-full max-w-[1152px] min-h-[145px] rounded-lg shadow-md p-2 bg-black/58 flex justify-center items-center">
            <form className="w-full gap-9 flex justify-center items-end flex-wrap">
              {/* Account For */}
              <div className="flex flex-col w-[250px] max-xs:w-full">
                <label className="block text-sm font-medium text-left  mb-1">
                  For whom are you creating this account?
                </label>
                <select
                  id="accountFor"
                  className="w-full border text-gray-700 border-gray-300 b bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option >Select</option>
                  <option >Myself</option>
                  <option >Relative</option>
                </select>
              </div>

              {/* Full Name */}
              <div className="flex flex-col w-[250px] max-xs:w-full">
                <label className="block text-sm font-medium  mb-1 text-left">Your name*</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter full name"
                  className="w-full border text-gray-700 
 border-gray-300 b bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col w-[250px] max-xs:w-full">
                <label className="block text-sm font-medium
 mb-1 text-left">Phone number*</label>
                <PhoneInput />
              </div>

              {/* Button */}

              <button
                type="submit"
                className="flex flex-col w-[250px] max-xs:w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition"
              >
                Register FREE
              </button>

            </form>
          </div>
        </div>
      </div>



      <div className="relative h-screen w-full">
      </div>
    </div>
  );
}


