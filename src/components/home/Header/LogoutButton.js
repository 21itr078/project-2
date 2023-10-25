import React, { useState, useEffect } from "react";

const LogoutButton = () => {
  const [isLoggedOut, setLoggedOut] = useState(true);
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Check the user's login status (you can replace this with your actual logic)
    const userIsLoggedIn = userEmail !== null;

    // Set the initial login status
    setLoggedOut(!userIsLoggedIn);
  }, [userEmail]);

  const handleLogout = () => {
    // Remove the 'userEmail' from localStorage
    localStorage.removeItem('userEmail');

    // Clear the user email from the state
    setUserEmail(null);

    // Set the flag to indicate that the user should be redirected
    setShouldRedirect(true);

    // You can also perform additional logout actions here if needed
  };

  // Redirect to the signin page if the flag is set
  if (shouldRedirect) {
    window.location.href = '/signin'; // Replace with your desired URL
    return null;
  }

  return isLoggedOut ? (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleLogout}>
      Login
    </button>
  ) : (
    <div>
      
      <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
