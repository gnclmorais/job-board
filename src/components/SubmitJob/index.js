import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeforePostCheckList from "../BeforePostChecklist/index.js";
import SignIn from "../SignIn/index.js";
import JobForm from "../JobForm/JobForm.js";
import { Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router";
import * as ROUTES from '../../constants/routes.js';


const SumbitJobPage = ({createJobPost, currentUser, logIn}) => {
    const [validated, setValidated] = useState(false);

    const [formJobTitle, setFormJobTitle] = useState("");
    const [formJobDescription, setFormJobDescription] = useState("");
    const [formJobSalary, setFormJobSalary] = useState("");
    const [formJobRemote, setFormJobRemote] = useState(false);
    const [formJobContactName, setFormJobContactName] = useState("");
    const [formJobContactEmail, setFormJobContactEmail] = useState("");
    const [formJobPostLink, setFormJobPostLink] = useState("");
    const [formJobClosingDate, setFormJobClosingDate] = useState("");
    const [formJobCompanyName, setFormJobCompanyName] = useState("");
    const [formJobCompanyLocation, setFormJobCompanyLocation] = useState("");
    const [formJobCompanyWebsite, setFormJobCompanyWebsite] = useState("");
    const [formJobCompanyAddress, setFormJobCompanyAddress] = useState("");
    const [formJobCompanyPostcode, setFormJobCompanyPostcode] = useState("");

    const data = useLocation();
    const navigate = useNavigate();



    const getJobDataFromPreview = () => {
        if (data.state) {
            const jobTitle = document.getElementById('job-title');
            jobTitle.value = data.state.previewJob.title;
            setFormJobTitle(data.state.previewJob.title);

            const jobDescription = document.getElementById('job-description');
            jobDescription.value = data.state.previewJob.description;
            setFormJobDescription(data.state.previewJob.description);

            const jobSalary = document.getElementById('job-salary');
            jobSalary.value = data.state.previewJob.salary;
            setFormJobSalary(data.state.previewJob.salary);

            const jobRemoteCheck = document.getElementById('job-remote');
            if (data.state.previewJob.remote === true) {
                setFormJobRemote(true);
                jobRemoteCheck.checked = 'true'};

            const jobContactName = document.getElementById('job-contact-name');
            jobContactName.value = data.state.previewJob.contact_name;
            setFormJobContactName(data.state.previewJob.contact_name);

            const jobContactEmail = document.getElementById('job-contact-email');
            jobContactEmail.value = data.state.previewJob.email;
            setFormJobContactEmail(data.state.previewJob.email);

            const jobPostLink = document.getElementById('job-post-link');
            jobPostLink.value = data.state.previewJob.link_to_job;
            setFormJobPostLink(data.state.previewJob.link_to_job);

            const jobClosingDate = document.getElementById('job-closing-date');
            jobClosingDate.value = data.state.previewJob.expiry_date;
            setFormJobClosingDate(data.state.previewJob.expiry_date);

            const jobCompanyName = document.getElementById('company-name');
            jobCompanyName.value = data.state.previewJob.company;
            setFormJobCompanyName(data.state.previewJob.company);

            const jobCompanyWebsite = document.getElementById('company-website');
            jobCompanyWebsite.value = data.state.previewJob.company_website;
            setFormJobCompanyWebsite(data.state.previewJob.company_website);

            const jobCompanyLocation = document.getElementById('company-location');
            jobCompanyLocation.value = data.state.previewJob.location;
            setFormJobCompanyLocation(data.state.previewJob.location);

            const jobCompanyAddress = document.getElementById('company-address');
            jobCompanyAddress.value = data.state.previewJob.company_address;
            setFormJobCompanyAddress(data.state.previewJob.company_address);

            const jobCompanyPostcode = document.getElementById('company-postcode');
            jobCompanyPostcode.value = data.state.previewJob.company_postcode;
            setFormJobCompanyPostcode(data.state.previewJob.company_postcode);


        };
    };

    useEffect(() => {
        getJobDataFromPreview();
    }, []);

    const handleJobPostSubmitForm = (evt) => {
        const form = evt.currentTarget;
        if (form.checkValidity() === false) {
            evt.preventDefault();
            evt.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);
        evt.preventDefault();



        createJobPost(

            formJobTitle,
            formJobDescription,
            formJobSalary,
            formJobRemote,
            formJobContactName,
            formJobContactEmail,
            formJobPostLink,
            formJobClosingDate,
            formJobCompanyName,
            formJobCompanyLocation,
            formJobCompanyWebsite,
            formJobCompanyAddress,
            formJobCompanyPostcode
            );
        navigate(ROUTES.MY_JOBS);
    };

    const previewJob = {
        expiry_date: formJobClosingDate,
        company_address: formJobCompanyAddress,
        location: formJobCompanyLocation,
        company: formJobCompanyName,
        company_postcode: formJobCompanyPostcode,
        company_website: formJobCompanyWebsite,
        email: formJobContactEmail,
        contact_name: formJobContactName,
        created_by_id: "",
        description: formJobDescription,
        link_to_job: formJobPostLink,
        title: formJobTitle,
        published_on: "",
        remote: formJobRemote,
        salary: formJobSalary
    };



    return (
        <div className="container">
            {currentUser?
                <div>
                    <h2>List a new job</h2>
                    <p className="alert alert-primary fw-bold">You will need to make the payment of £50 before the job can be approved. <a href="https://buy.stripe.com/fZe5kAeDA5lY6ti5kk">Pay here</a>.</p>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-md-6 col-sm-12 order-md-last">
                            <BeforePostCheckList></BeforePostCheckList>
                        </div>
                        <div className="container col-md-6 col-sm-12">
                            <Form noValidate validated={validated} className='job-post-form' onSubmit={(evt) => {handleJobPostSubmitForm(evt)}}>
                            <JobForm
                                    setFormJobTitle={setFormJobTitle}
                                    setFormJobDescription={setFormJobDescription}
                                    setFormJobSalary={setFormJobSalary}
                                    setFormJobRemote={setFormJobRemote}
                                    setFormJobContactName={setFormJobContactName}
                                    setFormJobContactEmail={setFormJobContactEmail}
                                    setFormJobPostLink={setFormJobPostLink}
                                    setFormJobClosingDate={setFormJobClosingDate}
                                    setFormJobCompanyName={setFormJobCompanyName}
                                    setFormJobCompanyLocation={setFormJobCompanyLocation}
                                    setFormJobCompanyWebsite={setFormJobCompanyWebsite}
                                    setFormJobCompanyAddress={setFormJobCompanyAddress}
                                    setFormJobCompanyPostcode={setFormJobCompanyPostcode}
                                    formJobRemote={formJobRemote}
                                ></JobForm>
                                <div className="my-4">
                                    <Link
                                        to={{
                                            pathname: '/my/jobs/new/preview'
                                            }}
                                            state={{ previewJob }}
                                    >
                                                <Button className='button fw-bold' variant="secondary">Preview this job post</Button>
                                    </Link>

                                        <Button className='button fw-bold' variant="primary" type="submit">Submit job for approval</Button>

                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
                :
                <div className='mb-4'>
                    <h3 className='mb-4'>You need to log in to post a job</h3>
                    <SignIn logIn={logIn}></SignIn>
                </div>
            }
        </div>
    );
};

export default SumbitJobPage;
