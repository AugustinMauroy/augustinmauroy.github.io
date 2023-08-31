import AncoredHeading from './ancoredHeading';
import Images from './images';
import CodeBox from './codeBox';
import InlineCode from './inlineCode';
import Blockquote from './blockquote';
import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
	h1: (props) => <AncoredHeading level={1} {...props} />,
	h2: (props) => <AncoredHeading level={2} {...props} />,
	h3: (props) => <AncoredHeading level={3} {...props} />,
	h4: (props) => <AncoredHeading level={4} {...props} />,
	h5: (props) => <AncoredHeading level={5} {...props} />,
	h6: (props) => <AncoredHeading level={6} {...props} />,
	img: (props) => <Images alt={props.alt} src={props.src} />,
	// @ts-ignore
	pre: (props) => <CodeBox codeData={props.children} />,
	code: (props) => <InlineCode {...props} />,
	blockquote: (props) => <Blockquote {...props} />,
};

export default components;
