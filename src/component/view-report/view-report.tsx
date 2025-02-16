// @ts-ignore
import DocumentViewer from "@txtextcontrol/tx-react-ds-document-viewer";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

interface IProps{
  report:string
}

const ViewReport = (props:IProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Button
        sx={{
          padding: "10px",
          color: "white",
          borderRadius: "15px",
          backgroundColor: "#87BFF7",
          border: "2px solid #ffffff",
          transition: "0.3s ease all",
          "&:hover": {
            backgroundColor: "white",
            border: "2px solid #87BFF7",
            color: "#87BFF7",
          },
          "&:focus": {
            outline: "none",
          },
        }}
        onClick={handleOpenPopup}
      >
        <InsertDriveFileOutlinedIcon />
      </Button>
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <DocumentViewer
            width="100%"
            height="500px"
            serviceURL="https://trial.dsserver.io"
            documentData={props.report}
            clientId="dsserver.nrbk08V8243C4vBIysv3q6rfmDTH02Df"
            clientSecret="AZ1GZvmvJg2xhJ3G7RJtAad5BT7TmI26"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClosePopup}
            sx={{
              padding: "10px",
              color: "white",
              borderRadius: "15px",
              backgroundColor: "#87BFF7",
              "&:focus": {
                outline: "none",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewReport;