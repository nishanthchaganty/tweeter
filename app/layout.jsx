// This file contains compoents such as Nav Bar and Footer Bar which is common across the different web pages. 
import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    "title": "Prompter",
    "description": "Discover and share AI generated prompts."

}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
          <Provider>
            <div className='main'>

            <div className='Gradient' />
            </div>

            <main className='app'>
                <Nav></Nav>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout