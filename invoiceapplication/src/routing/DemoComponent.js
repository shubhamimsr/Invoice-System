import React, { useState } from 'react';

function DemoComponent() {
    const [selectedDateTime, setSelectedDateTime] = useState(getCurrentDateTime());

    // Function to get the current date and time in the required format (YYYY-MM-DDTHH:mm)
    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    // Event handler for input changes
    function handleInputChange(event) {
        setSelectedDateTime(event.target.value);
    }

    return (
        <div>
            <label htmlFor="datetime">Select a past or present date and time:</label>
            <input
                type="datetime-local"
                id="datetime"
                name="datetime"
                value={selectedDateTime}
                max={getCurrentDateTime()} // Restrict future dates
                onChange={handleInputChange}
                required
            />
        </div>
    );
}

export default DemoComponent;
