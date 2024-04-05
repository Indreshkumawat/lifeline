import React from "react";

const About = () => {
  return (
    <div
      style={{ height: "43rem", marginTop: "-1rem" }}
      className="bg-purple px-44 text-white-900"
    >
      <p className="text-4xl font-bold text-center underline mt-4 text-indianred">
        About LifeLine
      </p>
      <br />
      <p className="text-xl">
        LifeLine is a comprehensive platform designed to facilitate the
        interaction between blood donors and recipients. Users can register to
        either request or donate blood, while blood banks can efficiently manage
        their stocks, oversee pending donations and requests, and schedule and
        coordinate blood donation camps. 
        <br/>
        The system ensures secure
        authentication of users and banks through their respective mobile
        usernames and passwords, enabling seamless actions and access to
        relevant features.The platform's functionalities includes the efficient
        tracking of blood donations, connecting potential donors with recipients
        in need, and providing real-time updates on blood shortages and
        requirements. It offers a user-friendly interface for individuals and a
        specialized interface for blood banks to effectively manage and organize
        their data.
      </p>
      
      <p className="text-right text-5xl">
        <br />
        {/* <a target="_blank" href="https://github.com/ujjwalSk/" className='hover:drop-shadow-md hover:text-purple'><i class="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href="https://www.linkedin.com/in/ujjwalsk/" className='hover:drop-shadow-md hover:text-metal'><i class="fa-brands fa-linkedin"></i> </a>&nbsp;&nbsp; */}
      </p>
    </div>
  );
};

export default About;
