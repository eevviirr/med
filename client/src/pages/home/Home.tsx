import axios from "axios";
import { FC, useEffect, useState } from "react";

const Home: FC = ({}) => {
    const [patients, setPatients] = useState<any>([]);
    console.log(patients);

    useEffect(() => {
        axios
            .get("http://localhost:5000/patients")
            .then(({ data }) => setPatients(data));
    }, []);
    return (
        <div className='flex flex-col gap-10'>
            {patients.map((item: any) => (
                <div className='flex flex-col text-white'>
                    <span>{item.diagnostic}</span>
                    <span>{item.date}</span>
                </div>
            ))}
        </div>
    );
};

export { Home };
