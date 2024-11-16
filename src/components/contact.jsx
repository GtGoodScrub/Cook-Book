import React from "react";

const Contact = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
    <img src={require("../images/CookBookLogo.png")} height={150} width={200} alt="cookbooklogo"/>
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="subject" style={{ display: "block", marginBottom: "5px" }}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send message
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "10px", fontSize: "12px", color: "#555" }}>
        Protected by CookBook. Google's{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
          Terms
        </a>{" "}
        apply.
      </p>
    </div>
  );
};

export default Contact;