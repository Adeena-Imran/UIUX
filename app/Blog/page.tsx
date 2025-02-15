import Header from "@/components/header"
import Image from "next/image"
import Sidebar from "@/components/sidebar"


const Blog =()=>{
    return (
        <div>
            <Header>
 </Header>
     <Image className="pt-[20px] w-full h-auto"
                             src={"/images/Blog.png"}
                             alt="shop"
                             width={1440}
                             height={316}
                          />


      <div>
        

       
      <div className=" max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        
         <Image className="pl-[116px] pt-[100px] "
                             src={"/images/Group 176.png"}
                             alt="shop"
                             width={820}
                             height={2490}
                          />
        
        
        <aside className="w-full lg:w-1/2 space-y-8">
          <Sidebar />
        </aside>
      </div>
    </div>
  
      </div>
      </div>
    )
}



export default Blog