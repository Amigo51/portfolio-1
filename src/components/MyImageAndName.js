import { Typography } from "@mui/material";
import myimage from "../assets/MyImage.png";

const MyImageAndName = () => {
  return (
    <div>
      <img src={myimage} alt="me" width={200} style={{ borderRadius: "5%", marginTop: "30px" }} />
      <Typography variant="h4" sx={{ paddingTop: "20px", fontWeight: "bold" }}>
        Seth Ofori-Amanfo
      </Typography>
    </div>
  );
};
export default MyImageAndName;
