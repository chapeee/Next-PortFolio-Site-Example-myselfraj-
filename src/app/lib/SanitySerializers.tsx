import { Block } from '@sanity/block-content-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';


type Block = {
  _type: string;
  // Add any other properties you expect in a block
};

const serializers = {
  types: {
    code: (props: { node: { language: string; code: string } }) => (
      <div className='mt-8 mb-8 text-[15px] text-left code-snipit'>
        <SyntaxHighlighter language={props.node.language}>
          {props.node.code}
        </SyntaxHighlighter>
      </div>
    ),
    codefield: (props: { node: { language: string; code: string } }) => (
      <div className='mt-8 mb-8 text-[15px] text-left code-snipit'>
        <SyntaxHighlighter language={props.node.language}>
          {props.node.code}
        </SyntaxHighlighter>
      </div>
    ),
  },
};

export default serializers;
