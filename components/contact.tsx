import { Mail } from "npm:lucide-preact";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-mono mb-12">
          <span className="text-purple-600">&gt; </span>
          contact
        </h2>
        <div className="bg-white border border-gray-100 rounded-lg p-8">
          <p className="text-gray-600 mb-8">
            interested in collaborating? let's build something amazing together.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>send message</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
