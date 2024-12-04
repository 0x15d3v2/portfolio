import { Cpu, Database, Globe } from 'npm:lucide-preact';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-mono mb-12">
          <span className="text-purple-600">&gt; </span>
          skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg">
            <Cpu className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-mono text-lg mb-4">lang</h3>
            <ul className="space-y-2 text-gray-600">
              <li>typescript</li>
              <li>deno.js</li>
              <li>react</li>
              <li>kotlin</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <Database className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-mono text-lg mb-4">db</h3>
            <ul className="space-y-2 text-gray-600">
              <li>mongodb</li>
              <li>redis</li>
              <li>firestore</li>
              <li>mysql</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <Globe className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-mono text-lg mb-4">tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>git</li>
              <li>docker</li>
              <li>google cloud</li>
              <li>firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
