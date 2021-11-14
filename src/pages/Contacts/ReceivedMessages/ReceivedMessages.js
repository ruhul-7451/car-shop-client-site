import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ShowMessages from './ShowMessages/ShowMessages';

const ReceivedMessages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        fetch('https://fierce-basin-08872.herokuapp.com/messages')
            .then(res => res.json())
            .then(data => setMessages(data))
    }, [])

    return (
        <div>
            <h3 className="mb-3 bg-light p-3 rounded text-dark">Messages Received: {messages.length}</h3>
            <Table className="  bg-white" striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    messages.map(singleMessage => <ShowMessages key={singleMessage._id} singleMessage={singleMessage}></ShowMessages>)
                }
            </Table>
        </div>
    );
};

export default ReceivedMessages;