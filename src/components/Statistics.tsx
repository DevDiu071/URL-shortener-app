import ShortenOutput from "./ShortenOutput";

interface StatsProps {
  urlOutPut: {
    url: string;
    shortenUrl: string;
  }[];
}

function Statistics({ urlOutPut }: StatsProps) {
  return (
    <div>
      <div className="px-5 tablet:px-10 laptop:px-[50px] desktop:px-[90px] pt-[65px] bg-slate-100 pb-[70px]">
        <div className="mt-10">
          {urlOutPut.map((output) => (
            <ShortenOutput key={Math.random()} urlOutPut={output} />
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center pt-[150px] mb-4">
          Advanced Statistics
        </h2>
        <p className="text-xl text-center mb-10 tablet:text-sm">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        {/* CARDS */}

        <div className="mt-[80px] tablet:grid tablet:grid-cols-2 laptop:grid-cols-3 tablet:gap-x-4 desktop:gap-x-6 ">
          <div className="text-center rounded-sm bg-white px-6 pb-4 pt-12 relative tablet:block tablet:text-left">
            <img
              src="/images/icon-brand-recognition.svg"
              alt="icon"
              className="mb-6 sm:w-[50px] sm:h-[50px]  w-[80px] h-[80px] bg-darkgrayblue p-4 tablet:p-3 rounded-full absolute -top-10 tablet:-top-6 right-0 left-0 tablet:-left-[150px] m-auto"
            />
            <p className="text-2xl font-bold tablet:text-left my-4 tablet:my-0  text-darkgrayblue tablet:text-xl">
              Brand Recognition
            </p>
            <p className="text-xl mb-8 laptop:mb-3 text-cente tablet:text-left tablet:text-sm">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="text-center rounded-sm bg-white px-6 pb-4 pt-12 relative mt-[90px] tablet:mt-0 laptop:mt-[20px] tablet:text-left">
            <img
              src="/images/icon-detailed-records.svg"
              alt="icon"
              className="mb-6 sm:w-[50px] sm:h-[50px] w-[80px] h-[80px] tablet:p-3 bg-darkgrayblue p-4 rounded-full absolute -top-10 tablet:-left-[150px] tablet:-top-6 right-0 left-0 m-auto"
            />
            <p className="text-3xl font-bold text-center text-darkgrayblue tablet:my-0  my-4 tablet:text-left mb-4 tablet:text-xl">
              Detailed Records
            </p>
            <p className="text-xl tablet:text-left mb-8 laptop:mb-3 text-center tablet:text-sm">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="text-center rounded-sm bg-white px-6 pb-4 pt-12 relative mt-[90px] tablet:mt-[40px] laptop:mt-[50px]">
            <img
              src="/images/icon-fully-customizable.svg"
              alt="icon"
              className="mb-6 sm:w-[50px] sm:h-[50px] w-[80px] h-[80px] tablet:p-3 bg-darkgrayblue p-4 rounded-full absolute -top-10 tablet:-left-[150px] tablet:-top-6 right-0 left-0 m-auto"
            />
            <p className="text-3xl tablet:text-left text-darkgrayblue font-bold text-center my-4 tablet:my-0  mb-4 tablet:text-xl">
              Fully Customizable
            </p>
            <p className="text-xl tablet:text-left mb-8 laptop:mb-3 text-center tablet:text-sm">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
