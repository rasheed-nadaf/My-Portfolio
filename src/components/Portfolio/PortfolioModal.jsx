import React from "react";
import { GiCheckMark } from "react-icons/gi";

const PortfolioModal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{project.name}</h2>
                <p><strong>Overview:</strong> {project.overview}</p>

                <p><strong>Key Features:</strong></p>
                <ul className="modal-list">
                    {project.features.map((feature, index) => (
                        <li key={index}>
                            <GiCheckMark className="service__list-icon" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>


                <p><strong>Tech Stack:</strong></p>
                <div className="tech-stack">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-item">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="modal-buttons">
                    <button className="btn btn-primary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
