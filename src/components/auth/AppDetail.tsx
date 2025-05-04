import MainLogo from "../../assets/images/logostacked.png";
import Question from "../../assets/images/question-mark.png";
import PDFfile from "../../assets/images/pdf-file.png";
import { AppDetailTabbing } from "./AppDetailTabbing";
import AppDetailSidebar from "./AppDetailSideabr";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import closeIcon from "../../assets/images/plus-symbol-button.png";
// import { Document, Page, } from 'react-pdf';
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import { pdfjs } from 'react-pdf';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxHeight: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

const correspondenceTitle = "Kumar, Manish";
const correspondenceDate = "15 march 2025";

export const AppDetail = () => {
  const [open, setOpen] = useState(false);

  const [showPreview, setShowPreview] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowPreview(false);
    setPdfError(null);
    // setPageNumber(1);
  };

  const userDetail = {
    firstName: "Manish",
    lastName: "Kumar",
    dob: "04 Sep 1987",
    visaSummary: {
      visaType: "Temporary skill shortage(subclass 482)",
      stream: "Medium Term",
      dateOfGrant: "15 March 2025",
      visaGrantNumber: "185921300645",
      grantLetter: "https://www.google.com/",
      visaCondition: [
        {
          id: 1,
          visaName: "8558 - Maintain Health Insurance",
          isValid: true,
          visaContent:
            "8558 - This condition means that you miantain adequate health insurance while in australia.",
        },

        {
          id: 2,
          visaName: "8101 - Approved Work only",
          visaContent: "Lorem Ipsum",
          isValid: true,
        },

        // {
        //   id: 3,
        //   visaName: "8201-maximum3monthsStudy",
        //   visaContent: "Lorem Ipsum",
        //   isValid: false,
        // },
      ],
    },
  };

  

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${window.location.origin}/Manish Kumar visa pdf.pdf`;
    link.download = "Manish Kumar visa pdf.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pageNavigationPluginInstance = pageNavigationPlugin();

  return (
    <>
      <div className="loginPage">
        <div
          className="header-sec1 d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "#1B3564", padding: "15px 20px" }}
        >
          <img src={MainLogo} alt="logo" />
          <div className="text-end">
            <p className="mb-0 text-white">
              Kumar, Manish <a>Manage Account</a> <a>Logout</a>
            </p>
            <h4 className="text-white">Online Lodgement</h4>
          </div>
        </div>
        <AppDetailTabbing />
        <div className="loginMain p-2 pt-0">
          <div className="loginMainhead d-flex justify-content-between align-items-center">
            <h5 className="text-white fw-medium mb-0">
              Application for a Visitor Short Stay Visa Reference Number:
              EGOOME047U
            </h5>
            <div className="d-flex align-items-center gap-2">
              <img
                src={PDFfile}
                // onClick={handleOpen}
                alt="pdf-file"
                style={{ width: "18px", cursor: "pointer" }}
              />
              <img src={Question} alt="pdf-file" style={{ width: "20px" }} />
            </div>
          </div>
          <div className="adjustbgColor">
            <div className="row">
              <div className="col-md-3 pe-0">
                <AppDetailSidebar />
              </div>
              <div className="col-md-9 ">
                <div className="appdetailrightcontent p-2">
                  <div className="">
                    <h2 className="blueHeading">Visa grant details</h2>
                    <p className="cmnwordsfonts">
                      This page shows the details of the visa granted as a
                      result of this application on the day it was decided.
                    </p>
                    <p className="cmnwordsfonts">
                      For information about a person's current Australian visa
                      status see{" "}
                      <a href="#" className=" underline" style={{color: "#072243"}}>
                        Visa Entitlement Verification Online
                      </a>
                    </p>
                    <p className="cmnwordsfonts">
                      For Maritime Crew Visa holder information see{" "}
                      <a href="#" className="underline"  style={{color: "#072243"}}>
                        Maritime Crew visa status enquiry
                      </a>
                    </p>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={{ backgroundColor: "#dddddd66" }}
                      >
                        <Typography className="blueHeadingAccording" component="span">
                          {userDetail?.lastName}, {userDetail?.firstName} (
                          {userDetail?.dob})
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <h4 className="accordingHeading">Visa summary</h4>
                        <div className="accordianData">
                          <ul>
                            <li>
                              <p>Visa</p>
                              <p>{userDetail?.visaSummary?.visaType}</p>
                            </li>
                            <li>
                              <p>Stream</p>
                              <p>{userDetail?.visaSummary?.stream}</p>
                            </li>
                            <li>
                              <p>Date of grant</p>
                              <p>{userDetail?.visaSummary?.dateOfGrant}</p>
                            </li>
                            <li>
                              <p>Visa grant number</p>
                              <p>{userDetail?.visaSummary?.visaGrantNumber}</p>
                            </li>
                          </ul>
                          <h4 className="accordingHeading">Grant letter</h4>
                          <a onClick={handleOpen} style={{cursor: "pointer", fontSize: "12px", color: "#072243"}}>View grant letter</a>
                        </div>
                      </AccordionDetails>
                      <h4
                        className="accordingHeading"
                        style={{ marginLeft: "40px" }}
                      >
                        Visa conditions
                      </h4>

                      {userDetail.visaSummary.visaCondition.map(
                        (item, index) => (
                          // item.isValid &&
                          //   {userDetail.visaSummary.visaCondition.filter((item)=>item.isValid).map((item,index) => (
                          <Accordion className="lastAccordian" key={index} style={{ marginLeft: "40px" }}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              style={{ backgroundColor: "#dddddd66" }}
                            >
                              <Typography
                                className="blueHeadingAccording"
                                component="span"
                              >
                                {item.visaName}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{fontSize: "12px", fontWeight: "500"}}>
                              {item.visaContent}
                            </AccordionDetails>
                          </Accordion>
                        )
                      )}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-sec">
          <ul>
            <li>
              <a className="footerA">Accessibility</a>
            </li>
            <li>
              <a className="footerA">Online Security</a>
            </li>
            <li>
              <a className="footerA">Privacy</a>
            </li>
            <li>
              <a className="footerA">Copyright & Disclaimer</a>
            </li>
          </ul>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          className="pdfModal"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="border-0 p-4" sx={style}>
            <Typography id="modal-modal-title">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0" style={{ color: "#0949A4" }}>
                  View correspondence item
                </h4>
                <div className="d-flex align-items-center gap-2">
                  {/* <Button
                    variant="contained"
                    startIcon={<VisibilityIcon />}
                    onClick={() => setShowPreview(!showPreview)}
                    style={{ backgroundColor: "#0949A4" }}
                  >
                    {showPreview ? "Hide Preview" : "Show Preview"}
                  </Button> */}
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    onClick={handleDownload}
                    style={{ backgroundColor: "#0949A4" }}
                  >
                    Download PDF
                  </Button>
                  <div className="addCloseBtn">
                    <img
                      src={closeIcon}
                      alt="close"
                      onClick={handleClose}
                      className="img-fluid"
                      style={{ transform: "rotate(45deg)", cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    // display: "flex",
                    // flexDirection: "row",
                    // justifyContent: "space-between",
                    fontSize: "16px",
                  }}
                >
                  <div className="w-100 d-flex">
                    <p className="w-50 mb-0" style={{fontSize: "14px", fontWeight: "500"}}>Correspondence title:</p>
                    <p className="w-50 mb-0" style={{fontSize: "14px", fontWeight: "500"}}>{correspondenceTitle}</p>
                  </div>
                  <div className="w-100 d-flex">
                    <p className="w-50 mb-0" style={{fontSize: "14px", fontWeight: "500"}}>Date sent:</p>
                    <p className="w-50 mb-0" style={{fontSize: "14px", fontWeight: "500"}}>{correspondenceDate}</p>
                  </div>
                </div>
              </div>
              <div className="loginMainhead d-flex justify-content-between align-items-center">
                <h5 className="text-white fw-medium mb-0">
                  Correspondence details
                </h5>
              </div>
              <div style={{ padding: "10px 16px" }}>
                <div className="mb-3">
                  <h6 style={{ color: "#1B3564" }}>
                    Manish Kumar visa pdf.pdf
                  </h6>
                </div>
                {/* {showPreview && ( */}
                  <div
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.3)',
                      height: '750px',
                      padding: '16px',
                      borderRadius: '8px',
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {pdfError ? (
                      <div className="text-center text-danger">
                        <p>{pdfError}</p>
                      </div>
                    ) : (
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer 
                          fileUrl="/Manish Kumar visa pdf.pdf"
                          plugins={[pageNavigationPluginInstance]}
                          defaultScale={SpecialZoomLevel.PageFit}
                        />
                      </Worker>
                    )}
                  </div>
                {/* )} */}
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};
