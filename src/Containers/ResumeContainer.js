import './ResumeContainer.css'
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
        <a href="https://drive.google.com/file/d/131vSLqNGPMnzb1iJcrwe3sun4MbqK4yj/view?usp=sharing" target="_blank" rel="noreferrer">
        <Document className="resume"
            file='resume.pdf'
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page className="page" pageNumber={ pageNumber } />
        </Document>
        </a>
    )
}

export default ResumeContainer