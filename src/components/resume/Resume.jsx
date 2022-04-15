import React from 'react';
import Skills from '../skills/Skills';

const resumeContent = [
  {
    jobPosition: `Software Engineer`,
    jobDuration: `Jan 2022 - Present`,
    timeDuraton: `Full Time`,
    compnayName: 'GoPuff',
    jobDescription: `Implementation of end to end microservice environments using GitOps principles.
    Deploy, administrate and troubleshoot Kubernetes clusters. Provision Terraform resources across
    multiple cloud environments and SaaS with various providers. Auditing Governance of Azure and
    orchestrating clean up and implementation of policy as code. Implementation of Observability
    workflow via IaC for smart incident management`,
  },
  {
    jobPosition: `Senior Azure Infrastructure Consultant`,
    jobDuration: `Jul 2020 - Jan 2022`,
    timeDuraton: `Full Time`,
    compnayName: 'Neudesic',
    jobDescription: `Analyzed, designed, and implementation of cloud infrastructure to migrate
    application and Oracle database from existing data centers to Azure cloud using Azure Migrate
    and Express Route. Defined and deployed Azure networking landing zone using Terraform in order
    to rehost application in Azure. Designed and development of policy as code library to enforce
    governance and compliance based on the Cloud Adoption Framework. Collaborated with development
    teams to test and promote code through multi-subscription Azure environments. Implementation of
    monitoring and incident management strategies and services for cloud workloads`,
  },
  {
    jobPosition: `Cloud Security & Systems Engineer`,
    jobDuration: `May 2018 - Jul 2021`,
    timeDuraton: `Full Time`,
    compnayName: 'Security Risk Advisors',
    jobDescription: `Engineered solutions and administrated over Azure AD and O365 identity and
    compliance services. Deployed, hardened, and managed Azures Intune MDM to endpoints and mobile
    devices. Automation of user account, creation and manipulation using APIs, PS scripting and
    Microsoft Flow/Power Automate/Logic Apps. Azure Cloud identity federation and SSO
    implementation/administration. Investigation, alerting, and incident response of phishing emails. 
    Exchange Online Administration for dynamic mailbox assignment`,
  },
  {
    jobPosition: `IT Technician`,
    jobDuration: `Sept 2016 - May 2018`,
    timeDuraton: `Full Time`,
    compnayName: 'Techworks Consulting',
    jobDescription: `Implementation of multi site physical network and security infrastructure including
    switches, routers, access points and access control hardware. Active Directory domain administration
    and configuration on Windows Servers. Powershell scripting user account creation and manipulation for
    onboarding and deprovisioning. Support disaster recovery and backup operations for multiple client sites`,
  },
];

const educatonContent = [
  {
    passingYear: '2014-2018',
    degreeTitle:
      'Bsc. in Information Systems with System & Network Administration Specialization',
    instituteName: 'State University of New York at Stony Brook',
  },
];

const Resume = () => {
  return (
    <>
      <section id='resume' className='section'>
        <div className='container'>
          <div className='title'>
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className='resume-box'>
            {resumeContent.map((val, i) => (
              <div className='resume-row' key={i}>
                <div className='row'>
                  <div className='col-md-4 col-xl-3'>
                    <div className='rb-left'>
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className='rb-time'>{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className='col-md-8 col-xl-9'>
                    <div className='rb-right'>
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
          </div>

          {/* separated */}
          <div
            className='separated'
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'img/border-dark.png'
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className='title'>
            <h3>Education & Skills</h3>
          </div>

          <div className='row align-items-center'>
            <div className='col-lg-4 m-15px-tb'>
              <ul className='aducation-box'>
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className='col-lg-7 ml-auto m-15px-tb'>
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
