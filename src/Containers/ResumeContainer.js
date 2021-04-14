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
            <a href="https://drive.google.com/file/d/131vSLqNGPMnzb1iJcrwe3sun4MbqK4yj/view?usp=sharing" target="_blank" rel="noreferrer">
            <Document className="resume"
                file='resume.pdf'
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page className="page" pageNumber={ pageNumber } />
            </Document>
            </a>
            <div className="summary">
                <p>High energy personality with a curiousity for exploring new technologies sparked from a spirited dedication to the mountains.</p>
                <p>I thrive outside my comfort zone.</p>
            </div>
            <img className="mountain" src={mountain} alt="a climber standing on a mountain ridge" />
        </section>
    )
}

export default ResumeContainer