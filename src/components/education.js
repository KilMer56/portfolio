import Header from "./common/header.js";
import educations from "../assets/json/educations.json"

function Education(){
    return (
        <div>
            <Header title="Education"/>
            <div class="p-big font-raleway">
                <div class="flex flex-col lg:flex-row justify-between text-primary">
                    {educations.map((data) => {
                        return ( 
                            <div class="w-full lg:w-1/2 lg:px-4 mb-12 lg:mb-0">
                                <p><span class="font-bold text-2xl pr-4">{data.title}</span><span class="block lg:inline-block text-grey text-xl">{data.domain}</span></p>
                                <p class="text-2xl">{data.school}</p>
                                <p class="mt-2"><span class="pr-4">{data.dates}</span><span class="text-grey">{data.location}</span></p>
                                <div class="text-justify">
                                    <p class="text-grey-2 py-8">{data.description}</p>
                                    <p class="font-bold text-lg mb-2">Coursework</p>
                                    <p class="text-grey-2">{data.coursework}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education;