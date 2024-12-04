const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-mono mb-4">
          <span className="text-purple-600">&gt; </span>
          hello world
        </h1>
        <p className="text-gray-600 mb-8 font-mono">
          typescript developer // building elegant solutions
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm text-left">
          <p className="text-gray-400">// current status</p>
          <p><span className="text-purple-600">const</span> developer = {'{'}</p>
          <p className="ml-4">name: <span className="text-gray-800">"0x15d3"</span>,</p>
          <p className="ml-4">role: <span className="text-gray-800">"full-stack developer"</span>,</p>
          <p className="ml-4">location: <span className="text-gray-800">"mars"</span></p>
          <p>{'}'}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
