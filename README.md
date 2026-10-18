/**
 * Name: Jillayne O Fabria
 * Subject: IT Programming 1
 * Section: BSIT 1M
 */

// Function to validate account information
function validate(data) {
    const validOccupations = [
        "Student",
        "Teacher",
        "Registrar",
        "Dean",
        "Counselor",
        "Staff",
        "Admin",
        "Alumni"
    ];

    const errors = [];

    if (!data.username || data.username.length < 5) {
        errors.push("Username must be at least 5 characters.");
    }

    if (!data.password || data.password.length < 8) {
        errors.push("Password must be at least 8 characters.");
    }

    if (data.age === "" || data.age == null ||
        isNaN(data.age) || data.age < 18 || data.age > 80) {
        errors.push("Age must be between 18 and 80.");
    }

    if (data.status !== "active" && data.status !== "inactive") {
        errors.push("Status must be active or inactive.");
    }

    if (!validOccupations.includes(data.occupation)) {
        errors.push("Please enter a valid occupation.");
    }

    return errors;
}

// Valid account
const validAccount = {
    username: "JillayneFabria",
    password: "Fabria123",
    age: 22,
    status: "active",
    occupation: "Student"
};

// Invalid account
const invalidAccount = {
    username: "Jay",
    password: "123",
    age: 17,
    status: "pending",
    occupation: "Unknown"
};

// Empty account
const emptyAccount = {
    username: "",
    password: "",
    age: "",
    status: "",
    occupation: ""
};

// Display results
console.log("Valid Account:", validate(validAccount));
console.log("Invalid Account:", validate(invalidAccount));
console.log("Empty Account:", validate(emptyAccount));