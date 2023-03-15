import { Dropdown, DropdownItem, Heading2 } from '@material-tailwind/react';
import CertifCard from 'components/CertifCard';
import { useEffect, useState } from 'react';

export default function CertificationSection(){
    const [allCertif, setAllCertif] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/v1/certif/view")
        .then((res) => res.json())
        .then((data) => { setAllCertif(data) });
    }, []);
    const certifEl = allCertif.map((certif)=> (<CertifCard certif={certif} />))
    return(
        <section className=" bg-gray-100 pt-20 pb-24">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="flex flex-wrap justify-center ">
                        <div className="container max-w-7xl mx-auto px-4 py-16 text-gray-800">
                            <h1 className="text-center font-bold text-5xl mb-5"  > Nos certifications </h1>
                            
                            <div className='container max-w-7xl mx-auto px-9 '>
                                <div className="flex flex-wrap gap-y-9 ">
                                    {certifEl}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}