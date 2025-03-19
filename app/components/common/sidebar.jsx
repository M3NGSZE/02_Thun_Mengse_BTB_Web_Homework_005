import SideBarMenu from "./sidebarmenu";

export default function Sidebar() {
  return (
    <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white px-4">
      <div className="px-4 py-6">
        <div className="flex flex-col items-center">
          <img src="img/jinx.jpg" alt="" className="rounded-full w-[150px]" />
          <h1 className="text-3xl">Black Guy</h1>
          <p className="text-[#087e8b] text-xl">blackguy@gmail.com</p>
        </div>
        <SideBarMenu />
      </div>
    </div>
  );
}
