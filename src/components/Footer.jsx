import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Contacts + Hours */}
        <div className="space-y-6">
          
          <div>
            <h2 className="text-white text-lg font-semibold mb-2">
              Contacts
            </h2>
            <p>Email: info@anova.com</p>
            <p>Phone: +254 700 000 000</p>
            <p>Address: 123 Main Street, Nairobi, Kenya</p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2">
              Opening Hours
            </h2>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Public Holidays: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

        </div>

        {/* Popular Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">
            Popular Links
          </h2>
          <ul className="space-y-2">
            {[
              "Laptops",
              "Desktops",
              "iPhones",
              "MacBooks",
              "Tablets",
              "Accessories",
              "Office Electronics",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment */}
        <div className="space-y-6">

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">
              Payment Methods
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Visa</li>
              <li className="hover:text-white transition">Paybill</li>
              <li className="hover:text-white transition">Cash</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2">
              Payment Advisory
            </h2>
            <p className="text-sm text-gray-400">
              Upfront Payment Outside Nairobi
            </p>
          </div>

        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Anova Computers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;