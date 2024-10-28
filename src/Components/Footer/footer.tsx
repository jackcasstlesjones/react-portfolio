const Footer = () => {
  console.log("hello");
  return (
    <div className="w-screen bg-[#386641] h-32">
      <h4 className="m-auto max-w-xl text-center pt-14 font-normal text-lg">
        {"Made by "}
        <a
          className="hover:text-slate-400"
          href="https://github.com/jackcasstlesjones"
        >
          Jack Casstles-Jones
        </a>
      </h4>
    </div>
  );
};

export default Footer;
