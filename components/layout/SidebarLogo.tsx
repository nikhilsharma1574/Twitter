import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/t1.svg";
const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-16
        w-16
        flex 
        items-center 
        justify-center 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <Image src={logo} height={100} width={100} alt="logo"/>
    </div>
  );
};

export default SidebarLogo;
