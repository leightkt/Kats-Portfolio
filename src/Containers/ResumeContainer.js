import './ResumeContainer.css'
import mountain from '../assets/mountain.JPG'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function ResumeContainer () {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    return (
        <section className="resume-section">
            <div className="summary">
                <p>High energy personality with a curiousity for exploring new technology sparked from a spirited dedication to the mountains.</p>
                <p>I thrive outside my comfort zone.</p>
                <img className="mountain" src={mountain} alt="a climber standing on a mountain ridge" />
            </div>
            <a className="resume-link" href="https://drive.google.com/file/d/131vSLqNGPMnzb1iJcrwe3sun4MbqK4yj/view?usp=sharing" target="_blank" rel="noreferrer">
                <Document className="resume hide-on-small"
                    file='resume.pdf'
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page className="page" pageNumber={ pageNumber } />
                </Document>
            </a>
            <a className="show-on-small" href="https://drive.google.com/file/d/131vSLqNGPMnzb1iJcrwe3sun4MbqK4yj/view?usp=sharing">FULL RESUME</a>
            
        </section>
    )
}

export default ResumeContainer