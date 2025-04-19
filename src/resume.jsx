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
                <button onClick={handlePrint} className="print-btn">🖨️ Print Resume</button>
            </div>

            <div className="resume-header">
                <h1>💼 Akansha Bhagat</h1>
                <h2>Node.js Backend Developer</h2>
                <p>
                    📧 <a href="mailto:Bhagatakansha154@gmail.com">Bhagatakansha154@gmail.com</a> | 📞 +91-7838644826<br />
                    🌐 <a href="https://2000akansha.github.io/portfolio/" target="_blank" rel="noreferrer">Portfolio Website</a>
                </p>
            </div>

            <section>
                <h3>🎯 Professional Summary</h3>
                <p>
                    Results-driven Backend Developer with 2+ years of experience designing and building secure, scalable backend systems using Node.js, Express.js, and MongoDB. Proven success in government and enterprise-grade API development, database architecture, and system optimization. Passionate about backend engineering with the versatility to contribute across the full stack.
                </p>
            </section>

            <section>
                <h3>🧰 Technical Skills</h3>
                <ul>
                    <li><strong>Languages:</strong> JavaScript (ES6+), C++</li>
                    <li><strong>Backend:</strong> Node.js, Express.js</li>
                    <li><strong>Frontend:</strong> React.js, HTML, CSS, JavaScript</li>
                    <li><strong>Database:</strong> MongoDB, Firebase (Basic)</li>
                    <li><strong>Version Control:</strong> Git, GitHub</li>
                    <li><strong>Tools & Testing:</strong> Postman, Manual Testing</li>
                    <li><strong>Cloud:</strong> AWS (Familiar), Firebase(Familiar)</li>
                    <li><strong>Other:</strong> REST APIs, JWT Auth, Data Modeling</li>
                </ul>
            </section>

            <section>
                <h3>🏢 Professional Experience</h3>

                <h4>Executive – Full Stack Developer</h4>
                <p><em>Innobles Smart Technologies Pvt Ltd, New Delhi | Sep 2024 – Present</em></p>
                <ul>
                    <li>Led backend architecture for large-scale government platforms.</li>
                    <li>Built scalable RESTful APIs and modular codebases using Node.js and Express.</li>
                    <li>Optimized MongoDB queries and schema design for large datasets.</li>
                    <li>Worked on digital finance modules, fund disbursement logic, and audit trails.</li>
                </ul>

                <h4>Associate Software Development Engineer</h4>
                <p><em>Axia Health Assist Technologies Pvt Ltd, New Delhi | May 2022 – Sep 2023</em></p>
                <ul>
                    <li>Developed backend features for healthcare products including appointment & record systems.</li>
                    <li>Implemented secure authentication, RBAC, and optimized system workflows.</li>
                    <li>Collaborated across teams for product development, debugging, and QA automation.</li>
                </ul>
            </section>

            <section>
                <h3>🎓 Education</h3>
                <ul>
                    <li><strong>MCA</strong>, Lloyd Institute of Engineering & Technology, Greater Noida (2023–2025)</li>
                    <li><strong>BCA</strong>, IGNOU, New Delhi (2022–2023)</li>
                </ul>
            </section>

            <section>
                <h3>💡 Key Projects</h3>
                <ul>
                    <li><strong>Property Tax Management System (U.P.):</strong> Automated tax calculations, integrated digital payments, and optimized backend data pipelines.</li>
                    <li><strong>BIDA Finance (Jhansi):</strong> Built fund allocation APIs, document verification, and secured workflows for a financial grant system.</li>
                    <li><strong>DLAMS (Himachal):</strong> Developed APIs and backend services for digital land acquisition and compensation systems.</li>
                    <li><strong>CHB Housing Board:</strong> Created backend modules for housing allocation, document tracking, and payment logging.</li>
                    <li><strong>Health Assist:</strong> Engineered a backend for real-time health analytics and patient records.</li>
                    <li><strong>Job Finder (Job Dekho):</strong> MERN stack job portal with RBAC, job search, and real-time updates.</li>
                    <li><strong>E-BG (HDFC Project):</strong> Automated issuance of electronic bank guarantees with secure API communication.</li>
                    <li><strong>Employee Project Flow Management:</strong> Built a dashboard for managers to track tasks, timelines, and performance metrics.</li>
                    <li><strong>Loan Management Portal (Directorate of Industries):</strong> Developed backend for government loan application processing, audit logs, and beneficiary management.</li>
                </ul>
            </section>

            <section>
                <h3>📜 Certifications</h3>
                <ul>
                    <li>AWS Certified Security Specialty – AWS</li>
                    <li>AWS Cloud Practitioner Essentials</li>
                    <li>IAM Authentication & Authorization – AWS</li>
                    <li>Cyber Forensics – Great Learning</li>
                    <li>Cyber Security Analyst – TCS</li>
                    <li>Coding Blaze – Coding Ninjas</li>
                </ul>
            </section>

            <section>
                <h3>🛠️ Tools & Technologies</h3>
                <ul>
                    <li><strong>Version Control:</strong> Git, GitHub</li>
                    <li><strong>API Testing:</strong> Postman</li>
                    <li><strong>Cloud/Hosting:</strong> Firebase (Familiar), AWS (Familiar)</li>
                    <li><strong>Project Management:</strong> JIRA (Familiar)</li>
                </ul>
            </section>

            <footer>
                <p>📅 Last updated: April 2025</p>
            </footer>
        </div>
    );
};

export default Resume;
