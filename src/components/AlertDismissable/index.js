import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Fade from 'react-bootstrap/Fade';

function AlertDismissable() {
    const [show, setShow] = useState(false);
    
    const handleAlertToggle = () => {
        setShow(!show)
    };
    
    if(show) {
        return (
            <Fade  >
                <Alert  
                    sm={12} md={1} 
                    variant='danger' 
                    show={show}       
                >
                    <Alert.Heading>
                        Oh snap! You got an error! 
                        <CloseButton  onClick={handleAlertToggle} > chiudi</CloseButton>

                    </Alert.Heading>
                    <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                    </p>
                </Alert>
            </Fade>
        )
    } else {
        return (
            <Button onClick={handleAlertToggle}>ShowAlert</Button>
        )
    }
}

export default AlertDismissable;

    // if(show) {
    //     return (
    //          <Alert variant='danger' onClose={handleAlertToggle} dismissable>
    //             <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    //             <p>
    //               Change this and that and try again. Duis mollis, est non commodo
    //               luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    //               Cras mattis consectetur purus sit amet fermentum.
    //             </p>
    //         </Alert>
    //     )
    // } else {
    //     return (
    //         <Button onClick={handleAlertToggle}>ShowAlert</Button>
    //     )
    // }