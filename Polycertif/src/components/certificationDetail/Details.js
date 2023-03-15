import { Button, CardImage, Heading6 as H6, LeadText } from "@material-tailwind/react";
import H4 from '@material-tailwind/react/Heading4';
import Teamwork from 'assets/img/certificate.jpeg';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail(){
    const { id } = useParams();
    const [certif, setCertif] = useState({
        certif_title: "",
        certif_description: "",
        certif_prix: "",
        certif_image_upload: "",
      });
      useEffect(() => {
        fetch("http://localhost:8080/api/v1/certif/view/" + id)
          .then((res) => res.json())
          .then((data) => setCertif(data));
      }, []);
    return(

        <div className="container max-w-7xl mx-auto px-4 py-16 text-gray-800">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-6/12 px-4 mx-auto">
                    <H4 color="gray">{certif.certif_title}</H4>
                    
                    <LeadText color="blueGray">
                        {certif.certif_description}
                    </LeadText>
                    <h2 className="text-lg text-gray-500 mb-5">Prix: <span className="text-gray-700">{certif.certif_prix} DT</span></h2>
                    
                    <Button
                        href="#pablo"
                        className="font-medium text-light-blue-500 mt-2 inline-block"
                    >
                    S'abonner
                    </Button>
                </div>

                <div className="w-full md:w-6/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                    <img className="rounded-md" alt="Card Image" src={Teamwork} />
                </div>
            </div>
        </div>
    )
}