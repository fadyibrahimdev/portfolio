export default function Footer() {
  return (
    <footer className="text-center py-8 text-gray-500 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Fady Attia. All rights reserved.</p>
        <p className="text-sm mt-2">Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
