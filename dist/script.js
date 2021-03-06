const str = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`;

const CODE = "code",
PREVIEW = "PREVIEW";

class MarkdownPrev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: str,
      viewing: CODE };

    this.handleChange = this.handleChange.bind(this);
    this.handleCodeBtn = this.handleCodeBtn.bind(this);
    this.handlePrevBtn = this.handlePrevBtn.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({
      text: event.target.value });

  }

  handleCodeBtn() {
    this.setState({
      viewing: CODE });

  }

  handlePrevBtn() {
    this.setState({
      viewing: PREVIEW });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "main-container", className: "container-fluid" }, /*#__PURE__*/
      React.createElement("div", { id: "button-bar", className: "row d-lg-none" }, /*#__PURE__*/
      React.createElement("button", {
        id: "code-btn",
        className: "btn btn-standard",
        onClick: this.handleCodeBtn }, "code"), /*#__PURE__*/



      React.createElement("button", {
        id: "preview-btn",
        className: "btn btn-standard",
        onClick: this.handlePrevBtn }, "preview")), /*#__PURE__*/




      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        className:
        "overflow-auto col-12 col-lg-4 d-lg-block " + (
        this.state.viewing == PREVIEW ? "d-none" : ""),

        onChange: this.handleChange },

      str), /*#__PURE__*/

      React.createElement("div", {
        id: "preview",
        dangerouslySetInnerHTML: {
          __html: marked(this.state.text, { breaks: true }) },

        className:
        " overflow-auto col-12 col-lg-8 d-lg-block " + (
        this.state.viewing == CODE ? "d-none" : "") }))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPrev, null), document.getElementById("root"));