import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { IMaskInput } from "react-imask";
import { forwardRef } from "react";
import AnimateButton from "./AnimateButton";
import { IconSend } from "@tabler/icons";
import { LoadingButton } from "@mui/lab";
import emailjs from "emailjs-com";

const NumberPhoneMask = forwardRef((props, ref) => {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="#00 0000000"
      definitions={{ "#": /[0-9]/ }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default ({ md, theme, sm }) => {
  return (
    <Box
      data-aos={sm ? null : "fade-up"}
      data-aos-duration={sm ? null : "1000"}
      sx={{ position: "relative", mb: 5 }}
    >
      <Grid container spacing={0}>
        <Grid
          item
          sm={6}
          md={6}
          sx={6}
          sx={{
            height: "600px",
            bgcolor: "white",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            display: md ? "none" : "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://berrydashboard.io/static/media/img-groupmail.b23eba3a.png"
            className="floating-animation"
          />
        </Grid>
        <Grid
          item
          sm={6}
          md={6}
          sx={6}
          sx={{
            height: "600px",
            bgcolor: theme.palette.primary.light,
            display: md ? "none" : "block",
          }}
        ></Grid>
      </Grid>
      <Box
        sx={
          md
            ? {
                bgcolor: theme.palette.primary.light,
                borderRadius: "12px",
                p: 5,
              }
            : {
                position: "absolute",
                width: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-30%, -50%)",
                bgcolor: theme.palette.primary.light,
                borderRadius: "12px",
                boxShadow: "rgb(0 0 0 / 20%) 0px 0px 50px",
                p: 5,
              }
        }
      >
        <Formik
          initialValues={{
            name: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            subject: Yup.string().required("Subject is required"),
            message: Yup.string().required("Message is required"),
            email: Yup.string().email().required("Email is required"),
          })}
          onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
            emailjs
              .send(
                process.env.SERVICE_ID,
                process.env.TEMPLATE_ID,
                values,
                process.env.USER_ID
              )
              .then((res) => {
                console.log(res)
                setSubmitting(false);
                setStatus("success");
              })
              .catch((err) => {
                console.log(err);
                setSubmitting(false);
                setStatus("failed")
              });
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
            status,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid item sm={6} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel htmlFor="input-label-name">Name</InputLabel>
                    <OutlinedInput
                      id="input-label-name"
                      type="text"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Name"
                      autoComplete="off"
                    />
                    {touched.name && errors.name && (
                      <FormHelperText error id="helper-text-input-name">
                        {errors.name}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel htmlFor="input-label-phone-number">
                      Phone Number (optional)
                    </InputLabel>
                    <OutlinedInput
                      id="input-label-phone-number"
                      type="text"
                      value={values.phoneNumber}
                      name="phoneNumber"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Phone Number (optional)"
                      autoComplete="off"
                      inputComponent={NumberPhoneMask}
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                      <FormHelperText error id="helper-text-input-phone-number">
                        {errors.phoneNumber}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.subject && errors.subject)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel htmlFor="input-label-subject">
                      Subject
                    </InputLabel>
                    <OutlinedInput
                      id="input-label-subject"
                      type="text"
                      value={values.subject}
                      name="subject"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Subject"
                      autoComplete="off"
                    />
                    {touched.subject && errors.subject && (
                      <FormHelperText error id="helper-text-input-subject">
                        {errors.subject}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel htmlFor="input-label-email">Email</InputLabel>
                    <OutlinedInput
                      id="input-label-email"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Email"
                      autoComplete="off"
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error id="helper-text-input-email">
                        {errors.email}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.message && errors.message)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel htmlFor="input-label-message">
                      Message
                    </InputLabel>
                    <OutlinedInput
                      id="input-label-message"
                      type="text"
                      value={values.message}
                      name="message"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Message"
                      autoComplete="off"
                      multiline
                      rows={5}
                      inputProps={{ style: { marginTop: "15px" } }}
                    />
                    {touched.message && errors.message && (
                      <FormHelperText error id="helper-text-input-message">
                        {errors.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <AnimateButton>
                    <LoadingButton
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                      endIcon={<IconSend />}
                      loading={isSubmitting}
                      loadingPosition="end"
                    >
                      {isSubmitting ? "Sending Mail" : "Send Mail"}
                    </LoadingButton>
                  </AnimateButton>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        {/* <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth id="outlined-basic" label="Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone Number (optional)"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth id="outlined-basic" label="Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth id="outlined-basic" label="Subject" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              multiline
              rows={4}
              label="Message"
            />
            <Button
              sx={{ mt: 2 }}
              variant="outlined"
              fullWidth
              endIcon={<IconSend />}
            >
              Send Mail
            </Button>
          </Grid>
        </Grid> */}
      </Box>
    </Box>
  );
};
