import { GlobalStyle, ThemeProvider } from "@amsterdam/asc-ui"

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle />
      <div style={{ margin: '2em' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
