import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayFooter from './Components/DisplayFooter';
import DisplayHeader from './Components/DisplayHeader';
import NavBar from './Components/Nav';
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import DisplayPrescriptions from './Components/Prescriptions/DisplayPrescriptions';
import Appointments from './Pages/Appointments';
import Contact from './Pages/Contact';
import MeetTheTeam from './Pages/MeetTheTeam';
import Policies from './Pages/Policies';
import Services from './Pages/Services';
import About from "./Pages/About"
import Other from './Pages/Other';
import PatientParticipationGroup from './Pages/patientParticipationGroup';
import FeedbackForm from './Components/FeedbackForm';
import OnlineOptions from './Pages/OnlineOptions';

function App() {

  return (
    <div className="App">
      <DisplayHeader />
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/prescriptions" element={<DisplayPrescriptions />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/other" element={<Other />} />
        <Route path="/patient-participation-group" element={<PatientParticipationGroup />} />
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/online-options" element={<OnlineOptions />} />
      </Routes>
      <DisplayFooter />
    </div>
  );
}

export default App;
