export default function Footer() {
  return (
    <div className="bg-custom-green-50 p-4 flex justify-center sm:justify-between items-center flex-wrap flex-col-reverse sm:flex-row border-t">
      <div className="mt-3 sm:mt-0">
        <p className="text-gray-400 sm:text-white">© 2025 Deshens</p>
      </div>

      <div className="flex space-x-4">
        <a
          href="https://github.com/MatiasFranco289"
          target="_blank"
          className="text-white/80 hover:scale-105 duration-200"
        >
          Github
        </a>
        <a
          href="mailto:matias.franco289@gmail.com"
          className="text-white/80 hover:scale-105 duration-200"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
