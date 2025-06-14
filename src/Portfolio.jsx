import React from 'react';
import { 
  AppBar, Toolbar, Typography, Button, IconButton,
  Container, TextField, Box, Grid, Card, CardContent,
  Avatar, Chip, Paper, Link 
} from '@mui/material';
import { 
  Download, Email, LinkedIn, GitHub, Phone, LocationOn,
  Code, School, Work, WhatsApp, Twitter
} from '@mui/icons-material';
import image from '../src/image/image.jpg.jpeg';
import { motion } from 'framer-motion';
import './Portfolio.css';


const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Portfolio = () => {
  const handleDownloadResume = () => {
    // Dummy resume download (replace with actual file link)
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    link.click();
  };

  const skills = [
    'React',  'JavaScript', 'Node.js',  
    'CSS', 'Material-UI', 'Git', 'MongoDB', 'HTML','Bootstrap'
  ];

  const projects = [
    {
      title: 'CGIAR',
      description: 'Frontend project with real time updates',
      technologies: ['React', 'CSS', 'MUI', 'Bootstrap','HTML', 'JS'],
    },
    {
      title: 'ICAR',
      description: 'Collaborative task management tool with real-time updates',
      technologies: ['React', 'CSS', 'MUI', 'Bootstrap','HTML', 'JS'],
    }, 
    {
      title: 'Pharma Store',
      description: 'Collaborative management tool with real-time updates',
      technologies: ['React', 'CSS', 'MUI', 'Bootstrap','HTML', 'JS'],
    },
     {
      title: 'Drone Website',
      description: 'Web solution page for make the client deals',
      technologies: ['React', 'CSS', 'MUI', 'Bootstrap','HTML', 'JS'],
    },
  ];

  const experience = [
    {
      title: 'College class Projects',
      company: 'GIFT AUTONOMOUS COLLEGE',
      period: 'Nov 2023 - Dec 2023',
    },
    {
      title: 'Internship',
      company: 'Web_bocket pvt ltd',
      period: 'Nov 2023 - Dec 2023',
    },
    {
      title: 'Internship',
      company: 'Technoboot pvt ltd',
      period: 'Oct 2024 - Nov 2024',
    },
    {
      title: 'Frontend Developer',
      company: 'Digitomesh websolution',
      period: 'Nov 2024 - Present',
    },
  ];

  return (
    <Box>
      {/* Navbar */}
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(45deg, #3f51b5, #2196f3)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none',
                letterSpacing: 1.5,
              }}
            >
              Subhashree Mishra
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navLinks.map(({ label, href }) => (
                <Button
                  key={label}
                  href={href}
                  sx={{
                    color: 'white',
                    fontWeight: '600',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      borderRadius: 1,
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
 <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/tiny.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          height: "100vh",  // full viewport height here only
          zIndex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                color: "white",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
                Subhashree Mishra
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ color: "white", opacity: 0.8 }}>
                Frontend Developer
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: 500, mx: { xs: "auto", md: 0 } }}>
                Passionate about creating beautiful, functional web applications that solve real-world problems.
                With 6+ months of experience in Frontend development.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Download />}
                  onClick={handleDownloadResume}
                  sx={{
                    background: "linear-gradient(45deg, #3f51b5, #2196f3)",
                    fontWeight: "600",
                    "&:hover": {
                      background: "linear-gradient(45deg, #2196f3, #3f51b5)",
                    },
                  }}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#contact"
                  sx={{
                    fontWeight: "600",
                    color: "white",
                    borderColor: "white",
                    "&:hover": { borderColor: "#2196f3", color: "#2196f3" },
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={image}
                  alt="Developer"
                  sx={{
                    width: 220,
                    height: 220,
                    boxShadow: 3,
                    border: "4px solid white",
                  }}
                />
                {/* Floating Cards */}
                <Box sx={{ position: "absolute", top: -20, right: -20 }}>
                  <Paper
                    elevation={6}
                    sx={{
                      p: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: 3,
                      width: 90,
                      background: "linear-gradient(45deg, #3f51b5, #2196f3)",
                      color: "white",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    <Code fontSize="medium" />
                    <Typography variant="caption" sx={{ fontWeight: "600" }}>
                      Clean Code
                    </Typography>
                  </Paper>
                </Box>
                <Box sx={{ position: "absolute", bottom: -20, left: -20 }}>
                  <Paper
                    elevation={6}
                    sx={{
                      p: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: 3,
                      width: 110,
                      background: "linear-gradient(45deg, #f50057, #ff4081)",
                      color: "white",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    <School fontSize="medium" />
                    <Typography variant="caption" sx={{ fontWeight: "600" }}>
                      Always Learning
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>



      {/* About Section */}
      <Box
        id="about"
        className="section"
        sx={{ py: 8 }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            className="section-title"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                I'm a passionate Frontend developer with a keen eye for design and a love for clean, 
                efficient code. My journey in web development started 6+ months ago.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                I specialize in creating responsive, user-friendly applications using modern technologies 
                like React. I believe in writing maintainable code and 
                following best practices to deliver exceptional user experiences.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: '600' }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>subhashreems2002@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>+91 9861779004</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>Maitri vihar, Bhubaneswar</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section (unchanged) */}
      <Box
        id="skills"
        className="section skills-section"
        sx={{ py: 8 }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            className="section-title"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Skills & Technologies
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            {skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                variant="filled"
                className="skill-chip"
                sx={{
                  fontSize: '1rem',
                  py: 2,
                  px: 1,
                  background: 'linear-gradient(45deg, #3f51b5, #2196f3)',
                  color: 'white',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box
        id="experience"
        className="section"
        sx={{ py: 8 }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            className="section-title"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Experience
          </Typography>
          <Grid container spacing={4}>
            {experience.map((exp, index) => (
              <Grid item xs={12} md={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    elevation={6}
                    sx={{
                      borderRadius: 3,
                      padding: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      background: 'linear-gradient(45deg, #2196f3, #3f51b5)',
                      color: 'white',
                    }}
                  >
                    <Work sx={{ fontSize: 40, color: 'white' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: '600' }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.8 }}>
                        {exp.period}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        className="section projects-section"
        sx={{ py: 8 }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            className="section-title"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    elevation={6}
                    sx={{
                      borderRadius: 3,
                      padding: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      background: 'linear-gradient(45deg, #3f51b5, #2196f3)',
                      color: 'white',
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: '600' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                        {project.description}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: 'white',
                            color: 'white',
                            fontWeight: '600',
                          }}
                        />
                      ))}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        className="section contact-section"
        sx={{ py: 10, backgroundColor: "#f9f9f9" }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            className="section-title"
            sx={{ textAlign: "center", mb: 6, fontWeight: "bold" }}
          >
            Get In Touch
          </Typography>

          {/* Social Icons */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: 'wrap' }}>
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href="https://www.linkedin.com/in/subhashree-mishra-a72178288/"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ textDecoration: 'none' }}
                >
                  <IconButton
                    sx={{
                      background: "linear-gradient(45deg, #0077b5, #00a0dc)",
                      color: "white",
                      "&:hover": { transform: "translateY(-2px)" },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3 }}>
                <IconButton
                  sx={{
                    background: "linear-gradient(45deg, #ea4335, #fbbc05)",
                    color: "white",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                  onClick={() => window.location.href = "mailto:subhashreems2002@gmail.com"}
                >
                  <Email />
                </IconButton>
              </motion.div>

              <motion.div whileHover={{ y: -3 }}>
                <IconButton
                  sx={{
                    background: "linear-gradient(45deg, #25D366, #128C7E)",
                    color: "white",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                  onClick={() => window.open('https://wa.me/919861779004', '_blank')}
                >
                  <WhatsApp />
                </IconButton>
              </motion.div>

              <motion.div whileHover={{ y: -3 }}>
                <IconButton
                  sx={{
                    background: "linear-gradient(45deg, #1DA1F2, #0d8ddb)",
                    color: "white",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                  onClick={() => window.open('https://twitter.com/intent/tweet?screen_name=YourTwitterHandle', '_blank')}
                >
                  <Twitter />
                </IconButton>
              </motion.div>
            </Box>
          </Box>
          
          {/* Contact Form */}
          <Paper
            elevation={3}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: 'white',
              mb: 5,
            }}
          >
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Your Name" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Your Email" variant="outlined" required type="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Your Message" variant="outlined" multiline rows={4} required />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button type="submit" variant="contained" size="large">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>

          {/* Resume Button */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Download />}
              onClick={handleDownloadResume}
              className="download-btn"
            >
              Download My Resume
            </Button>
          </Box>
      </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;
