import { marked } from 'marked';

export const Nutshell = async (): Promise<{ el: HTMLElement }> => {
  const el = document.createElement('div');
  el.className = 'p-4';

  // Fetch the README file content
  const readmeContent = await fetch('./README.md').then((response) => response.text());

  // Parse markdown to HTML
  const parsedMarkdown = marked(readmeContent);

  // Render the content inside the element
  el.innerHTML = `
    <div class="markdown-body mx-auto px-72">
    <h1 class="text-center text-2xl font-bold py-4">Vanilla in a Nutshell</h1>
      ${parsedMarkdown}
    </div>
  `;

  // Apply additional styling (optional)
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/github-markdown-css/github-markdown.css'; // GitHub-like markdown style
  document.head.appendChild(link);

  return { el };
};
