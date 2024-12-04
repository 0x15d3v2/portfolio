import { Code2 } from 'npm:lucide-preact';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-purple-100 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code2 className="w-6 h-6 text-purple-600" />
          <span className="font-mono text-lg text-gray-800">0x15d3</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#projects" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">projects</a>
          <a href="#skills" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">skills</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
