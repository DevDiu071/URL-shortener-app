import { MdMenu } from "react-icons/md";

export default function NavBar() {
  return (
    <div className="flex justify-between px-4 py-4 items-center">
      <img src="/images/logo.svg" />
      <MdMenu className="text-[40px]" />
    </div>
  );
}
