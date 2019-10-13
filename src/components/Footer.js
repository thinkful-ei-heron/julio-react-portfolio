import React, { Component } from 'react'

let footerStyles = {
    color:'white',
    bottom:'0',
    left:'0',
    right:'0',
    textAlign: 'center',
    backgroundColor: 'black',
    padding:'5px 0',
}


export class Footer extends Component {
    render() {
        return (
            <div>
                <footer style={footerStyles}>
                    Julio C. Hernandez
                </footer>
            </div>
        )
    }
}

export default Footer

/* <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26" target="_blank" rel="noopener noreferrer">Icongeek26</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div> */
