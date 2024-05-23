import Header from "../Components/Templates/Header";
import TopSection from "../Components/Templates/TopSection";

const Contact = () => {
    return (
        <div className="info-container">
            <Header title="Contact" />
            <div className="info-section">
                <TopSection />
                <div className="general-container">
                    <div className="info-card-section">
                        <h2 className="sub-title" style={{backgroundColor: "white", textAlign:"left", padding: "0 21vw"}}>Contact us online:</h2>
                        <p style={{textAlign:"left"}}>Please use the Online Form button above to submit your request to the practice.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;