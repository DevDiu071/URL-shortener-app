function Footer() {
  return (
    <div className="bg-darkviolet pb-8 pt-12 laptop:px-4 laptop:grid laptop:grid-cols-5 laptop:gap-x-4">
      <h2 className="text-3xl font-semibold text-white text-center laptop:mt-3">
        Shortly
      </h2>
      <nav className="text-center text-xl laptop:text-lg laptop:text-left">
        <p className="text-xl laptop:text-lg laptop:mt-4 text-white font-semibold text-center laptop:text-left mt-12 mb-6">
          Features
        </p>
        <ul className="text-gray">
          <li>
            <a href="#"> Link Shortening</a>
          </li>
          <li>
            <a href="#"> Branded Links</a>
          </li>
          <li>
            <a href="#"> Analytics</a>
          </li>
        </ul>
      </nav>
      <nav className="text-center text-xl laptop:text-lg laptop:text-left">
        <p className="text-xl laptop:text-lg laptop:text-left laptop:mt-4 text-white font-semibold text-center mt-12 mb-6">
          Resources
        </p>
        <ul className="text-gray">
          <li>
            <a href="#"> Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#"> Support</a>
          </li>
        </ul>
      </nav>
      <nav className="text-center text-xl laptop:text-lg laptop:text-left">
        <p className="text-xl laptop:text-lg laptop:text-left text-white font-semibold text-center mt-12 laptop:mt-4 mb-6">
          Company
        </p>
        <ul className="text-gray">
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#"> Our Team</a>
          </li>
          <li>
            <a href="#"> Careers</a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex laptop:place-self-start justify-center mt-10 laptop:mt-4 gap-x-6 laptop:gap-x-4 items-center mb-4">
        <img
          src="/images/icon-facebook.svg"
          width={24}
          height={24}
          alt="social media icon"
        />
        <img
          src="/images/icon-twitter.svg"
          width={24}
          height={20}
          alt="social media icon"
        />
        <img
          src="/images/icon-pinterest.svg"
          width={24}
          height={24}
          alt="social media icon"
        />
        <img
          src="/images/icon-instagram.svg"
          width={24}
          height={24}
          alt="social media icon"
        />
      </div>
    </div>
  );
}

export default Footer;
