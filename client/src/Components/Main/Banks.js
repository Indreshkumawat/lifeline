import React, { useState, useEffect } from 'react'
import data from "../../assets/data.json";
import axios from "../Api";

const Banks = () => {

    const [state, setState] = useState(0);
    const [district, setDistrict] = useState(0);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        axios.get(`/bank/allBanks/${data.states[state].state}/${data.states[state].districts[district]}`).then((r) => { setFiltered(r.data); }).catch((e) => alert("Something went wrong"));
    }, [state, district])

    return (
        <div style={{height:"42.2rem"}}className='bg-purple px-7'>
            <table cellPadding={7}>
                <tr>
                    <td><label for="state" className="font-semibold  leading-8 text-indianred">State:<font color="red">*</font></label>
                        <select name="state" id="state" onChange={(e) => { setState(e.target.value); setDistrict(0); }} className="w-full p-3 text-md border border-silver rounded">
                            {
                                data.states.map((e, i) => <option value={i} selected={state === i}>{e.state}</option>)
                            }
                        </select>
                    </td>
                    <td><label for="district" className="font-semibold  leading-8 text-indianred">District:<font color="red">*</font></label>
                        <select name="district" id="district" onChange={(e) => { setDistrict(e.target.value); }} className="w-full p-3 text-md border border-silver rounded">
                            {
                                data.states[state].districts.map((e, i) => <option value={i} selected={district === i}>{e}</option>)
                            }
                        </select>
                    </td>
                </tr>
            </table>
            <br />
            <table className='w-full text-center'>
                <thead>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Blood Bank Name</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Parent Hospital</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Category</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">State</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">District</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Address</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Contact</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Website</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Email</th>
                </thead>
                <tbody>
                    {
                        filtered.map((e) =>
                            <tr>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.name}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.hospital}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.category}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.state}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.district}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.address}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.phone}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.website}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Banks