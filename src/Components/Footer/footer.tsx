const Footer = () => {
  console.log("hello");
  return (
    <div className="w-screen bg-[#386641] h-24 flex justify-center items-center">
      <h4 className="m-auto max-w-xl text-center  font-normal text-lg">
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
