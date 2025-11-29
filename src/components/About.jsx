
export default function About() {
  return (
    <section id="about" className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">ABOUT ME</h4>
          <h2 className="st-section-heading-subtitle">ABOUT ME</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft">
            <div className="st-about-img-wrap">
              <img src="/assets/img/section/farhana.png" alt="about" className="st-about-img-in" />
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1">
                  <h2 className="st-text-block-title text-left">Hi There! I'm Farhana Islam</h2>
                  <h4 className="st-text-block-subtitle">MERN Stack Developer</h4>
                  <div className="st-text-block-text">
                    {/* <p>I am a Software Engineer with extensive experience in both frontend and backend
                      development. I
                      specialize in Python, Django, React, and Tailwind CSS, with a strong foundation
                      in web automation
                      and API integration.</p> */}
                    <p>I’m a MERN Stack Developer skilled in React, Next.js, JavaScript, and Tailwind CSS, with experience across the full stack using tools like Firebase, Supabase, and Node.js. I enjoy building responsive, user-friendly interfaces and developing efficient backend logic to deliver complete, seamless web applications.</p>
                  </div>
                  <ul className="st-text-block-details st-mp0">
                    <li><span>Birthday</span> : <span>July 15</span></li>
                    <li><span>Phone</span> : <span>+8801779742755</span></li>
                    <li><span>Email</span> : <span>mailfarhana702@gmail.com</span></li>
                    <li><span>From</span> : <span>Pallabi, Dhaka 1216</span></li>
                    <li><span>Language</span> : <span>Bangla, English, Hindi, Urdu</span></li>
                  </ul>
                  <div className="st-text-block-btn">
                    <a href="/assets/img/Md_Ariful_Islam_Software_Engineer_Resume.pdf" className="st-btn st-style1 st-color1" download="Md_Ariful_Islam_Software_Engineer_Resume.pdf">Download Resume</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





// 'use client';

// import { useState, useEffect } from 'react';
// import { supabase } from '../app/supabaseClient.js'; // Adjust path if needed

// export default function About() {
//   const [technologies, setTechnologies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTechnologies = async () => {
//       try {
//         const { data, error } = await supabase.from('Technologies').select('*');
//         if (error) throw error;
//         setTechnologies(data || []);
//       } catch (err) {
//         console.error('Error fetching technologies:', err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTechnologies();
//   }, []);

//   return (
//     <section id="about" className="st-about-wrap">
//       <div className="st-height-b100 st-height-lg-b80"></div>
//       <div className="container">
//         <div className="st-section-heading st-style1">
//           <h4 className="st-section-heading-title">ABOUT ME</h4>
//           <h2 className="st-section-heading-subtitle">ABOUT ME</h2>
//         </div>
//         <div className="st-height-b25 st-height-lg-b25"></div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 wow fadeInLeft">
//             <div className="st-about-img-wrap">
//               <img
//                 src="/assets/img/section/50626.jpg"
//                 alt="about"
//                 className="st-about-img-in"
//               />
//             </div>
//             <div className="st-height-b0 st-height-lg-b30"></div>
//           </div>
//           <div className="col-lg-6">
//             <div className="st-vertical-middle">
//               <div className="st-vertical-middle-in">
//                 <div className="st-text-block st-style1">
//                   <h2 className="st-text-block-title text-left">Hi There! I'm Ariful Islam</h2>
//                   <h4 className="st-text-block-subtitle">Software Engineer</h4>
//                   <div className="st-text-block-text">
//                     <p>
//                       I am a Software Engineer with extensive experience in both frontend and backend
//                       development. I specialize in Python, Django, React, and Tailwind CSS, with a strong foundation
//                       in web automation and API integration.
//                     </p>
//                   </div>

//                   {/* --- Technologies Section --- */}
//                   <div className="st-text-block-text">
//                     <h5>My Tech Stack:</h5>
//                     {loading ? (
//                       <p>Loading technologies...</p>
//                     ) : technologies.length > 0 ? (
//                       <ul className="st-technologies-list" style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
//                         {technologies.map((tech) => (
//                           <li key={tech.id}>
//                             <strong>{tech.tech_name}</strong>
//                             {tech.description && <span>: {tech.description}</span>}
//                             <img src={tech.image_url} className="st-technologies-list-img" alt="" />
//                           </li>
//                         ))}
//                       </ul>
//                     ) : (
//                       <p>No technologies listed.</p>
//                     )}
//                   </div>

//                   <ul className="st-text-block-details st-mp0">
//                     <li><span>Birthday</span> : <span>April 25</span></li>
//                     <li><span>Phone</span> : <span>+8801677243126</span></li>
//                     <li><span>Email</span> : <span>arif.reza3126@gmail.com</span></li>
//                     <li><span>From</span> : <span>Pallabi, Dhaka 1216</span></li>
//                     <li><span>Language</span> : <span>Bangla, English, Hindi, Urdu</span></li>
//                   </ul>
//                   <div className="st-text-block-btn">
//                     <a
//                       href="/assets/img/Md_Ariful_Islam_Software_Engineer_Resume.pdf"
//                       className="st-btn st-style1 st-color1"
//                       download="Md_Ariful_Islam_Software_Engineer_Resume.pdf"
//                     >
//                       Download Resume
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }