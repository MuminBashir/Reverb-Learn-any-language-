import { Container, Grid, Paper, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ m: "2rem auto" }}>
      <Paper elevation={3} style={{ padding: "20px", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom>
          About Reverb
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Reverb, your premier online language learning platform.
          We're here to help you learn and master different languages while
          making the learning process engaging and enjoyable.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide a dynamic and immersive language learning
          experience. With Reverb, you can explore a world of languages, gain
          cultural insights, and test your language skills.
        </Typography>
        <Typography variant="h5" gutterBottom>
          What We Offer
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              style={{ padding: "15px", background: "#FF6859", color: "white" }}
            >
              <Typography variant="h6" gutterBottom>
                Language Courses
              </Typography>
              <Typography variant="body2" paragraph>
                Choose from a wide range of language courses, tailored to
                different proficiency levels.
              </Typography>
              <img
                src="https://img.freepik.com/free-vector/flat-international-mother-language-day-illustration_23-2149219243.jpg?w=740&t=st=1697825654~exp=1697826254~hmac=0b205a330f524a3413014d668eb377a2df332fc140a45b358a6e566d9cf6e9cc"
                alt="Language Courses"
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              style={{ padding: "15px", background: "#47B39C", color: "white" }}
            >
              <Typography variant="h6" gutterBottom>
                Interactive Lessons
              </Typography>
              <Typography variant="body2" paragraph>
                Engage in interactive lessons, activities, and quizzes to
                reinforce your learning.
              </Typography>
              <img
                src="https://img.freepik.com/free-vector/data-analytics-online-video-tutorial-statistics-internet-presentation-business-development-course-webinar-business-analysis-corporate-seminar_335657-777.jpg?w=740&t=st=1697825708~exp=1697826308~hmac=e8581350d0ded9b9cca8544a5c8feeeacc2fcf4cb7fed46cc43dc04c79816e03"
                alt="Interactive Lessons"
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              style={{ padding: "15px", background: "#607D8B", color: "white" }}
            >
              <Typography variant="h6" gutterBottom>
                Language Tests
              </Typography>
              <Typography variant="body2" paragraph>
                Put your skills to the test with our language proficiency tests.
              </Typography>
              <img
                src="https://img.freepik.com/free-vector/language-translation-abstract-concept-illustration_335657-1877.jpg?w=740&t=st=1697825763~exp=1697826363~hmac=69c80c1d8ad38806ff8a43673e756f8a6d663bf9108d28e0861143d759e8e5ae"
                alt="Language Tests"
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="body1" paragraph m={"1rem 0"}>
          We are committed to helping you achieve your language learning goals.
          Join Reverb today and embark on your journey to becoming a global
          citizen through language.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
