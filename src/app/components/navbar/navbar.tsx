export default function Navbar() {
  return (
    // <nav className="absolute top-4 left-0 w-full flex justify-between items-center px-8 py-4 bg-black/30 backdrop-blur-md rounded-full max-w-4xl mx-auto">
    <nav className="absolute top-4 left-0 w-full flex justify-between items-center px-8 py-4 rounded-full mx-auto">
      <div className="flex items-center space-x-2">
        <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">⚛</div>
        <span className="text-white font-semibold">React Bits</span>
      </div>
     {/*  <div className="flex space-x-6 text-white">
        <a href="#" className="hover:text-purple-300">Home</a>
        <a href="#" className="hover:text-purple-300">Docs</a>
      </div> */}
    </nav>
  );
}
