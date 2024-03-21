import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

export function GET(context) { // TODO: fix this
    const postImportResult = import.meta.glob('./*.md', { eager: true });
    const posts = Object.values(postImportResult);
    return rss({
        title: 'Portfolio',
        description: 'A portfolio template built with Astro',
        site: context.site,
        items: posts.map((post) => ({
            link: post.url,
            content: sanitizeHtml(post.compiledContent()),
            ...post.frontmatter,
        })),
    });
}