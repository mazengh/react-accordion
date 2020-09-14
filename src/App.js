import React from 'react';
import Accordion from './components/Accordion';
import AccordionSection from './components/Accordion/Section';
import Heading from './components/Heading';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Heading className='App-title' level={1}>
          React Accordion
        </Heading>
      </header>
      <main className='App-content'>
        <p>
          A web accessible accordion component implemented based on the <a
            href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html"
            rel="noopener noreferrer"
            target="_blank">
            W3 best practices
          </a>.

          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>

        <Accordion classes="App-accordion-1" level={2} allowMultiple={false}>
          {(accordionProps) => (
            <React.Fragment>
              <AccordionSection {...accordionProps} label='2020'>
                <ul>
                  <li>COVID-19 pandemic</li>
                  <li>Prince Harry and Meghan Markle quit royal family</li>
                  <li>Australian bushfires</li>
                  <li>Kobe Bryant's death</li>
                  <li>"Murder hornets" arrive in US</li>
                </ul>
              </AccordionSection>
              <AccordionSection {...accordionProps} label='2019'>
               <ul>
                  <li>The Amazon Burns</li>
                  <li>Notre-Dame cathedral in Paris ravaged by fire</li>
                  <li>Second crash involving Boeing 737 Max</li>
                  <li>Theresa May resigns after Brexit failure</li>
                  <li>Hurricane Dorian hits the Bahamas</li>
                </ul>
              </AccordionSection>
              <AccordionSection {...accordionProps} label='2018'>
                <ul>
                  <li>MeToo Movement Goes Global</li>
                  <li>The Murder of Jamal Khashoggi</li>
                  <li>Meghan Markle joined the British royal family</li>
                  <li>Super Blue Blood Moon</li>
                  <li>Wildfires ravaged California</li>
                </ul>
              </AccordionSection>
              <AccordionSection {...accordionProps} label='2017'>
                <ul>
                  <li>Trump’s inauguration</li>
                  <li>Russia’s election meddling</li>
                  <li>Snapchat IPO</li>
                  <li>Paris climate agreement</li>
                  <li>Solar eclipse</li>
                </ul>
              </AccordionSection>
            </React.Fragment>
          )}
        </Accordion>
      </main>
    </div>
  );
}

export default App;
