export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex justify-between">
        <div>© 2025 My Company</div>
        <div>
          <a href="#" className="mx-2">FB</a>
          <a href="#" className="mx-2">IG</a>
          <a href="#" className="mx-2">TW</a>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div>Quick Links</div>
        <div>Important Links</div>
        <div>Contact: example@email.com</div>
      </div>
    </footer>
  );
}