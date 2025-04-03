import Image from "next/image";
import Sidebar from"@/components/sidebar/SideBar";
import Feeds from '@/components/feed/Feeds';
import fetchData from "@/utils/fetchData";
import SearchBar from "@/components/searchBar/SearchBar";
import { FiBell } from "react-icons/fi";


export default function Home (){
 return (
    <div className='flex'>
      <Sidebar/>
      <Feeds/>
      <SearchBar/> 
      <FiBell style={{ width:'100px', height:'100px'}}/>      
    </div>
  );
}


