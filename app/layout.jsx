import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

// Commonly Used Functions/Functionalities, Providers etc exist here!
// They can then be used throguhout the app.

// Change the metadata of our App!
export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts",
};

// Main entrypoint of our application
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
          {/* Put global components (like navbar) out here */}
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
