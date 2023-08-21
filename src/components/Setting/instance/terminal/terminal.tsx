import { Box, Paper } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { ITerminalOptions, Terminal } from 'xterm';

import 'xterm/css/xterm.css';
import Head from './head';

const style = `
.xterm-viewport {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}
.xterm-scroll-area {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}
.xterm-rows {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}
.xterm-cursor-layer {
  display: none !important;
}
.xterm-viewport::-webkit-scrollbar {
  width: 0px !important;
  background: transparent !important;
}
.xterm-viewport::-webkit-scrollbar-thumb {
  background: transparent !important;
}
.xterm-viewport::-webkit-scrollbar-track {
  background: transparent !important;
}

`;

// const xtermjsTheme = {
//   foreground: '#F8F8F8',
//   background: '#2D2E2C',
//   selectionBackground: '#5DA5D533',
//   black: '#1E1E1D',
//   brightBlack: '#262625',
//   red: '#CE5C5C',
//   brightRed: '#FF7272',
//   green: '#5BCC5B',
//   brightGreen: '#72FF72',
//   yellow: '#CCCC5B',
//   brightYellow: '#FFFF72',
//   blue: '#5D5DD3',
//   brightBlue: '#7279FF',
//   magenta: '#BC5ED1',
//   brightMagenta: '#E572FF',
//   cyan: '#5DA5D5',
//   brightCyan: '#72F0FF',
//   white: '#F8F8F8',
//   brightWhite: '#FFFFFF',
// };

let terminal: Terminal | null = null;

// let terminalContainer = document.getElementById('terminal-container');
// const actionElements = {
//   find: document.querySelector('#find') as HTMLInputElement,
//   findNext: document.querySelector('#find-next') as HTMLInputElement,
//   findPrevious: document.querySelector('#find-previous') as HTMLInputElement,
//   findResults: document.querySelector('#find-results')
// };
// const paddingElement = document.getElementById('padding') as HTMLInputElement;

// function createTerminal() {
//   // Clean terminal
//   if (terminal) {
//     terminal.dispose();
//   }

//   terminal = new Terminal({
//     allowProposedApi: true,
//     windowsPty: {
//       // In a real scenario, these values should be verified on the backend
//       backend: 'conpty',
//       buildNumber: 22621,
//     },
//     fontFamily:
//       '"Fira Code", courier-new, courier, monospace, "Powerline Extra Symbols"',
//     theme: xtermjsTheme,
//   } as ITerminalOptions);
  
// }

const WebTerminal: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      const options: ITerminalOptions = {
        fontFamily: 'Consolas, monospace',
        fontSize: 18,
        theme: {
          background: 'rgb(255, 255, 255)',
          foreground: 'rgb(0, 0, 0)',
          cursor: 'rgb(149, 150, 149)',
        },
        //cursorBlink: true,
        cursorStyle: 'block',
        disableStdin: false,
      };

      // hide scrollbar
      const styleElement = document.createElement('style');
      styleElement.innerHTML = style;
      document.head.appendChild(styleElement);

      terminal = new Terminal(options);
      terminal.open(terminalRef.current);

      terminal.onData((data) => {
        terminal?.write(data);
      });

      // terminal.onKey((e) => {
      //   var key = e.domEvent.key;
      //   var printable =
      //     !e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;
      //   if (key === 'Enter') {
      //     terminal?.write('\r\n$ ');
      //   } else if (key.length === 1 && printable) {
      //     terminal?.write(key);
      //   } else if (key === 'Backspace') {
      //     terminal?.write('\b \b');
      //   }
      // });


      terminal.writeln('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    }

    return () => {
      if (terminal) {
        terminal.dispose();
      }
    };
  }, []);

  return (
    <Paper elevation={3} sx={{ height: '100%' }}>
      <Head />
      <Box
        sx={{
          height: 'calc(100% - 48px)',
          marginTop: '-8px',
          marginLeft: '8px',
        }}
      >
        <div ref={terminalRef} style={{ height: '100%' }}></div>
      </Box>
    </Paper>
  );
};

export default WebTerminal;
