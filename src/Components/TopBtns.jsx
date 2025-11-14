function TopBtns() {
  return (
    <>
      <div className="flex justify-between items-center gap-5">
        <button className="font-semibold cursor-pointer hover:text-black/50">
          Sign up
        </button>
        <button className="bg-black text-white font-semibold rounded-full py-3 px-5 cursor-pointer hover:bg-black/60">
          Log in
        </button>
      </div>
    </>
  );
}

export default TopBtns;
