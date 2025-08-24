import { ProjectDetailsType } from "@/Types/LinksTypes";
import Card from "./Card";

export default function Projects({projectDetails}:{projectDetails:ProjectDetailsType[]}) {
    return (
        <div>
                    <div className="text-center">
                      <h1 className=" font-bold text-3xl text-green-800 ">Projects</h1>
                      <p className="font-light text-sm leading-tight mb-6 bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent">Some of project i have build:</p>
            
                    </div>
            
            
                    {
                      projectDetails.map((itm, i) => {
                        return (
                          <Card key={i} Details={itm} />
                        )
                      })
                    }
        </div>
    );
}