export default function Footer() {
  return <footer className="bg-white">
    <div className="md:block mx-auto md:flex w-full p-8 space-x-0 md:space-x-2">
      <div className="md:w-1/2">
        <h2 className="font-bold font-5xl mb-1">About Us</h2>
        <p className="mb-2"> We are a team of nurse, doctors, technologists and executives dedicated
          to help nurse find jobs that they love.</p>
        <p>All copyrights reserved @ 2020 - Health Explorer</p>
      </div>

      <div className="md:w-1/4 mt-4 md:mt-0">
        <h2 className="font-bold font-5xl mb-1">Sitemap</h2>
        <p>Nurses</p>
        <p>Employers</p>
        <p>Social networking</p>
        <p>Jobs</p>
      </div>
      <div className="md:w-1/4 mt-4 md:mt-0">
        <h2 className="font-bold font-5xl mb-1">Privacy</h2>
        <p>Terms of use</p>
        <p>Privay policy</p>
        <p>Cookie policy</p>
      </div>
    </div>
  </footer>
}