import React, { useState, useEffect } from 'react'
import data from "../../assets/data.json";
import axios from "../Api";

const Camps = () => {

    const [state, setState] = useState(0);
    const [district, setDistrict] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        axios.get(`/camps/allCamps/${data.states[state].state}/${data.states[state].districts[district]}/${date}`).then((r) => setFiltered(r.data)).catch((e) => alert("Something went wrong"));
    }, [state, district, date])

    return (
        <div  style={{height:"44rem"}}  className='h-fitpx-7 bg-purple'>
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
                    <td>
                        <label for="district" className="font-semibold  leading-8 text-indianred">Date:<font color="red">*</font></label>
                        <input type="date" value={date} className="w-full p-3 text-md border border-silver rounded"
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </td>
                </tr>
            </table>
            <br />
            <table className='w-full text-center'>
                <thead>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Date</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Camp Name</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Address</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">State</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">District</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Contact</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Conducted By</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Organized By</th>
                    <th className="p-3 bg-white-900 text-indianred border border-black rounded">Time</th>
                </thead>
                <tbody>
                    {
                        filtered.map((e) =>
                            <tr>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{new Date(e.date).toLocaleDateString()}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.name}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.address}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.state}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.district}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.contact}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.bankId.name}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded">{e.organizer}</td>
                                <td className="p-3 bg-white-900 text-black border border-black rounded"><code>{e.startTime}-{e.endTime}</code></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Camps