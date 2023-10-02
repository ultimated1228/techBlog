const marked = require('marked');

module.exports = {
      // take in a timestamp and return the time as a string
  format_time: (date) => {
    // 'toLocaleTimeString()' formats the time as H:MM:SS AM/PM
    return Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date));
    // return date.toLocaleTimeString();
  },
    format_markdown: (text) => {
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text) => {
            return `<a href="${href}" title="${title}" target="_blank">${text}</a>`;
        };
        return marked(text, { renderer });
    },
};