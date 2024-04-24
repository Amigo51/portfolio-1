import { Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <div style={{ height: "100%", margin: "10px" }}>
      <Typography
        variant="h5"
        textAlign={"left"}
        fontWeight={"bold"}
        sx={{ textDecoration: "overline", paddingBottom: "10px", paddingTop: "20px" }}
        md={{ textDecoration: "underline", paddingBottom: "30px" }}>
        About Me
      </Typography>
      <Typography textAlign={"left"}>
      👋 Hello! I’m Seth Ofori-Amanfo, an enthusiastic IT and Web Administrator with a penchant for problem-solving and a love for all things tech. Here’s a glimpse into my professional journey:

      </Typography>
      <br />
      <Typography textAlign={"left"}>
      
    From tinkering with my first computer as a curious kid to managing complex server infrastructures, I’ve always been drawn to the digital realm. My passion lies in optimizing systems, ensuring seamless user experiences, and staying ahead of the ever-evolving tech landscape.
    As a Web Administrator, I thrive on weaving together the threads of design, functionality, and security. Whether it’s deploying robust CMS platforms, Configuring servers, or resolving DNS or IP addressing issues, I’m in my element. My goal? To find the best optimum solution to any technical related problem”

      </Typography>
      <br />
      <Typography textAlign={"left"}>
      Behind every line of code and server configuration lies a human. I’m passionate about understanding user needs, empathizing with their frustrations, and crafting solutions that make their lives easier.So, grab that virtual coffee, explore my portfolio, and let’s chat about tech, life, or the latest meme. 🚀

      </Typography>

      <Typography textAlign={"left"} style={{ marginTop: 20, marginBottom: 60 }}>
        MY SKILLS: Server Administration, TCP/IP, Routing, Front-End Web Dev, Technical Support.
      </Typography>
    </div>
  );
};

export default AboutMe;
