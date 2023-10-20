import { Container, Grid, Paper, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{m: "2rem"}}>
      <Paper
        elevation={3}
        style={{ padding: "20px", margin: "20px 0"}}
      >
        <Typography variant="h4" gutterBottom >
          About Reverb
        </Typography>
        <Typography variant="body1" paragraph >
          Welcome to Reverb, your premier online language learning platform.
          We're here to help you learn and master different languages while
          making the learning process engaging and enjoyable.
        </Typography>
        <Typography variant="body1" paragraph >
          Our mission is to provide a dynamic and immersive language learning
          experience. With Reverb, you can explore a world of languages, gain
          cultural insights, and test your language skills.
        </Typography>
        <Typography variant="h5" gutterBottom >
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
                src="src/images/language.jpg"
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
                src="src/images/lessons.jpg"
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
                src="src/images/test.jpg"
                alt="Language Tests"
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="body1" paragraph >
          We are committed to helping you achieve your language learning goals.
          Join Reverb today and embark on your journey to becoming a global
          citizen through language.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
