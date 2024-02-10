"use client"
import React, { useState, useEffect } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState(null);
  const [subscriptionAttempted, setSubscriptionAttempted] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  useEffect(() => {
    // Check for the subscription cookie when the component mounts
    const subscribedCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('subscribed='));
    if (subscribedCookie) {
      setSubscribed(true);
      const emailCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('subscribedEmail='));
      if (emailCookie) {
        const email = emailCookie.split('=')[1];
        setSubscribedEmail(email);
      }
      // Check if user has attempted to subscribe previously
      const subscriptionAttemptedCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('subscriptionAttempted='));
      if (subscriptionAttemptedCookie) {
        setSubscriptionAttempted(true);
      }
    }
  }, []);

  const subscribeNewsletter = async () => {
    setLoading(true);
    const url = new URL("https://api.sender.net/v2/subscribers");
    const headers = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWY4OTg4YzNmMTdiMTEzYWQxZTRmYWMxMjNkMDA0ZDYxNjhlOGNjMGUzZTI0OWJkYzM1M2E2MjNmNDMxNmJiNDljNjg4YWQ0MWE2MjcxYWQiLCJpYXQiOiIxNzA3MjkwMTI1LjM0NzU1OCIsIm5iZiI6IjE3MDcyOTAxMjUuMzQ3NTYzIiwiZXhwIjoiNDg2MDg5MDEyNS4zNDQ4MTYiLCJzdWIiOiI4NDc5ODciLCJzY29wZXMiOltdfQ.Pqcje_g4Ep0d-DccaasSfv3JWTj3CK_SYI8hTcR6xDPD36Cx-QAhCyMVncOTERr42PP3Sr2gTrjhfAI0FyyVeg",
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
    const data = {
      "email": email,
      "groups": ["Newsletter"],
      "trigger_automation": false
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSubscriptionSuccess(true);
        // Set a cookie to indicate the user is subscribed
        document.cookie = "subscribed=true; max-age=8640000000000"; // 1 day expiration
        document.cookie = `subscribedEmail=${email}; max-age=8640000000000`; // 1 day expiration
        // setSubscribed(true);
        setSubscribedEmail(email);
        setEmail("");
        // Set a cookie to indicate the user has attempted to subscribe
        document.cookie = "subscriptionAttempted=true";
        setSubscriptionAttempted(true);
      } else {
        const errorData = await response.json();
        alert("Subscription failed: " + errorData.message);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred while subscribing. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdateEmail = () => {
    setSubscribed(false);
    setSubscriptionSuccess(false);
  };

  if (subscribed) {
    return (
      <div className="w-full bg-white text-black pt-[100px] pb-[100px]">
        <div className="container p-5 m-auto text-center">
          <h2 className="text-4xl font-medium">😊 Cool! You are Already Subscribed</h2>
          <p className="mt-2">You're signed up with the email address: {subscribedEmail}</p>
          <p className="text-gray-500 text-[14px] pt-2">
            If you find this as a mistake:{" "}
            <span className="text-black underline " onClick={handleUpdateEmail}>Update Email</span>
          </p>
        </div>
      </div>
    );
  }

  if (subscriptionSuccess) {
    return (
      <div className="w-full bg-white text-black pt-[100px] pb-[100px]">
        <div className="container p-5 m-auto text-center">
          <h2 className="text-4xl font-medium">Thank you for subscribing!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-black pt-[100px] pb-[100px]">
      <div className="container p-5 m-auto text-center">
        <h2 className="text-4xl font-medium">Join my newsletter</h2>
        <p className="text-[18px] max-w-[700px] m-auto mt-5">
          By joining my newsletter, you'll receive updates on the latest
          technology news and have the opportunity to learn more about coding.
        </p>
        <div className="md:join mt-10">
          <input
            type="text"
            className="input join-item w-full md:w-[300px] text-siteDefaultColor bg-white border border-gray-400"
            aria-labelledby="subscribe write your email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            type="button"
            className="btn bg-siteDefaultColor text-white join-item mt-5 md:mt-0 w-full md:w-auto"
            onClick={subscribeNewsletter}
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
}
