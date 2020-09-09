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
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Accordion level={2} allowMultiple={false}>
          {(accordionProps) => (
            <React.Fragment>
              <AccordionSection {...accordionProps} label='Trigger 1'>
                <p>
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum
                </p>
              </AccordionSection>
              <AccordionSection {...accordionProps} label='Trigger 2'>
                <p>
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum
                </p>
              </AccordionSection>
              <AccordionSection {...accordionProps} label='Trigger 3'>
                <p>
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum
                </p>
              </AccordionSection>
              <AccordionSection {...accordionProps} label='Trigger 4'>
                <p>
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum
                  lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
                  epsum lorem epsum lorem epsum
                </p>
              </AccordionSection>
            </React.Fragment>
          )}
        </Accordion>
      </main>
    </div>
  );
}

export default App;
