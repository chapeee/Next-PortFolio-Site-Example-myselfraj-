"use client"
import React, { useState, useEffect } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState('');
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

  const handleEmailChange = (event : any) => {
    setEmail(event.target.value);
  };

  const handleUpdateEmail = () => {
    setSubscribed(false);
    setSubscriptionSuccess(false);
  };

  if (subscribed) {
    return (
      <div className="w-full bg-transparent text-white pt-[100px] pb-[100px]">
        <div className="mx-auto max-w-[720px] rounded-[32px] border border-white/30 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
          <h2 className="text-4xl font-semibold">😊 Cool! You are Already Subscribed</h2>
          <p className="mt-3 text-base text-white/80">You&apos;re signed up with the email address: {subscribedEmail}</p>
          <p className="pt-4 text-sm text-white/70">
            If you find this as a mistake:{" "}
            <span className="cursor-pointer text-white underline" onClick={handleUpdateEmail}>Update Email</span>
          </p>
        </div>
      </div>
    );
  }

  if (subscriptionSuccess) {
    return (
      <div className="w-full text-white pt-[100px] pb-[100px]">
        <div className="mx-auto max-w-[720px] rounded-[32px] border border-white/30 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
          <h2 className="text-4xl font-semibold">Thank you for subscribing!</h2>
          <p className="mt-3 text-base text-white/80">Expect fresh updates and insights in your inbox soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-white pt-[100px] pb-[100px]">
      <div className="mx-auto max-w-[720px] rounded-[32px] border border-white/30 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
        <h2 className="text-4xl font-semibold">Join my newsletter</h2>
        <p className="mt-5 text-base text-white/80">
          By joining my newsletter, you&apos;ll receive updates on the latest technology news and have the opportunity to learn more about coding.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <input
            type="text"
            className="w-full rounded-full border border-white/40 bg-white/90 px-6 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-siteDefaultColor/70 focus:outline-none focus:ring-2 focus:ring-siteDefaultColor/50 md:w-[320px]"
            aria-labelledby="subscribe write your email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-siteDefaultColor to-[#0aa0a4] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl md:w-auto"
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
