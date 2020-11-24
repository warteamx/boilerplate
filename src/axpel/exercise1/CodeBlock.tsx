import React, { ReactElement } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


interface Props {
    value: string,
    language: string
}

export default function CodeBlock({ language, value }: Props): ReactElement {
    return (
        <SyntaxHighlighter language={language} style={dark}>
            {value}
        </SyntaxHighlighter>
    )
}

CodeBlock.defaultProps = {
    language: "javascript"
}
