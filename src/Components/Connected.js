import React from 'react';

const Connected = (props) => {
    return (
        <div className="connected-container">
            <h1 className="connected-header">You are connected to Metamask</h1>
            <p className="connected-account">Metamask Account: <span className='heading'>{props.account}</span></p>
            <p className="connected-account">Remaining Time: <span className='heading'>{props.remainingTime}</span></p>
            
            {props.showButton ? (
                <p className="connected-account">You have already voted {props.account}</p>
            ) : (
                <div className='vote-section'>
                    <input type="number" placeholder='Enter Candidate Index' value={props.number} onChange={props.handleNumberChange} />
                    <button className="vote-button" onClick={props.voteFunction}>Vote</button>
                </div>
            )}


            <table id="myTable" className="candidates-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Party name</th>
                        <th>Candidate votes</th>
                    </tr>
                </thead>
                <tbody>
                    {props.candidates.map((candidate, index) => (
                        <tr key={index}>
                            <td>{candidate.index}</td>
                            <td>{candidate.name}</td>
                            <td>{candidate.voteCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    );
}


export default Connected;