 //====================== IMPORTS AT TOP ===================

import { useState } from 'react';
import React from 'react';
//impoting image from component file
import peacock from './assets/peacock.png';
// import './App.css';

 //====================== OBJECT ( OR OTHER VAIBLES / FUNCTIONS) ===================

const resume = {
  name: 'Coraline Love',
  location: 'Nashville, TN',
  phone: '615-xxx-xxxx',
  email: '*********************@gmail.com',
  statment: `Proactive, customer-oriented professional with 10+ years of experience meeting deadlines  
in various fields. Highly self-motivated individual with a strive for excellence in their work.  
Enjoys and welcomes new challenges daily.  
`,
  refrences: 'References available upon request. ',
  experience: [
    {title: `OPERATIONS REPRESENTATIVE II`, company: `TOAST`, employmentLength: `OCT 2022 - AUG 2024`, skills: [
      `Efficient use of time to meet shipping deadlines and expectations.`,
      `Exercise high levels of flexibility, changing from one task to another when needed.`,
      `Contributed to shipping of international orders with high accuracy and efficiency, ensuring  compliance with shipping regulations.`,
      `Trained new employees on warehouse procedures and safety protocols.`,
      `Demonstrated high levels of problem-solving skills, aiding other team members when issues  arise.`,
      `Quickly learned new systems and functions within WMS system.`,
      `Led a workshop on Dangerous Goods shipping practices for both Nashville and Reno shipping  departments.`,
      `Collaborated with team to streamline processes and improve efficiency.`,
      `Acting member of Nashville safety committee.`,
      `Leveraged previous construction background to support any emergency maintenance needs for  the warehouse.`,
    ], },
    {title: `SELF CONTRACT/EMPLOYED, FREELANCE`, company: ``, employmentLength: `JAN 2018 - CURRENT`, skills: [
      `Organized and efficiently utilized inventory space.`,
      `Transported merchandise.`,
      `Facilitated accurate counts of overall inventory.`,
      `Applied light carpentry skills and tools.`,
      `Exercised customer service skills and cash handling skills with POS systems.`,
      `Produced and edited promotional videos for social media platforms. `,
      `Operated webcam equipment and software for live broadcasts.`,
      `Created engaging and interactive content for webcam platforms.`,
      `Displayed intimacy and emotion on camera, enhancing scenes and storytelling.`,
      `Developed and maintained relationships with industry professionals to expand professional network.`,
      `Participated in networking events and conferences to build connections within industry.`,
      `Exhibited strong problem-solving skills in resolving client issues and conflicts.`,
      `Managed client projects from start to finish, achieving high customer satisfaction rates.`,
    ], },
    {title: `WAREHOUSE PICKER`, company: `PEPSICO`, employmentLength: `NOV 2020 - 2021`, skills: [
      `Utilize voice pick systems to fill out customer orders, building stable pallets.`,
      `Operated multiple pieces of equipment efficiently: propane/electric forklifts and electric pallet jacks, rear and mid riders.`,
      `Received and loaded product, finalized trailer loads, verified temperatures on outbound trailer shipments for temperature sensitive products.`,
      `Performed accurate quality control checks on orders.`,
      `Practiced product date rotation and product replenishment.`,
      `Made use of vortex picker system, WMS`,
      `Contributed with monthly end of period inventory counts.`,
      `Verified BOL and sealed trailers coming in and out of facility`,
      `Checked vehicles for theft prevention.`,
    ], },
    {title: `BOARD MEMBER`, company: `MUSIC CITY SISTERS`, employmentLength: `JULY 2015 - DEC 2019`, skills: [
      `501c3 Non - profit charity group, dedicated to bettering the community, spreading joy, and ending stigmatic guilt.`,
      `Served as elected secretary from 2017 - 2019`,
      `Managed and assisted with multiple non - profit fundraising events.`,
      `Networked with local LGBT businesses and members with events.`,
      `Utilized social media for promotion of charity work.`,
    ] },
    {title: `BUILDING SERVICES/HOUSEKEEPING`, company: `NORDSTROM`, employmentLength: `SEP 2016 - DEC 2017`, skills: [
      `Used power and hand tools to construct and repair structures.`,
      `Performed routine maintenance on facility equipment and fixtures.`,
      `Served housekeeping as needed.`,
      `Lead setting up media equipment for events.`,
      `Exhibited high problem - solving skills.`,
      `Worked in an unsupervised format.`,
      `Displayed flexibility in a fast - paced environment.`,
    ], },
  ],
  education: [
    {school: `GENERAL ASSEMBLY`, location: `NASHVILLE(Online), TN`, attended:`OCT 2024 - CURRENT`, graduated: false, course: `Software Engineering Pre-Apprenticeship`, skills:{
      Languages: `HTML, CSS, JS, DOM, REACT, Express Node Js,`,
      Databases: `Mongo DB`,
      Hosts: `AWS`,
      },
    },
    {school: `CENTENNIAL JOB CORPS`, location: `NAMPA, ID`, attended:`SEP 2007 - SEP 2008`, graduated: true, course: `Carpentry Pre-Apprenticeship`, skills:{},
    },
    {school: `MT TAHOMA HIGH SCHOOL`, location: `TACOMA, WA`, attended:`AUG 2000 - JUN 2004`, graduated: true, course: ``, skills:{},
    },
  ],

}

 //====================== INLINE STYLING ===================

 //putting this in a overall object would make more sense and simplified
//  const logoStyle = {
//   width: '150px',
//   height: 'auto',
//   margin: '20px',
// };

// const headerStyle = {
//   textAlign: 'center',
//   color: '#333',
// };

// const subHeaderStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '10px 20px',
//   backgroundColor: '#f4f4f4',
// };

// const workHistoryStyle = {
//   padding: '20px',
//   border: '1px solid #ddd',
//   marginBottom: '20px',
// };

// const jobListStyle = {
//   marginBottom: '15px',
// };

// const educationStyle = {
//   padding: '20px',
//   backgroundColor: '#fafafa',
//   borderRadius: '5px',
// };

// const schoolsStyle = {
//   marginBottom: '10px',
// };

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: 1.5,
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    display: 'flex',

  },
  logoContainer: {
    // backgroundColor: 'pink',
    textAlign: 'center',
    marginBottom: '20px',
  },
  logoStyle: {
       width: '200px',
       height: 'auto',
       margin: '20px',
     },
  header: {
    // backgroundColor: 'green',
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    color: '#d90429'
  },
  section: {
    marginBottom: '30px',
  },
  sectionHeader: {
    color: '#d90429',
    fontSize: '20px',
    fontWeight: 'bold',
    borderBottom: '2px solid #ddd',
    paddingBottom: '5px',
    marginBottom: '15px',
  },
  subTitle: {
    color: '#d90429',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  subDetails: {
    fontSize: '14px',
    color: '#d90429',
  },
  bulletList: {
    marginTop: '10px',
    paddingLeft: '20px',

  },
  bulletItem: {
    marginBottom: '5px',
  },
}


 //====================== SPA APP ===================

const App = () => {
  

  return (

    <div style={styles.container}>
      <div id='headerContainer' style={styles.headerContainer}>
        <div id='peacockLogo' style={styles.logoContainer}>
          <img src={peacock} alt=' Peacock Logo' style={styles.logoStyle}></img>
        </div>
        <header style={styles.header}>
          <h1 style={styles.title}>{resume.name}</h1>
          <div className='subheader' >
            <h4>{resume.location}</h4>
            <button className='contact'>Contact</button>
          </div>
          <div className='statment'>
            <p>{resume.statment}</p>
          </div>
        </header>
      </div>
      <div className='workHistory' style={styles.section} >
        <h2 style={styles.sectionHeader}>EXPERIENCE</h2>
        <ul>
          {resume.experience.map((job, JobIndex) => (
            <li className='jobList' id={JobIndex} >
              <p style={styles.subTitle}>{job.title}</p>
              <p style={styles.subDetails}> {job.company} - {job.employmentLength} </p>
              <ul style={styles.bulletList}>
              {job.skills.map((skill, skillIndex) => (
                <li className='skillList' id={skillIndex} style={styles.bulletItem}>{skill}</li>
              ))}
              </ul>
            </li>
          ))}
        </ul>
        <h4> More Experince on Request</h4>
      </div>
      <div className='education' style={styles.section}>
        <h2 style={styles.sectionHeader}>EDUCATION</h2>
        <ul>
          {resume.education.map((edu, eduIndex) => (
            <li className='schools' id={eduIndex} >
              <p style={styles.subTitle}>{edu.school} </p> 
              <p style={styles.subDetails}> {edu.location}- {edu.attended} </p>
              <p>{edu.course}{edu.graduated ? ' - Graduated' : ' - In Progress'}</p>
              <ul>
                {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries */}
                {/* Object.Entries returns an array of a given objects own string keyed property key-value pairs */}
                {Object.entries(edu.skills).map(([skillType, skillValue], skillIndex) => (
                  <li id={skillIndex} style={styles.bulletItem}>
                    <strong>{skillType}:</strong> {skillValue}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className='softSkills'>

      </div>

    </div>
    
  )
}

 //====================== EXPORT SPA APP ===================

export default App

