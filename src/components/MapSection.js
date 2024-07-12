import React from 'react';
import '../styles/MapSection.css';

const MapSection = () => {
    return (
        <div className="map-whole-container">
            <div className="map-container">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14753632.112256814!2d79.82299906653239!3d25.472978867342743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720749876121!5m2!1sen!2sin"
                    width="90%"
                    height="600px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default MapSection;
