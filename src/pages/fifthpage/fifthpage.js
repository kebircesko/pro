import React from 'react';
import ImageZoom from 'react-medium-image-zoom';
import map6 from '../../assets/MobileMainPage/ITPMap2x_1 1.png'; // Import your map image

const Fifthpage = () => {
    console.log("Rendering Fifthpage component");

    return (
        <div>
            {/* Debugging Information */}
            <div>Rendering Fifthpage component</div>

            {/* Image Zoom */}
            <ImageZoom
                image={{
                    src: map6,
                    alt: 'Map Image',
                    className: 'img',
                    style: { width: '400px', height: '300px' }
                }}
                zoomImage={{
                    src: map6,
                    alt: 'Map Image',
                }}
            />
        </div>
    );
}

export default Fifthpage;
