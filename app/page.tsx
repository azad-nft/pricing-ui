import Image from "next/image"

export default function Home() {
  return (
    <div className="absolute h-96 lg:h-[50vh]  bg-violet-500 mx-auto w-full px-4 ">
      {/* bg container content  */}
      <div className="flex-flex-col items-center space-y-6 mt-12">
        <h1 className="text-3xl text-gray-50 font-bold text-left md:text-center md:text-5xl ">
          Simple pricing for your business.
        </h1>
        <p className="text-gray-100 text-left md:text-center  md:text-2xl">
          Plans that are carefully created to suit your business.
        </p>
      </div>
      {/* pricing and lists  */}
      <div className="flex flex-col mx-auto mt-12 md:mt-18 rounded-lg space-y-4 md:space-y-0 md:flex-row md:justify-center shadow-violet-200">
        {/* left section  */}
        <div className="flex flex-col space-y-4 rounded-lg bg-violet-200 p-6 justify-between items-center p-10 ">
          <h1 className="text-2xl  font-bold ">
            Premium PRO
          </h1>
          <h1 className=" text-5xl font-bold">$329</h1>
          <p className="text-sm">billed just once</p>
          <button className="flex-1  w-full py-2 text-white bg-violet-500 rounded-lg font-bold">Get Started</button>
        </div>

        {/* right section  */}
        {/* <div className="px-4 flex flex-col space-y-4 rounded-right-lg bg-white "> */}
        <div className="bg-white p-10 font-light rounded-lg shadow-lg text-lg lg:text-xl ">
          <p className="text-sm">Access the features when you get this pricing pakage for your business.</p>
          <div>
            {/* list 1 */}
            <div className="flex flex-row justify-start  items-center ">
              <Image
                src="./tick.svg"
                alt="tick"
                width={32}
                height={32}
                className="mr-2"
              />
              <p className="text-sm">International calling and messaging API</p>
            </div>
            {/* list 2 */}
            <div className="flex flex-row justify-start items-center ">
              <Image
                src="./tick.svg"
                alt="tick"
                width={32}
                height={32}
                className="mr-2"
              />
              <p className="text-sm">Additional phone numbers</p>
            </div>
            {/* list 3 */}
            <div className="flex flex-row justify-start items-center ">
              <Image
                src="./tick.svg"
                alt="tick"
                width={32}
                height={32}
                className="mr-2"
              />
              <p className="text-sm">Automated messaging via Zapier</p>
            </div>
            {/* list 4 */}
            <div className="flex flex-row justify-start items-center ">
              <Image
                src="./tick.svg"
                alt="tick"
                width={32}
                height={32}
                className="mr-2"
              />
              <p className="text-sm">24/7 support and consulting</p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom tags  */}
      <div className=" container flex flex-col space-y-3 mx-auto p-5 md:p-10 justify-start  md:flex-row md:space-y-0  mb-12 lg:flex-row md:justify-center baseline  md:space-x-3 items-center">
        {/* tag # 1 */}
        <div className="flex flex-row justify-start space-x-3 items-center ">
          <Image
            src="./shield.svg"
            alt="tick"
            width={32}
            height={32}
            className="mr-2"
          />
          <p className="text-sm font-bold">30 days money back Guaranttee</p>
        </div>
        {/* tag # 2 */}
        <div className="flex flex-row justify-start space-x-3 items-center ">
          <Image
            src="./tag.svg"
            alt="tick"
            width={32}
            height={32}
            className="mr-2"
          />
          <p className="text-sm font-bold">No setup fees 100% hassle-free</p>
        </div>
        {/* tag # 3 */}
        <div className="flex flex-row justify-start space-x-3 items-center ">
          <Image
            src="./reload.svg"
            alt="tick"
            width={32}
            height={32}
            className="mr-2"
          />
          <p className="text-sm font-bold">No monthly subscription Pay once and for all </p>
        </div>
      </div>

    </div>
  )
} 