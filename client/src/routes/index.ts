/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from "../components/Home";
interface Structure{
      path:string;
      title:string;
      element:any;
}
export const RoutesData:Array<Structure>=[
    {
      path:"/",
      title:'Home',
      element:Home,
    },
    
]


