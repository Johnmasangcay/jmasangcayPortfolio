import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { JSX } from 'react/jsx-runtime';
import SeedImg from '../../img/SopImg.png';
import CdeImg from '../../img/CdeImg.png';
import CalcrnImg from '../../img/CalcrnImg.png';
import SjcoeImg from '../../img/SjcoeImg.png';
import PftImg from '../../img/PftImg.png';
import SstImg from '../../img/SstImg.png';

import styles from "./index.module.css";

const Projects = (props: JSX.IntrinsicAttributes & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Projects
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="container">
                <div className="row">
                    <div className={`${styles.projectBorder}`}>
                        <div className="col-12">
                            <img className={`${styles.projectImg}`} src={SeedImg} alt="Seed Of Partnership Image" />
                        </div>
                        <h4><i>Seeds Of Partnership</i></h4>
                        <p>Seeds of Partnership is currently under development, with ongoing efforts to meet client expectations. As the sole contributor during my internship, I have been responsible for developing key logic for the website's pages and implementing weekly updates. The project is being built using Next.js, TypeScript, .NET, and SQL.</p>
                        <p><a target="_blank" href="https://dev.seedsofpartnershipstars.org/login">https://dev.seedsofpartnershipstars.org/login</a></p>
                    </div>

                    <div className={`${styles.projectBorder}`}>
                        <div className="col-12">
                            <img className={`${styles.projectImg}`} src={CdeImg} alt="My CDE Connect Image" />
                        </div>
                        <h4><i>My CDE connect</i></h4>
                        <p>MyCdeConnect, developed by CodeStack, my responsibilities included working on the SARC and LCAP pages within a project built in Next.js, TypeScript, .NET, and SQL, addressing display issues, and fixing bugs within existing components to ensure the site's proper functionality.</p>
                        <p><a target="_blank" href="https://www.mycdeconnect.org/">https://www.mycdeconnect.org/</a></p>
                    </div>

                    <div className={`${styles.projectBorder}`}>
                        <div className="col-12">
                            <img className={`${styles.projectImg}`} src={CalcrnImg} alt="California Career Center Image" />
                        </div>
                        <h4><i>California Career Center</i></h4>
                        <p>Cal Career Center, crafted by CodeStack, I actively participated in developing logic during the project's construction phase. Despite navigating a tight deadline, our team diligently tackled issues and resolved bugs. This endeavor demanded expertise in Angular, TypeScript, and .NET technologies, which were integral to the project's architecture and functionality.</p>
                        <p><a target="_blank" href="https://www.calcareercenter.org/">https://www.calcareercenter.org/</a></p>
                    </div>

                    <div className={`${styles.projectBorder}`}>
                        <div className="col-12">
                            <img className={`${styles.projectImg}`} src={SstImg} alt="Beyond Sst site image" />
                        </div>
                        <h4><i>BEYOND SST</i></h4>
                        <p>During my internship and first year at CodeStack, I contributed to the maintenance of the BeyondSst project, which is developed using Angular, Typescript, .NET, and SQL technologies. My responsibilities included troubleshooting display issues and fixing bugs within existing components to ensure the proper functioning of the website.</p>
                        <p><a target="_blank" href="https://beyondsst.org/">https://beyondsst.org/</a></p>
                    </div>

                    <div className={`${styles.projectBorder}`}>
                        <div className="col-12">
                            <img className={`${styles.projectImg}`} src={SjcoeImg} alt="SJCOE Site Image" />
                        </div>
                        <h4><i>San Joaquin County Of Education</i></h4>
                        <p>I led maintenance for SJCOE, a project by CodeStack. I developed pages and optimized release times by efficiently transferring PDF files to blob storage. The project utilizes a combination of JavaScript, Visual Basic, and ASP.NET technologies for its implementation.</p>
                        <p><a target="_blank" href="https://www.sjcoe.org/index.aspx">https://www.sjcoe.org/index.aspx</a></p>
                    </div>

                    <div className={`${styles.projectBorder}`}>
                        <div className="col-12">
                            <img className={`${styles.projectImg}`} src={PftImg} alt="PFT Site Image" />
                        </div>
                        <h4><i>Califronia Physical Fitness Test</i></h4>
                        <p>As the maintainer of the "California Physical Fitness Test" project, my responsibilities include troubleshooting display issues and fixing bugs within existing components to ensure the proper functioning of the website. This involves ongoing monitoring and refinement to uphold its seamless performance and user experience standards.</p>
                        <p><a target="_blank" href="https://pftdata.org/">https://pftdata.org/</a></p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Projects