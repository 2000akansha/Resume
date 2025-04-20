import React from 'react';
import './resume.css';

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="resume-wrapper">
            {/* Print Button */}
            <div className="print-btn-container">
                <button onClick={handlePrint} className="print-btn">Print Resume</button>
            </div>

            {/* Header */}
            <header className="resume-header">
                <h1>Akansha Bhagat</h1>
                <h2>Node.js Backend Developer</h2>
                <p>
                    <a href="mailto:Bhagatakansha154@gmail.com">Bhagatakansha154@gmail.com</a> | +91-7838644826<br />
                    <a href="https://2000akansha.github.io/portfolio/" target="_blank" rel="noreferrer">Portfolio Website</a>
                </p>
            </header>

            {/* Summary */}
            <section>
                <h3>Professional Summary</h3>
                <p>
                    Backend Developer with 2+ years of experience in designing and building secure, scalable systems using Node.js, Express.js, and MongoDB. Experienced in developing government and enterprise-level APIs, database optimization, and backend architecture. Adept at delivering high-performance systems with a focus on maintainability and scalability.
                </p>
            </section>

            {/* Technical Skills */}
            <section>
                <h3>Technical Skills</h3>
                <ul>
                    <li>Languages: JavaScript (ES6+), C++</li>
                    <li>Backend: Node.js, Express.js</li>
                    <li>Frontend: React.js, HTML, CSS, JavaScript</li>
                    <li>Database: MongoDB, Firebase (Basic)</li>
                    <li>Version Control: Git, GitHub</li>
                    <li>Testing & Tools: Postman, Manual Testing</li>
                    <li>Cloud: AWS (Familiar), Firebase (Familiar)</li>
                    <li>Other: REST APIs, JWT Auth, Data Modeling</li>
                </ul>
            </section>

            {/* Experience */}
            <section>
                <h3>Professional Experience</h3>

                <div>
                    <h4>Executive – Full Stack Developer</h4>
                    <p><em>Innobles Smart Technologies Pvt Ltd, New Delhi | Sep 2024 – Present</em></p>
                    <ul>
                        <li>Led backend architecture for large-scale government platforms.</li>
                        <li>Developed RESTful APIs and modular codebases with Node.js and Express.js.</li>
                        <li>Optimized MongoDB schema and queries for high-performance data handling.</li>
                        <li>Built finance-related modules including fund disbursement and audit tracking.</li>
                    </ul>
                </div>

                <div>
                    <h4>Associate Software Development Engineer</h4>
                    <p><em>Axia Health Assist Technologies Pvt Ltd, New Delhi | May 2022 – Sep 2023</em></p>
                    <ul>
                        <li>Developed backend features for healthcare appointment and record systems.</li>
                        <li>Integrated secure authentication and RBAC systems.</li>
                        <li>Worked with QA and frontend teams for debugging and product improvements.</li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section>
                <h3>Education</h3>
                <ul>
                    <li>MCA, Lloyd Institute of Engineering & Technology, Greater Noida (2023–2025)</li>
                    <li>BCA, IGNOU, New Delhi (2022–2023)</li>
                </ul>
            </section>

            {/* Projects */}
            <section>
                <h3>Key Projects</h3>
                <ul>
                    <li>Property Tax Management System (U.P.) – Automated tax calculations, integrated digital payments, and optimized backend data pipelines.</li>
                    <li>BIDA Finance (Jhansi) – Built fund allocation APIs and secured document workflows. [<a href="https://finance.bida.co.in/login" target="_blank" rel="noopener noreferrer">Link</a>]</li>
                    <li>DLAMS (Himachal) – Developed digital land acquisition and compensation APIs. [<a href="https://lamsgaggal.com/login" target="_blank" rel="noopener noreferrer">Link</a>]</li>
                    <li>CHB Housing Board – Created backend modules for housing allocation and payment tracking. [<a href="https://innobles.com/chb_admin" target="_blank" rel="noopener noreferrer">Link</a>]</li>
                    <li>Health Assist – Engineered backend for real-time health analytics. [<a href="https://thehealthassist.co/run/" target="_blank" rel="noopener noreferrer">Link</a>]</li>
                    <li>Job Finder (Job Dekho) – MERN stack portal with RBAC and real-time updates.</li>
                    <li>E-BG (HDFC Project) – Developed secure APIs for electronic bank guarantees.</li>
                    <li>Employee Project Flow Management – Built manager dashboard to track tasks. [<a href="https://myte.innobles.com/login" target="_blank" rel="noopener noreferrer">Link</a>]</li>
                    <li>Loan Management Portal – Created system for processing government loan applications.</li>
                </ul>
            </section>

            {/* Certifications */}
            <section>
                <h3>Certifications</h3>
                <ul>
                    <li>AWS Certified Security Specialty – AWS</li>
                    <li>AWS Cloud Practitioner Essentials – <a href="https://explore.skillbuilder.aws/learn/courses/134/aws-cloud-practitioner-essentials/lessons" target="_blank" rel="noopener noreferrer">Link</a></li>
                    <li>IAM Authentication & Authorization – AWS – <a href="https://explore.skillbuilder.aws/learn/courses/85/authentication-and-authorization-with-aws-identity-and-access-management" target="_blank" rel="noopener noreferrer">Link</a></li>
                    <li>Cyber Forensics – Great Learning</li>
                    <li>Cyber Security Analyst – TCS – <a href="https://lnkd.in/gGjyNsY3" target="_blank" rel="noopener noreferrer">Link</a></li>
                    <li>Coding Blaze – Coding Ninjas</li>
                </ul>
            </section>

            {/* Tools & Technologies */}
            <section>
                <h3>Tools & Technologies</h3>
                <ul>
                    <li>Version Control: Git, GitHub</li>
                    <li>API Testing: Postman</li>
                    <li>Cloud/Hosting: Firebase, AWS (Familiar)</li>
                    <li>Project Management: JIRA (Familiar)</li>
                </ul>
            </section>

            {/* Footer */}
            <footer>
                <p>Last updated: April 2025</p>
            </footer>
        </div>
    );
};

export default Resume;
