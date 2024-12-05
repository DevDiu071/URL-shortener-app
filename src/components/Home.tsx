function Home() {
  return (
    <div className="mx-5 tablet:mx-10 laptop:mx-[60px] desktop:mx-[90px] flex flex-col tablet:flex-row tablet:mt-[30px] desktop:gap-x-10 items-center">
      <img
        src="/images/illustration-working.svg"
        width={600}
        height={300}
        alt="illustratino working"
        className="mt-10 ml-10 mb-10 tablet:order-2 tablet:hidden"
      />
      <img
        src="/images/illustration-working.svg"
        width={370}
        height={180}
        alt="illustratino working"
        className="mt-10 ml-10 mb-10 tablet:order-2 hidden desktop:hidden tablet:block tablet:-mr-10"
      />
      <img
        src="/images/illustration-working.svg"
        width={650}
        height={350}
        alt="illustratino working"
        className="mt-10 ml-10 mb-10 tablet:order-2 desktop:overflow-x-hidden desktop:-mr-[140px] hidden desktop:block tablet:-mr-10"
      />
      <div className="tablet:order-1">
        <h1 className="text-5xl font-bold desktop:text-5xl text-center tablet:text-left my-4 tablet:text-3xl tablet:my-2">
          More than just shorter links
        </h1>
        <p className="text-xl text-center tablet:text-left mt-4 tablet:text-sm tablet:mt-1">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="flex justify-center tablet:justify-start my-8 tablet:my-4">
          <button className="text-xl bg-cyan py-3 px-10 text-white rounded-3xl tablet:py-1.5 tablet:px-6 tablet:text-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
