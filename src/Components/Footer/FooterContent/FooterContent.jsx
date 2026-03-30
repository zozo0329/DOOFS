import React from "react";

const FooterContent = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal text-base-content p-3 pt-20">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Cookies</a>
          <a className="link link-hover">Licenses</a>
        </nav>
      </footer>
      <div className="flex justify-start pt-10">
        <p className="cursor-default selection:bg-yellow-300 selection:text-black">
          &copy; 2069 Doofs. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterContent;
