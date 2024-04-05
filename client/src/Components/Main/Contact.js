import React from 'react'
import cc from "../../assets/cc.png"

const Contact = () => {
    const data = [
        {
            title: "LifeLine related queries, feedback and suggestions", body: [
                "Indresh Kumawat",
                "Jaipur , 302019",
                "Phone No : 7665514322",
                "E-mail:- indreshkumawat16@gmail.com"
            ]
        },
        {
            title: "For Administrative queries", body: [
                "2nd Floor, Health Directorate",
                "Pandit Nehru Complex",
                "Gurkhabasti, Agartala, Tripura(W)",
                "Phone No : (0381) 230 9496",
                "E-mail:- dhsgovttripura@gmail.com",
                "Blood Cell, National Health Mission",
                "Ministry of Health & Family Welfare,New Delhi - 110011"
            ]
        },
    ]
    return (
        <div style={{height:"43rem"}} className='bg-purple px-64 text-indianred'><br />
            <h1 className='text-center text-3xl font-bold '>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md text-white-900'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={cc} draggable={false} style={{height:"25rem",borderRadius:"1rem"}} width="90%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact