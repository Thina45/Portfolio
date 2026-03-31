import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY);

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const serviceId = import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS configuration. Check your .env file.");
      }

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (response.status === 200) {
        setMessage({ type: "success", text: "✅ Message sent successfully! I'll get back to you soon." });
        setForm({ user_name: "", user_email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      const errorMsg = error.text || error.message || "Failed to send message";
      setMessage({ type: "error", text: `❌ ${errorMsg}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          {/* Left: Contact Form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="user_name">Your name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={form.user_name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="user_email">Your Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={form.user_email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                {message.text && (
                  <div className={`p-3 rounded-md text-center ${
                    message.type === "success" 
                      ? "bg-green-900 text-green-200" 
                      : "bg-red-900 text-red-200"
                  }`}>
                    {message.text}
                  </div>
                )}

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Right: 3D Model (only if NOT mobile) */}
          {!isMobile && (
            <div className="xl:col-span-7 min-h-96">
              <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                <ContactExperience />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
