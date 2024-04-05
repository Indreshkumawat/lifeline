import React from 'react'
import bg from "../../assets/background.jpg";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donation.jpg"
import g1 from "../../assets/donation/im2.jpg"
import g2 from "../../assets/donation/im3.jpg"
import g3 from "../../assets/donation/im1.jpg"
import g4 from "../../assets/donation/im4.jpg"
const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1 },
        { title: "Seeing", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
    ]

    return (
        <div id='homeid' className="bg-purple text-white-900">
            <img style={{width:"100%",height:"27rem"}} src={bg} alt="" />
            <div style={{padding:"75px 75px 75px 75px"}}>
                    <p  className='text-center italic font-bold text-5xl text-indianred  dark:text-white-900'>
                        Be the reason for someone's heartbeat
                    </p>
                    <br></br>
                    <p className='text-center italic text-2xl'>
                    Following a blood donation, the body begins to restore the lost blood by generating fresh blood cells. <br></br>This process contributes to sustaining overall health and well-being.
                    </p>
            </div>
            {/* <div className='grid grid-cols-2 place-items-center mt-6 px-52'> */}
                {/* <div> */}
                    {/* <img draggable={false} src={bg2} width="100%" alt="" /> */}
                {/* </div> */}
            {/* </div> */}
            {/* <h1 className='font-bold text-center text- my-4 text-lg underline'>Learn About Donation</h1> */}
            <div className='flex px-20'>
                <div>
                    <img style={{borderRadius:"1rem",boxShadow:"2px 2px 2px black "}} src={donationFact} width="90%" alt="" />
                </div>
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-indianred text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <p className='text-3xl underline text-indianred text-center mt-5 mb-5'>
                Blood Donation Process
            </p>
            <div className='grid grid-cols-2 place-items-center'>
                {temp2.map((e, i) =>{
                    if(e.title=="Registration"){
                        return <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
                        <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-indianred dark:text-white-900'>{i + 1} - {e.title}</h1>
                            <p className='text-justify'>Register through the donor section by filling up your details like Name,Age, Blood Group etc.</p>
                        </div>
                    </div>
                    }
                    else if(e.title=="Seeing"){
                        return <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
                        <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-indianred  dark:text-white-900'>{i + 1} - {e.title}</h1>
                            <p className='text-justify'>Head to the place of blood camp at the right time and fill your information to donate the blood</p>
                        </div>
                    </div>
                    }
                    else if(e.title=="Donation"){
                        return <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
                        <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-indianred dark:text-white-900'>{i + 1} - {e.title}</h1>
                            <p className='text-justify'>Donate the bood directly to the bank under expert doctor's supervision</p>
                        </div>
                    </div>
                    }
                    else if(e.title=="Save Life"){
                        return <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
                        <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-indianred  dark:text-white-900'>{i + 1} - {e.title}</h1>
                            <p className='text-justify'>Congratulations, You have finally contributed to the good cause of saving a life. Thank You</p>
                        </div>
                    </div>
                    }
                }
                    
                )}
            </div>
            <br />
            <div style={{position:"sticky"}} className='w-full bg-indianred text-white-900 h-max text-sm text-center font-bold'>
                <code> LifeLine @ {new Date().getFullYear()} || Made by Indresh</code>
            </div>
        </div>
    )
}

export default Home