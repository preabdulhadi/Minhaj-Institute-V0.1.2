export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Minhaj Institution</h3>
            <p className="text-emerald-100 leading-relaxed">
              Providing quality Islamic education for students of all ages. Learn Quran, Tajweed, and Islamic studies with expert teachers.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-emerald-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-emerald-100 hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#enroll" className="text-emerald-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/admin" className="text-emerald-100 hover:text-white transition-colors">
                  Owner Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-emerald-100">
              <li>WhatsApp: +92 316 9515824</li>
              <li>Email: muhammadrashi60776@gmail.com</li>
              <li className="pt-4">
                <a
                  href="https://wa.me/923169515824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700 pt-8 text-center">
          <p className="text-emerald-100">
            © 2025 Minhaj Institution – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
