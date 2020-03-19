import React from 'react';
import Aux from '../hoc/Auxx';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import banner from '../../assets/img/bg.png';
import Navbarapp from '../Navigation/Navbarapp';
import './PrivacyPolicy.css';
import  Footer  from './Footer';
const privacypolicy = (props) => (
    <Aux >
        <Navbarapp />
        <Image src={banner} width="100% " fluid />
        <Container >
            <div>
                <p className="pp-header">Privacy Policy: The Runway Agency Co.,Ltd.</p>

                <p className="pp-text">
    This Privacy Policy applied to all of The Runway Agency Company Limitedâ€™s services (Websites/Applications) and under the Terms and Conditions stated on our website (www.therunwayagency.com).
    </p>
    <p className="pp-header-2">Personal data gathered by Our Services</p>
    <p className="pp-text">
    We only gather the personal data that our users voluntarily give to us.
    The Runway Agency pledges to respect your privacy, at no time the users are â€œtrackedâ€ when they enjoy their experience on our services.
    </p>
    <p className="pp-text">
    If you use the Instagram account when you log in on any of our services or posted your media or used hashtag that matched to our criteria,
    </p>
    <p className="pp-text">
    we gather data related to your account. Here is the list included but not limited to:
    </p>
    <ul className="pp-text pp-ul-padding">
    <li>Your Public info</li>
    <li>Profile picture</li>
    <li>Unique identifier of access to Instagram</li>
    <li>Gender, date of birth</li>
    <li>E-mail address</li>
    <li>Your post included hashtag</li>
    <li>Media</li>
    <li>Follower</li>
    <li>Follow by</li>
    <li>Caption</li>
    <li>Location</li>
    </ul>
    <p className="pp-text">
    If you use the Facebook connection when you log in on any of our services, we gather data related to your account. Here is the list included but not limited to:
    </p>
    <ul className="pp-text pp-ul-padding">
    <li>Your name and your user name and public info</li>
    <li>Profile picture</li>
    <li>Unique identifier of access to Facebook</li>
    <li>Gender, date of birth</li>
    <li>E-mail address</li>
    <li>Page you likes</li>
    <li>Your interest</li>
    <li>Friend List</li>
    <li>Like & Comment</li>
    </ul>
    <p className="pp-text">
    Furthermore, if you use the Twitter when you log in on any of our services or posted your media or used hashtag that matched to our criteria,
    </p>
    <p className="pp-text">
    we gather data related to your account. Here is the list included but not limited to:
    </p>

    <ul className="pp-text pp-ul-padding">
    <li>Your Public info</li>
    <li>Profile picture</li>
    <li>Unique identifier of access to Twitter</li>
    <li>Gender, date of birth</li>
    <li>E-mail address</li>
    <li>Your post included hashtag</li>
    <li>Media</li>
    <li>Follower</li>
    <li>Follow by</li>
    <li>Caption</li>
    <li>Location</li>
    </ul>
    <p className="pp-header-2">Checking and access to personal data</p>
    
    <p className="pp-text">The Runway Agency permits you to check at any time the personal data that we have about you. You have the right to consult, correct and modify the personal data that we store.</p>
    
    <p className="pp-text">Personal data and their transfer to a third party In order to respect your personal data, The Runway Agency doesnâ€™t communicate them directly to other companies. This measure is made to prevent a leak of data towards unknown or malicious entities. But we may summarize all collectible data into statistic data and graphic for marketing and branding purpose.
    </p>
    
    <p className="pp-header-2">Use of your personal data by The Runway Agency</p>
    <ul className="pp-text pp-ul-padding">
        
    <li>A request from the legal authorities.</li>
    <li>The realization of advertising audits, just as the feedback from a group who has been the subject of an advertising campaign and/or a special offer.

    </li>
    <li>The aggregation of statistical data within the framework of an advertising campaign that finances our services.

    </li>
</ul>
            </div>


        </Container>
        <Footer />
    </Aux>
);
export default privacypolicy;