export default function Home() {
  return (
      <main className="min-h-screen bg-gray-100">
          {/* Navigation Bar */}
          <nav className="bg-blue-500 text-white p-4">
              <ul className="flex space-x-4">
                  <li><a href="/" className="hover:underline">Home</a></li>
                  <li><a href="/mint" className="hover:underline">Mint Tokens</a></li>
                  <li><a href="/ubi" className="hover:underline">Claim UBI</a></li>
                  <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
              </ul>
          </nav>

          {/* Content Section */}
          <section className="flex flex-col items-center justify-center mt-10 px-4">
              <h1 className="text-4xl font-bold text-blue-500 text-center">Welcome to the Forum Party Dashboard</h1>
              <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
                  The Forum Party is a decentralized movement dedicated to promoting participatory democracy.
                  We aim to create a transparent and inclusive governance system where every voice matters.
                  By leveraging blockchain technology, we empower citizens to engage in decision-making, build trust, and share resources equitably.
              </p>
          </section>

          {/* Mission Section */}
          <section className="mt-10 bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                  <li>Promote inclusivity and transparency in governance.</li>
                  <li>Use blockchain to ensure secure, verifiable participation.</li>
                  <li>Distribute Universal Basic Income (UBI) to members through smart contracts.</li>
                  <li>Enable citizens to mint unique VoterTokens for decision-making power.</li>
              </ul>
          </section>

          {/* Call to Action */}
          <section className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-gray-800">Get Started</h3>
              <p className="text-gray-600">Connect your wallet and begin engaging in decentralized governance.</p>
              <div className="mt-4">
                  <a
                      href="/mint"
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600"
                  >
                      Mint Your VoterToken
                  </a>
              </div>
          </section>
      </main>
  );
}
