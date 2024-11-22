import Image from "next/image"; // Import Image from Next.js

function Footer() {
  return (
    <div className="flex justify-evenly mt-6">
      <div>
        {/* 1 colum */}
        <Image
          src="/logo.webp" // Path to logo in the public folder
          alt="Logo"
          width={180}
          height={80}
          className="object-contain"
        />
        <p className="text-base text-gray-500 flex-wrap mt-6 w-60">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
      </div>

      <div>
        {/* mid coluum */}
        <h3 className="font-bold text-xl text-gray-600">
          Company </h3>
          <div className=" flex flex-col justify-start mt-4 text-base text-gray-500">
            <span >About</span>
            <span className="mt-2">Terms of Use</span>
            <span className="mt-2">Privacy Policy</span>
            <span className="mt-2">How it Works</span>
            <span className="mt-2">Contact Us</span>
          </div>
        
      </div>

      <div>
      <h3 className="font-bold text-xl text-gray-600"> Support </h3>
        <div className=" flex flex-col justify-start mt-4 text-base text-gray-500">
          <span>Support Carrer</span>
          <span className="mt-2">24h Services</span>
          <span className="mt-2">Quick Chat</span>
        </div>
      </div>
      <div>
      <h3 className="font-bold text-xl text-gray-600"> Contact </h3>
        <div className=" flex flex-col justify-start mt-4 text-base text-gray-500">
          <span className="mt-2">Whatsapp</span>
          <span className="mt-2">Support 24h</span>
        </div>
      </div>

    
    </div>

    
  );
}

export default Footer;
