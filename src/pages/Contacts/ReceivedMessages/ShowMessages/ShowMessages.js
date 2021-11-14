import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const sendLogo = <FontAwesomeIcon icon={faPaperPlane} />
const ShowMessages = ({ singleMessage }) => {
    const { email, message, name, phone } = singleMessage
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{message}</td>
                <td><Button variant="info">{sendLogo}</Button></td>
            </tr>
        </tbody>
    );
};

export default ShowMessages;